'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Country {
  code: string;
  dial: string;
  flag: string;
  name: string;
}

const COUNTRIES: Country[] = [
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'SG', dial: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'PT', dial: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'IT', dial: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'NL', dial: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'AR', dial: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'CO', dial: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: 'ZA', dial: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'TH', dial: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: 'MY', dial: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  required?: boolean;
}

export function PhoneInput({ value, onChange, name, required }: PhoneInputProps) {
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [localNumber, setLocalNumber] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filtered = search
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRIES;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(country: Country) {
    setSelected(country);
    setOpen(false);
    setSearch('');
    onChange(`${country.dial}${localNumber}`);
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const num = e.target.value.replace(/[^\d\s\-().]/g, '');
    setLocalNumber(num);
    onChange(`${selected.dial}${num}`);
  }

  return (
    <div className="flex w-full" ref={dropdownRef}>
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={value} required={required} />}

      {/* Country selector */}
      <div className="relative flex-shrink-0">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 h-full px-3 bg-carbon border border-border border-r-0 rounded-l text-body text-snow focus:outline-none focus:border-teal/50 hover:border-teal/30 transition-colors duration-200 min-w-[88px]"
        >
          <span className="text-base leading-none">{selected.flag}</span>
          <span className="text-body-sm text-muted">{selected.dial}</span>
          <ChevronDown size={12} className={`text-faint transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute z-50 top-full left-0 mt-1 w-56 bg-obsidian border border-border rounded-lg shadow-xl overflow-hidden">
            <div className="p-2 border-b border-border">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-carbon border border-border rounded px-3 py-1.5 text-body-sm text-snow placeholder-faint focus:outline-none focus:border-teal/50"
                autoFocus
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filtered.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => handleSelect(c)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-carbon transition-colors duration-150 ${
                    selected.code === c.code ? 'bg-teal/10 text-teal' : 'text-snow'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span className="text-body-sm flex-1 truncate">{c.name}</span>
                  <span className="text-caption text-faint">{c.dial}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-caption text-faint px-3 py-3 text-center">No results</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Number input */}
      <input
        type="tel"
        value={localNumber}
        onChange={handleNumberChange}
        placeholder="Your phone number"
        className="flex-1 bg-carbon border border-border rounded-r px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200"
      />
    </div>
  );
}
