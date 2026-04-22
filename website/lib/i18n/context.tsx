'use client';

import { createContext, useContext } from 'react';
import type { Translations } from './translations';

const TranslationsContext = createContext<Translations | null>(null);

export function TranslationsProvider({
  t,
  children,
}: {
  t: Translations;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={t}>{children}</TranslationsContext.Provider>
  );
}

export function useT(): Translations {
  const ctx = useContext(TranslationsContext);
  if (!ctx) throw new Error('useT must be used within TranslationsProvider');
  return ctx;
}
