'use client';

import { Linkedin } from 'lucide-react';
import { useT } from '@/lib/i18n/context';

export function Footer() {
  const t = useT();

  const footerLinks = [
    { label: t.footer.links[0], href: '#services' },
    { label: t.footer.links[1], href: '#cases' },
    { label: t.footer.links[2], href: '#audit' },
  ];

  return (
    <footer className="border-t border-border py-10 px-5 md:px-10 bg-carbon">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="font-bold text-h5 text-snow tracking-tight">
          ADS<span className="text-teal">.</span>Architect
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-sm text-muted hover:text-snow transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-teal transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <span className="text-caption text-faint">
            &copy; {new Date().getFullYear()} ADS Architect. {t.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
