import { type FC } from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { Mail, MessageSquare, ExternalLink, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  hoverColor: string;
}

const CONTACT_METHODS: readonly ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "dawidbrykalski@icloud.com",
    href: "mailto:dawidbrykalski@icloud.com",
    hoverColor: "group-hover:text-red-400"
  },
  {
    icon: MessageSquare,
    label: "Discord",
    value: "_bulka_z_maslem_",
    href: "https://discord.com/",
    hoverColor: "group-hover:text-indigo-400"
  }
] as const;

const Contact: FC = () => {
  return (
    <PageTransition>
      <div className="flex items-center mt-24 flex-col px-6 md:px-10">
        <h1 className="font-bold text-5xl mb-5 text-[#F8FAFC]">Kontakt</h1>
        <p className="text-xl mb-12 text-[#F8FAFC] text-center max-w-2xl">
          Chcesz nawiązać współpracę lub o coś zapytać? 
          <br />Znajdziesz mnie na poniższych platformach.
        </p>

        <div className="flex flex-col gap-6 w-full max-w-[700px]">
          {CONTACT_METHODS.map((method) => (
            <a 
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-[#1E293B] border border-[#38BDF8]/10 rounded-2xl transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#1E293B]/80 shadow-lg"
            >
              <div className="flex items-center">
                <div className="p-4 bg-[#0F172A] rounded-xl mr-6 group-hover:scale-110 transition-transform border border-slate-800">
                  <method.icon size={28} className="text-[#38BDF8]" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                    {method.label}
                  </p>
                  <p className={cn(
                    "text-lg md:text-xl text-[#F8FAFC] font-semibold transition-colors",
                    method.hoverColor
                  )}>
                    {method.value}
                  </p>
                </div>
              </div>
              
              <ExternalLink size={20} className="text-slate-600 group-hover:text-[#38BDF8] transition-colors mr-2 md:mr-4" />
            </a>
          ))}
          
          <div className="mt-8 p-8 rounded-2xl bg-[#1E293B] border-l-4 border-[#38BDF8] shadow-xl">
            <h3 className="text-[#F8FAFC] font-bold text-xl mb-2 text-center">Dostępność</h3>
            <p className="text-[#F8FAFC]/70 text-center italic leading-relaxed">
              Najszybciej złapiesz mnie poprzez <span className="text-[#38BDF8] font-bold uppercase">Discord</span>.
              Staram się odpowiadać jak najszybciej, zazwyczaj w ciągu kilku godzin.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;