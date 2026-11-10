'use client';

import { useEffect, useRef, useState } from 'react';
import type { Medio } from '@/content';

/**
 * El video de una lámina, con carga diferida: hasta que se pide solo hay un póster (una imagen perezosa) y un botón.
 * Un video sin voz (motion, grabación) arranca solo, mudo y en bucle, cuando la lámina está a la vista y la persona no
 * pidió menos movimiento; se pausa al salir. Uno con voz (Chispa) espera el clic. YouTube (sin cookies) y Vimeo van en
 * un iframe que recién se crea al pedirlo.
 */
export function VideoLamina({ m, titulo, mudo, reproducir }: { m: Medio; titulo: string; mudo: boolean; reproducir: string }) {
  const caja = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [activo, setActivo] = useState<'no' | 'solo' | 'pedido'>('no');

  useEffect(() => {
    if (!mudo || !m.video || !caja.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setActivo((a) => (a === 'no' ? 'solo' : a));
        video.current?.play().catch(() => {});
      } else video.current?.pause();
    }, { threshold: 0.5 });
    io.observe(caja.current);
    return () => io.disconnect();
  }, [mudo, m.video]);

  const poster = m.poster ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={m.poster} alt="" width={1600} height={900} loading="lazy" decoding="async" />
  ) : null;

  let dentro;
  if (activo !== 'no' && m.video) {
    dentro = (
      <video ref={video} src={m.video} poster={m.poster} title={titulo} width={1600} height={900} playsInline autoPlay
        muted={activo === 'solo'} loop={activo === 'solo'} controls={activo === 'pedido'} preload="metadata">
        {m.subtitulos && <track kind="captions" src={m.subtitulos} srcLang="es" label="Español" default />}
      </video>
    );
  } else if (activo === 'pedido' && (m.youtube || m.vimeo)) {
    const src = m.youtube
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(m.youtube)}?autoplay=1&rel=0&cc_load_policy=1`
      : `https://player.vimeo.com/video/${encodeURIComponent(m.vimeo!)}?autoplay=1&dnt=1`;
    dentro = <iframe src={src} title={titulo} width={1600} height={900} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />;
  } else {
    dentro = (
      <>
        {poster}
        <button type="button" className="video__play" onClick={() => setActivo('pedido')}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
          <span className="solo-lectores">{`${reproducir}: ${titulo}`}</span>
        </button>
      </>
    );
  }
  return (
    <div ref={caja} className="video" data-activo={activo}>
      {dentro}
      {activo === 'solo' && (
        <button type="button" className="video__sonido" onClick={() => { setActivo('pedido'); }}>
          {reproducir}
        </button>
      )}
    </div>
  );
}
