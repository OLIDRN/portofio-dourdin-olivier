export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    title: "Développeur Web & Back-End – Alternance",
    company: "Viously, Lille",
    location: "Lille",
    period: "Février 2024 à Août 2025",
    description: [
      "Participation à la refonte du système de gestion des logins utilisateurs : séparation des vérifications standards, validation des identifiants, et synchronisation entre les ajouts, modifications et suppressions dans la base de données.",
      "Réfonte du contrôleur de recherche vidéo dans l’interface CTV, avec gestion séparée des recherches par identifiant (VID) et par mots-clés, en intégrant Elasticsearch pour les recherches textuelles multilingues.",
      "Implémentation de redirections dynamiques conditionnelles dans l’interface utilisateur selon les droits d’accès et les types d’URL, pour une meilleure cohérence des chemins.",
      "Collaboration sur l’intégration front/back de l’interface CTV avec un bouton 'Back to website' correctement positionné dans la side navigation, respectant la cohérence UX/UI."
    ]
  }
]; 