import { type FC } from 'react';
import { cn } from '@/lib/utils';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const professions = ['Web Dev', 'Ratownictwo Medyczne', 'Law Enforcement'];

  return (
    <footer className="w-full mt-5 py-6 px-4 z-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#1E293B] to-transparent mb-6" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[#F8FAFC] font-medium tracking-wider opacity-80">
          <span className="text-[#38BDF8]">BUŁKA Z MASŁEM</span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[#475569] text-sm uppercase tracking-[3px]">
          {professions.map((text, index) => (
            <span key={text} className="flex items-center">
              {text}
              {index !== professions.length - 1 && <span className="mx-2 text-[#38BDF8] opacity-50">•</span>}
            </span>
          ))}
        </div>

        <div className="text-[#475569] text-xs font-mono">
          [{currentYear}] — ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};