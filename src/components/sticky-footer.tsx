import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
	GithubIcon,
} from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-[720px] w-full', className)}
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
			{...props}
		>
			<div className="fixed bottom-0 h-[720px] w-full bg-black">
				<div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t border-white/10 px-4 py-8 md:px-12">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.005)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.005)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.005)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
						</div>
						<div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
							<AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
								<div className="flex items-center gap-3">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
										<path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4306 9.70695C12.742 9.33317 13.2633 9.30058 13.6052 9.62118L19.1798 14.8165C19.4894 15.1054 19.4894 15.5841 19.1798 15.873L13.6052 21.0683C13.2633 21.3889 12.742 21.3563 12.4306 19.9991V9.70695Z" fill="currentColor" />
									</svg>
									<span className="text-white font-bold text-lg tracking-tight">VION</span>
								</div>
								<p className="text-neutral-400 mt-8 text-sm md:mt-0">
									Innovation studio crafting digital experiences through
									design, development, and AI-powered solutions.
								</p>
								<div className="flex gap-2">
									{socialLinks.map((link) => (
										<a
											key={link.title}
											href={link.href}
											className="inline-flex items-center justify-center size-8 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors cursor-none"
										>
											<link.icon className="size-4" />
										</a>
									))}
								</div>
							</AnimatedContainer>
							{footerLinkGroups.map((group, index) => (
								<AnimatedContainer
									key={group.label}
									delay={0.1 + index * 0.1}
									className="w-full"
								>
									<div className="mb-10 md:mb-0">
										<h3 className="text-sm uppercase text-white font-semibold tracking-wider">{group.label}</h3>
										<ul className="text-neutral-400 mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
											{group.links.map((link) => (
												<li key={link.title}>
													<a
														href={link.href}
														className="hover:text-white inline-flex items-center transition-all duration-300 cursor-none"
													>
														{link.icon && <link.icon className="me-1 size-4" />}
														{link.title}
													</a>
												</li>
											))}
										</ul>
									</div>
								</AnimatedContainer>
							))}
						</div>
						<div className="text-neutral-500 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-2 text-sm md:flex-row">
							<p>© 2025 Vion Innovation Studio. All rights reserved.</p>
							<p className="text-neutral-600">Built with purpose.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Instagram', href: '#', icon: InstagramIcon },
	{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
	{ title: 'Twitter', href: '#', icon: TwitterIcon },
	{ title: 'GitHub', href: '#', icon: GithubIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Services',
		links: [
			{ title: 'Brand Strategy', href: '#' },
			{ title: 'Start Up Branding', href: '#' },
			{ title: 'Web Design', href: '#' },
			{ title: 'App Design', href: '#' },
			{ title: 'Web App Development', href: '#' },
			{ title: 'AI Automations', href: '#' },
		],
	},
	{
		label: 'Work',
		links: [
			{ title: 'Case Studies', href: '#' },
			{ title: 'Portfolio', href: '#' },
			{ title: 'Testimonials', href: '#' },
			{ title: 'Industries', href: '#' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '#' },
			{ title: 'Blog', href: '#' },
			{ title: 'Careers', href: '#' },
			{ title: 'Contact', href: '#' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Service', href: '#' },
			{ title: 'Cookie Policy', href: '#' },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
