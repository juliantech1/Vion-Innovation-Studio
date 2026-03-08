'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
    lang?: 'en' | 'es';
    onLangChange?: (lang: 'en' | 'es') => void;
}

const translations = {
    en: {
        work: 'Work',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        subscribe: 'Subscribe',
        contact: 'Contact',
        serviceItems: [
            'Brand Strategy',
            'Start Up Branding',
            'Web Design',
            'App Design',
            'Web App Development',
            'AI Automations',
        ],
    },
    es: {
        work: 'Proyectos',
        services: 'Servicios',
        about: 'Nosotros',
        blog: 'Blog',
        subscribe: 'Suscribirse',
        contact: 'Contacto',
        serviceItems: [
            'Estrategia de Marca',
            'Branding para Startups',
            'Diseño Web',
            'Diseño de Apps',
            'Desarrollo Web',
            'Automatizaciones IA',
        ],
    },
};

export function Header({ lang = 'en', onLangChange }: HeaderProps) {
    const [open, setOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);
    const scrolled = useScroll(10);
    const servicesRef = React.useRef<HTMLDivElement>(null);

    const t = translations[lang];

    const serviceItems = t.serviceItems.map((label) => ({
        label,
        href: '#',
    }));

    const links = [
        { label: t.work, href: '#' },
        { label: t.services, href: '#', hasDropdown: true },
        { label: t.about, href: '#' },
        { label: t.blog, href: '#' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    React.useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <header
            className={cn(
                'relative z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-xl md:border md:transition-all md:duration-300 md:ease-out',
                {
                    'border-white/10 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40 md:mt-5 md:max-w-5xl md:shadow-lg md:shadow-black/30':
                        scrolled && !open,
                    'bg-black/80 backdrop-blur-md': open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex w-full items-center justify-between px-6 md:transition-all md:duration-300 md:ease-out',
                    scrolled ? 'h-16 md:px-4' : 'h-20',
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/images/Untitled design(27).png" alt="VION Innovation Studio" className="h-10 w-auto" />
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) =>
                        link.hasDropdown ? (
                            <div key={i} ref={servicesRef} className="relative">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                                >
                                    {link.label}
                                    <ChevronDown
                                        className={cn(
                                            'size-4 transition-transform duration-200',
                                            servicesOpen && 'rotate-180',
                                        )}
                                    />
                                </button>
                                {servicesOpen && (
                                    <div className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl p-2 shadow-2xl shadow-black/40">
                                        {serviceItems.map((item, j) => (
                                            <a
                                                key={j}
                                                href={item.href}
                                                className="block rounded-lg px-4 py-3 text-base text-neutral-300 hover:bg-white/10 hover:text-white transition-colors cursor-none"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                key={i}
                                className="inline-flex items-center rounded-lg px-4 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ),
                    )}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="rounded-lg border border-white/20 px-5 py-2.5 text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-colors cursor-none">
                        {t.subscribe}
                    </button>
                    <button className="rounded-lg bg-white px-5 py-2.5 text-base font-medium text-black hover:bg-white/90 transition-colors cursor-none">
                        {t.contact}
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden rounded-lg border border-white/20 p-3 text-white hover:bg-white/10 transition-colors cursor-none"
                >
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    'bg-black/95 backdrop-blur-xl fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/10 md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex h-full w-full flex-col justify-between gap-y-4 p-6',
                    )}
                >
                    <div className="grid gap-y-2">
                        {links.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.label}>
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={cn(
                                                'size-5 transition-transform duration-200',
                                                servicesOpen && 'rotate-180',
                                            )}
                                        />
                                    </button>
                                    {servicesOpen && (
                                        <div className="ml-4 mt-2 grid gap-y-1 border-l border-white/10 pl-4">
                                            {serviceItems.map((item, j) => (
                                                <a
                                                    key={j}
                                                    href={item.href}
                                                    className="block rounded-lg px-4 py-3 text-base text-neutral-400 hover:bg-white/10 hover:text-white transition-colors cursor-none"
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={link.label}
                                    className="block rounded-lg px-4 py-3 text-lg font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ),
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="w-full rounded-lg border border-white/20 px-5 py-3 text-lg font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-colors cursor-none">
                            {t.subscribe}
                        </button>
                        <button className="w-full rounded-lg bg-white px-5 py-3 text-lg font-medium text-black hover:bg-white/90 transition-colors cursor-none">
                            {t.contact}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
