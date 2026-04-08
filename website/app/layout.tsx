import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: {
    default: 'ADS Architect — We Build the System. You Fill the Calendar.',
    template: '%s | ADS Architect',
  },
  description:
    'We build acquisition systems for hospitality and wellness brands. Meta, Google, TikTok, CRM, and automation — engineered into one system that fills your calendar.',
  keywords: [
    'performance marketing',
    'acquisition system',
    'hospitality marketing',
    'wellness marketing',
    'Meta Ads',
    'Google Ads',
    'CRM automation',
  ],
  metadataBase: new URL('https://adsarchitect.agency'),
  openGraph: {
    title: 'ADS Architect — We Build the System. You Fill the Calendar.',
    description:
      'Acquisition infrastructure for premium hospitality and wellness brands. Not just ads — a complete system.',
    type: 'website',
    url: 'https://adsarchitect.agency',
    siteName: 'ADS Architect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADS Architect — We Build the System. You Fill the Calendar.',
    description: 'Acquisition infrastructure for premium hospitality and wellness brands.',
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-obsidian text-snow antialiased">{children}</body>
    </html>
  );
}
