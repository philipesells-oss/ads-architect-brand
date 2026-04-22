'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';
import { useT } from '@/lib/i18n/context';

export function Navbar() {
  const t = useT();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.navbar.links[0], href: '#services' },
    { label: t.navbar.links[1], href: '#cases' },
    { label: t.navbar.links[2], href: `/${locale}/about` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-obsidian/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-h4 text-snow tracking-tight">
              ADS<span className="text-teal">.</span>Architect
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-snow transition-colors duration-200 text-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button as="a" href="#audit" size="sm">
              {t.navbar.cta}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-muted hover:text-snow transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian/98 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-h3 text-snow hover:text-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#audit" size="lg" onClick={() => setMenuOpen(false)}>
            {t.navbar.cta}
          </Button>
        </div>
      )}
    </>
  );
}
