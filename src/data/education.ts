export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string;
};

export const education: Education[] = [
  {
    degree: "BUT Informatique",
    school: "IUT de Lens, Université d'Artois",
    location: "Lens",
    period: "Sept. 2022 – en cours",
    details: "Formation en alternance à partir de février 2024"
  },
  {
    degree: "Baccalauréat STI2D – Spécialité Systèmes d'Information et Numérique (SIN)",
    school: "Lycée André Malraux, Béthune",
    location: "Béthune",
    period: "2022",
    details: "Obtenu"
  }
]; 