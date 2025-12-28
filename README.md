# Portfolio

## Technologie

* **Frontend:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
* **Stylizacja:** [Tailwind CSS](https://tailwindcss.com/)
* **Animacje:** * [GSAP](https://gsap.com/)
    * [Framer Motion](https://www.framer.com/motion/)
* **Ikony:** [Lucide React](https://lucide.dev/)
* **Routing:** [React Router](https://reactrouter.com/)
* **Narzędzia:** [Vite](https://vitejs.dev/)

## Instalacja i uruchomienie

1.  Klonowanie repozytorium:
    ```bash
    git clone https://github.com/BulkaWasTaken/Portfolio.git
    ```

2.  Instalacja zależności:
    ```bash
    npm install
    ```

3.  Uruchomienie serwera deweloperskiego:
    ```bash
    npm run dev
    ```

4.  Budowanie wersji produkcyjnej:
    ```bash
    npm run build
    ```

## Struktura projektu

```text
src/
├── assets/          # Zdjęcia, grafiki
├── components/      # Komponenty do użycia wielokrotnego (UI, Layout, Animacje)
├── lib/             # Utility
├── pages/           # Widoki stron (Home, About, Contact)
├── styles/          # Globalne style CSS (Tailwind setup)
└── App.tsx          # Główna konfiguracja routingu i layoutu
