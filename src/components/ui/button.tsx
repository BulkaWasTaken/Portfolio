import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  to?: string;
  text?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ 
  to = "/contact", 
  text = "KONTAKT", 
  className 
}) => {
  return (
    <Link 
      to={to}
      className={cn(
        "inline-block mt-5 mb-[280px] px-6 py-3 border-2 border-[#38BDF8] rounded-lg",
        "bg-transparent text-[#38BDF8] text-[13px] font-extrabold uppercase tracking-[1.5px]",
        "transition-all duration-300 ease-in-out cursor-pointer no-underline w-fit",
        "hover:bg-[#38BDF8] hover:text-[#0F172A] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]",
        className
      )}
    >
      {text}
    </Link>
  );
};