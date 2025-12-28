import { type FC, type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardHomeProps {
  title: string;
  description: ReactNode;
  Icon: LucideIcon;
  className?: string;
}

export const CardHome: FC<CardHomeProps> = ({ title, description, Icon, className }) => {
  const isRoleplay = title === "Roleplay";

  return (
    <div className={cn(
      "flex flex-col p-6 bg-[#1E293B]/50 border border-[#314158] rounded-xl transition-all duration-300",
      "hover:border-[#38BDF8] hover:bg-[#1E293B]/80 hover:-translate-y-1 w-full max-w-[350px]",
      className
    )}>
      <Icon size={24} className="text-[#38BDF8] mb-4" />
      
      <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">
        {title}
      </h3>
      
      <div className="text-[#94A3B8] text-sm leading-relaxed mb-4">
        {description}
      </div>

      {isRoleplay && (
        <button className="mt-auto py-2 px-4 bg-[#38BDF8] text-[#0F172A] rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#7dd3fc] transition-colors">
          Moja historia
        </button>
      )}
    </div>
  );
};