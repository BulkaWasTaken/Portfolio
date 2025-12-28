import { type FC } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Code2, ShieldAlert, HeartPulse } from 'lucide-react';
import { CardHome } from '@/components/common/CardHome';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/animations/PageTransition';

interface HobbyItem {
  title: string;
  Icon: LucideIcon;
  description: string;
}

const HOBBY_DATA: readonly HobbyItem[] = [
  {
    title: "Web Development",
    Icon: Code2,
    description: "Interesuje mnie tworzenie nowoczesnych aplikacji. Skupiam się na czystym kodzie i wydajnych interfejsach w React."
  },
  {
    title: "Ratownictwo Medyczne",
    Icon: HeartPulse,
    description: "Od niecałego roku interesuję się ratownictwem medycznym. Nauczyło mnie to spokoju i szybkiego podejmowania decyzji."
  },
  {
    title: "Law Enforcement",
    Icon: ShieldAlert,
    description: "Interesuję się procedurami bezpieczeństwa i porządku publicznego. Cenię dyscyplinę oraz etykę pracy."
  }
] as const;

const Home: FC = () => {
  return (
    <PageTransition>
      <div id="home" className="relative flex flex-col items-center w-full overflow-hidden">
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4 py-12">
          
          <header className="flex flex-col items-center mt-12 mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-[#F8FAFC] leading-tight">
              Hi, I'm<br />
              <span className="text-[#38BDF8] name">Bułka z Masłem</span>
            </h1>
            <p className="text-xl md:text-2xl text-center mt-4 text-[#94A3B8]">
              React Developer
            </p>
          </header>

          <div className="flex flex-wrap gap-6 justify-center">
            {HOBBY_DATA.map((item) => (
              <CardHome 
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
              />
            ))}
          </div>

          <Button />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;