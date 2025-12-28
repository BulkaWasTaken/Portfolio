import { type FC, type ReactNode, useState } from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { Code2, Bot, Siren, User, ChevronUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CardAbout } from '@/components/common/CardAbout';

import chpOne from '@/assets/images/chpOne.png';
import chpTwo from '@/assets/images/chpTwo.webp';
import chpThree from '@/assets/images/chpThree.png';
import chpFour from '@/assets/images/chpFour.png';
import lasdOne from '@/assets/images/lasdOne.png';
import lasdTwo from '@/assets/images/lasdTwo.png';
import lasdThree from '@/assets/images/lasdThree.png';
import lasdFour from '@/assets/images/lasdFour.png';
import saspOne from '@/assets/images/saspOne.webp';
import saspTwo from '@/assets/images/saspTwo.png';
import daoOne from '@/assets/images/daoOne.png';
import daoTwo from '@/assets/images/daoTwo.png';
import lapdOne from '@/assets/images/lapdOne.jpeg';
import lapdTwo from '@/assets/images/lapdTwo.png';

interface HobbyItem {
  title: string;
  Icon: LucideIcon;
  description: ReactNode;
}

const HOBBY_DATA: readonly HobbyItem[] = [
  {
    title: "Frontend & Web Development",
    Icon: Code2,
    description: (
      <>
        Tworzę projekty frontendowe w <b>JavaScript/TypeScript</b>, skupiając się na tworzeniu intuicyjnych interfejsów i estetycznych paneli. W swoich projektach korzystam z technologii takich jak <b>React, TypeScript oraz Tailwind</b>.
      </>
    )
  },
  {
    title: "Automatyzacja & Boty",
    Icon: Bot,
    description: (
      <>
        Interesuję się automatyzacją procesów w tym <b>botami Discord</b>. Tworzę rozwiązania, które usprawniają zarządzanie serwerami, integrują funkcje i poprawiają interakcję użytkowników.
      </>
    )
  },
  {
    title: "Służby ratunkowe",
    Icon: Siren,
    description: (
      <>
        Fascynuje mnie <b>działanie służb ratunkowych i bezpieczeństwa publicznego</b>. Interesuję się <b>ratownictwem medycznym</b> oraz <b>law enforcement</b>.
      </>
    )
  },
  {
    title: "Roleplay",
    Icon: User,
    description: (
      <>
        Lubię <b>roleplay</b>, w którym mogę odgrywać różne postaci i wchodzić w interakcje z innymi graczami. Najczęściej <b>gram postać peace officer</b> z USA.
      </>
    )
  }
] as const;

const HISTORY_SECTIONS = [
  { 
    title: "Southern California Roleplay - California Highway Patrol", 
    imgs: [chpOne, chpTwo, chpThree, chpFour], 
    info: "Styczeń 2025 - Teraz",
    ranks: "Probationary Officer, Officer Tier 1, Officer Tier 2, Officer Tier 3",
    list: ["Personnel and Training Division (Field Training Officer)"] 
  },
  { 
    title: "Vibe Role Play - Los Santos County Sheriff's Department", 
    imgs: [lasdOne, lasdTwo, lasdThree, lasdFour], 
    info: "Listopad 2024 - Kwiecień 2025 | Lipiec 2025 - Październik 2025",
    ranks: "Deputy Sheriff, Probationary Sergeant, Sergeant, Lieutenant, Captain",
    list: ["Special Enforcement Bureau (Captain)", "Operation Safe Streets Bureau (Gang Detective)", "Taskforce for Regional Auto Theft Prevention (Detective)"] 
  },
  { 
    title: "Vibe Role Play - San Andreas State Parks", 
    imgs: [saspOne, saspTwo], 
    info: "Lipiec 2025 - Wrzesień 2025",
    ranks: "Peace Officer Lifeguard, Game Warden, Supervisor",
    list: ["Department of Fish and Wildlife (Supervisor)", "Lifeguards (Peace Officer Lifeguard)"] 
  },
  { 
    title: "Vibe Role Play - Los Santos County District Attorney's Office", 
    imgs: [daoOne, daoTwo], 
    info: "Październik 2024 - Marzec 2025",
    ranks: "BOI Investigator, BOI Sergeant, District Attorney, Lider",
    list: ["Prosecutors (Lider)", "Bureau of Investigation (Lider)", "US Attorney's Office (Overseer)"] 
  },
  { 
    title: "Vibe Role Play - Los Santos Police Department", 
    imgs: [lapdOne, lapdTwo], 
    info: "Lipiec 2024 - Listopad 2024",
    ranks: "Police Officer I, Police Officer II, Police Officer III",
    list: ["Field Training Officer", "Special Weapons & Tactics (Operator)"] 
  }
] as const;

