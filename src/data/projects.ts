export type Project = {
  title: string;
  slug: string;
  type: string;
  year: number;
  image: string;
  images: string[];
  description: string;
  technologies: string[];
  link: string;
  award?: boolean;
  featured?: boolean;
  subtitle?: string;
};

export const projects: Project[] = [
  {
    title: "ShotTime",
    slug: "shot-time",
    type: "APPLICATION MOBILE",
    year: 2025,
    image: "/images/shottime.png",
    images: [
      "/images/shottime/home.png",
      "/images/shottime/create_game.png",
      "/images/shottime/lobby.png",
      "/images/shottime/choice_game.png"
    ],
    description: `ShotTime est une application mobile immersive pour animer vos soirées entre amis avec des jeux originaux et interactifs. Pensée pour créer des souvenirs mémorables, elle propose une expérience fluide, moderne et fun, avec une interface inspirée des meilleurs designs Figma.\n\n- Framework : React Native\n- Tooling : Expo\n- Langage : TypeScript\n- Navigation : expo-router (app/ folder-based routing)\n- UI Design : Figma Pro\n\nShotTime permet de lancer des jeux de soirée variés, de suivre les scores, et d'ajouter une touche de fun grâce à des animations et effets immersifs.`,
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "expo-router",
      "Figma"
    ],
    link: "#",
    featured: true,
    subtitle: "Application mobile pour des jeux de soirée."
  },
];
