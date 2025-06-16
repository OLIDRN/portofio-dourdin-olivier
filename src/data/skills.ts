export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  // Langages
  { name: "PHP", icon: "/src/assets/svg/php.svg", level: 85, category: "Langages" },
  { name: "Java", icon: "/src/assets/svg/java.svg", level: 70, category: "Langages" },
  { name: "JavaScript", icon: "/src/assets/svg/javascript.svg", level: 60, category: "Langages" },
  { name: "TypeScript", icon: "/src/assets/svg/typescript.svg", level: 60, category: "Langages" },
  // Frameworks
  { name: "React", icon: "/src/assets/svg/react.svg", level: 80, category: "Frameworks" },
  { name: "Laravel", icon: "/src/assets/svg/laravel.svg", level: 75, category: "Frameworks" },
  { name: "Symfony", icon: "/src/assets/svg/symfony.svg", level: 75, category: "Frameworks" },
  { name: "Spring Boot", icon: "/src/assets/svg/spring.svg", level: 70, category: "Frameworks" },
  { name: "API Platform", icon: "/src/assets/svg/api.svg", level: 70, category: "Frameworks" },
  { name: "Expo", icon: "/src/assets/svg/expo.svg", level: 75, category: "Frameworks" },
  // Bases de données
  { name: "MySQL", icon: "/src/assets/svg/mysql.svg", level: 80, category: "Bases de données" },
  { name: "MongoDB", icon: "/src/assets/svg/mongodb.svg", level: 75, category: "Bases de données" },
  { name: "Neo4j", icon: "/src/assets/svg/neo4j.svg", level: 65, category: "Bases de données" },
  // Outils & API
  { name: "Git", icon: "/src/assets/svg/git.svg", level: 90, category: "Outils & API" },
  { name: "Bruno", icon: "/src/assets/svg/bruno.png", level: 70, category: "Outils & API" },
  { name: "Swagger", icon: "/src/assets/svg/swagger.svg", level: 75, category: "Outils & API" },
  { name: "Docker", icon: "/src/assets/svg/docker.svg", level: 70, category: "Outils & API" },
]; 