const About: FC = () => {
  const [showHistory, setShowHistory] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleHistory = () => {
    const newState = !showHistory;
    setShowHistory(newState);
    if (newState) scrollToTop();
  };

  return (
    <PageTransition>
      <div className="flex items-center mt-24 flex-col px-6 md:px-10 pb-20">
        <h1 className="font-bold text-5xl mb-5 text-[#F8FAFC]">O mnie</h1>
        <p className="text-xl mb-10 text-[#F8FAFC]">
          <span className="font-bold">Cześć!</span> Nazywam się 
          <span className="text-[#38BDF8] font-bold name"> Dawid</span>.
        </p>

        <div className="flex flex-col lg:flex-row justify-center transition-all duration-700 ease-in-out gap-8 w-full max-w-[1400px]">
          
          <div className={`flex gap-5 flex-col transition-all duration-700 ease-in-out ${
            showHistory ? 'lg:w-[35%]' : 'w-full max-w-[800px] mx-auto'
          }`}>
            {HOBBY_DATA.map((item) => (
              <CardAbout 
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                onActionClick={handleToggleHistory}
                isHistoryOpen={showHistory}
              />
            ))}
          </div>

          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
            showHistory 
              ? 'lg:w-[65%] opacity-100 h-auto scale-100' 
              : 'w-0 opacity-0 h-0 pointer-events-none scale-95'
          }`}>
            <div className="bg-[#1E293B] rounded-xl border border-[#38BDF8]/20 shadow-2xl p-6 md:p-8 relative flex flex-col">
              <div className="min-w-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold">Moja przygoda Roleplay</h2>
                  <button 
                    onClick={() => setShowHistory(false)}
                    className="text-[#38BDF8] hover:bg-[#38BDF8]/10 px-4 py-2 rounded-lg transition-colors font-bold"
                  >
                    Zamknij ×
                  </button>
                </div>
                
                {HISTORY_SECTIONS.map((section, idx) => (
                  <div key={idx} className="mb-16 last:mb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {section.imgs.map((img, i) => (
                        <div key={i} className="aspect-video bg-[#0F172A] rounded-lg border border-slate-700 overflow-hidden shadow-lg hover:border-[#38BDF8]/50 transition-colors">
                          <img className="w-full h-full object-cover" src={img} alt={section.title} loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4 text-[#F8FAFC]/80 leading-relaxed">
                      <h3 className="text-[#38BDF8] font-bold text-xl">{section.title}</h3>
                      <p className="mt-[-12px] text-sm opacity-70">{section.info} • {section.ranks}</p>
                      <h4 className="font-bold text-[#F8FAFC] text-sm uppercase tracking-wider">Dywizje i detale:</h4>
                      <ul className="list-disc ml-5 space-y-1 text-sm">
                        {section.list.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sticky bottom-4 mt-auto flex justify-end pointer-events-none pr-2">
                <button
                  onClick={scrollToTop}
                  className="pointer-events-auto bg-[#38BDF8] hover:bg-sky-400 text-[#0F172A] p-3 rounded-full shadow-2xl transition-all duration-300 group hover:scale-110"
                >
                  <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;