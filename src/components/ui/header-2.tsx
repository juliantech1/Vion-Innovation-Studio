'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
    lang?: 'en' | 'es';
    onLangChange?: (lang: 'en' | 'es') => void;
    variant?: 'dark' | 'light';
    onLogoClick?: (e: React.MouseEvent) => void;
}

const translations = {
    en: {
        work: 'Work',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        subscribe: 'How It Works',
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
        subscribe: 'Cómo Funciona',
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

export function Header({ lang = 'en', onLangChange, variant = 'dark', onLogoClick }: HeaderProps) {
    const isLight = variant === 'light';
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
        { label: t.work, href: '/work' },
        { label: t.services, href: '#', hasDropdown: true },
        { label: t.about, href: '/about' },
        { label: t.blog, href: '/blog' },
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
                isLight ? {
                    'border-black/10 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40 md:mt-5 md:max-w-5xl md:shadow-lg md:shadow-black/5':
                        scrolled && !open,
                    'bg-white/80 backdrop-blur-md': open,
                } : {
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
                    <a href="/" className="cursor-none" onClick={onLogoClick}>
                        <img src={isLight ? "/images/Untitled design(28).png" : "/images/Untitled design(27).png"} alt="VION Innovation Studio" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) =>
                        link.hasDropdown ? (
                            <div key={i} ref={servicesRef} className="relative">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className={cn("inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium transition-colors cursor-none", isLight ? "text-neutral-600 hover:text-black hover:bg-black/5" : "text-neutral-300 hover:text-white hover:bg-white/10")}
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
                                    <div className={cn("absolute top-full left-0 mt-3 w-64 rounded-xl border backdrop-blur-xl p-2 shadow-2xl", isLight ? "border-black/10 bg-white/90 shadow-black/5" : "border-white/10 bg-black/90 shadow-black/40")}>
                                        {serviceItems.map((item, j) => (
                                            <a
                                                key={j}
                                                href={item.href}
                                                className={cn("block rounded-lg px-4 py-3 text-base transition-colors cursor-none", isLight ? "text-neutral-600 hover:bg-black/5 hover:text-black" : "text-neutral-300 hover:bg-white/10 hover:text-white")}
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
                                className={cn("inline-flex items-center rounded-lg px-4 py-2.5 text-base font-medium transition-colors cursor-none", isLight ? "text-neutral-600 hover:text-black hover:bg-black/5" : "text-neutral-300 hover:text-white hover:bg-white/10")}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ),
                    )}
                </div>

                {/* Desktop CTA + Lang switch */}
                <div className="hidden items-center gap-3 md:flex">
                    {!scrolled && onLangChange && (
                        <button
                            onClick={() => onLangChange(lang === 'en' ? 'es' : 'en')}
                            className={cn("flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-none", isLight ? "border-black/20 text-neutral-600 hover:bg-black/5 hover:text-black" : "border-white/20 text-neutral-300 hover:bg-white/10 hover:text-white")}
                        >
                            <span className={lang === 'en' ? (isLight ? 'text-black' : 'text-white') : 'text-neutral-500'}>EN</span>
                            <span className="text-neutral-500">/</span>
                            <span className={lang === 'es' ? (isLight ? 'text-black' : 'text-white') : 'text-neutral-500'}>ES</span>
                        </button>
                    )}
                    <a href="/how-it-works" className={cn("rounded-lg border px-5 py-2.5 text-base font-medium transition-colors cursor-none", isLight ? "border-black/20 text-neutral-600 hover:bg-black/5 hover:text-black" : "border-white/20 text-neutral-300 hover:bg-white/10 hover:text-white")}>
                        {t.subscribe}
                    </a>
                    <button className={cn("rounded-lg px-5 py-2.5 text-base font-medium transition-colors cursor-none", isLight ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90")}>
                        {t.contact}
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className={cn("md:hidden rounded-lg border p-3 transition-colors cursor-none", isLight ? "border-black/20 text-black hover:bg-black/5" : "border-white/20 text-white hover:bg-white/10")}
                >
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    cn('backdrop-blur-xl fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t md:hidden', isLight ? 'bg-white/95 border-black/10' : 'bg-black/95 border-white/10'),
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
                                        className={cn("flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors cursor-none", isLight ? "text-neutral-600 hover:text-black hover:bg-black/5" : "text-neutral-300 hover:text-white hover:bg-white/10")}
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
                                        <div className={cn("ml-4 mt-2 grid gap-y-1 border-l pl-4", isLight ? "border-black/10" : "border-white/10")}>
                                            {serviceItems.map((item, j) => (
                                                <a
                                                    key={j}
                                                    href={item.href}
                                                    className={cn("block rounded-lg px-4 py-3 text-base transition-colors cursor-none", isLight ? "text-neutral-500 hover:bg-black/5 hover:text-black" : "text-neutral-400 hover:bg-white/10 hover:text-white")}
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
                                    className={cn("block rounded-lg px-4 py-3 text-lg font-medium transition-colors cursor-none", isLight ? "text-neutral-600 hover:text-black hover:bg-black/5" : "text-neutral-300 hover:text-white hover:bg-white/10")}
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ),
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="/how-it-works" className={cn("w-full rounded-lg border px-5 py-3 text-lg font-medium transition-colors cursor-none text-center", isLight ? "border-black/20 text-neutral-600 hover:bg-black/5 hover:text-black" : "border-white/20 text-neutral-300 hover:bg-white/10 hover:text-white")}>
                            {t.subscribe}
                        </a>
                        <button className={cn("w-full rounded-lg px-5 py-3 text-lg font-medium transition-colors cursor-none", isLight ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90")}>
                            {t.contact}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
