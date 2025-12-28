import { type FC, type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardAboutProps {
  title: string;
  description: ReactNode;
  Icon: LucideIcon;
  onActionClick?: () => void;
  isHistoryOpen?: boolean;
  className?: string;
}

export const CardAbout: FC<CardAboutProps> = ({ 
  title, 
  description, 
  Icon, 
  onActionClick, 
  isHistoryOpen,
  className 
}) => {
  const isRoleplay = title === "Roleplay";

  return (
    <div className={cn(
      "flex flex-col p-6 bg-[#1E293B]/50 border border-[#314158] rounded-xl transition-all duration-300",
      "hover:border-[#38BDF8]/50 hover:bg-[#1E293B]/80 w-full",
      isHistoryOpen && isRoleplay ? "border-[#38BDF8] bg-[#1E293B]" : "",
      className
    )}>
      <Icon size={24} className="text-[#38BDF8] mb-4" />
      
      <h3 className="text-[#F8FAFC] font-bold text-lg mb-2">
        {title}
      </h3>
      
      <div className="text-[#94A3B8] text-sm leading-relaxed mb-6">
        {description}
      </div>

      {isRoleplay && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            if (onActionClick) onActionClick();
          }} 
          className={cn(
            "mt-auto py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300",
            isHistoryOpen 
              ? "bg-[#F8FAFC]/10 text-[#F8FAFC] border border-[#F8FAFC]/20 hover:bg-[#F8FAFC]/20" 
              : "bg-[#38BDF8] text-[#0F172A] hover:bg-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          )}
        >
          {isHistoryOpen ? "Zamknij historię" : "Moja historia"}
        </button>
      )}
    </div>
  );
};