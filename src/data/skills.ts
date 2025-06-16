export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  // Langages
  { name: "PHP", icon: "/public/assets/svg/php.svg", level: 85, category: "Langages" },
  { name: "Java", icon: "/public/assets/svg/java.svg", level: 70, category: "Langages" },
  { name: "JavaScript", icon: "/public/assets/svg/javascript.svg", level: 60, category: "Langages" },
  { name: "TypeScript", icon: "/public/assets/svg/typescript.svg", level: 60, category: "Langages" },
  // Frameworks
  { name: "React", icon: "/public/assets/svg/react.svg", level: 80, category: "Frameworks" },
  { name: "Laravel", icon: "/public/assets/svg/laravel.svg", level: 75, category: "Frameworks" },
  { name: "Symfony", icon: "/public/assets/svg/symfony.svg", level: 75, category: "Frameworks" },
  { name: "Spring Boot", icon: "/public/assets/svg/spring.svg", level: 70, category: "Frameworks" },
  { name: "API Platform", icon: "/public/assets/svg/api.svg", level: 70, category: "Frameworks" },
  { name: "Expo", icon: "/public/assets/svg/expo.svg", level: 75, category: "Frameworks" },
  // Bases de données
  { name: "MySQL", icon: "/public/assets/svg/mysql.svg", level: 80, category: "Bases de données" },
  { name: "MongoDB", icon: "/public/assets/svg/mongodb.svg", level: 75, category: "Bases de données" },
  { name: "Neo4j", icon: "/public/assets/svg/neo4j.svg", level: 65, category: "Bases de données" },
  // Outils & API
  { name: "Git", icon: "/public/assets/svg/git.svg", level: 90, category: "Outils & API" },
  { name: "Bruno", icon: "/public/assets/svg/bruno.png", level: 70, category: "Outils & API" },
  { name: "Swagger", icon: "/public/assets/svg/swagger.svg", level: 75, category: "Outils & API" },
  { name: "Docker", icon: "/public/assets/svg/docker.svg", level: 70, category: "Outils & API" },
]; 