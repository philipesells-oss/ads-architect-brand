import { getTranslations, locales, type Locale } from '@/lib/i18n/translations';
import { TranslationsProvider } from '@/lib/i18n/context';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const t = getTranslations(params.locale);

  return <TranslationsProvider t={t}>{children}</TranslationsProvider>;
}
