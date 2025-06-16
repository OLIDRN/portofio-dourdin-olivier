export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  // Langages
  { name: "PHP", icon: "/svg/php.svg", level: 85, category: "Langages" },
  { name: "Java", icon: "/svg/java.svg", level: 70, category: "Langages" },
  { name: "JavaScript", icon: "/svg/javascript.svg", level: 60, category: "Langages" },
  { name: "TypeScript", icon: "/svg/typescript.svg", level: 60, category: "Langages" },
  // Frameworks
  { name: "React", icon: "/svg/react.svg", level: 80, category: "Frameworks" },
  { name: "Laravel", icon: "/svg/laravel.svg", level: 75, category: "Frameworks" },
  { name: "Symfony", icon: "/svg/symfony.svg", level: 75, category: "Frameworks" },
  { name: "Spring Boot", icon: "/svg/spring.svg", level: 70, category: "Frameworks" },
  { name: "API Platform", icon: "/svg/api.svg", level: 70, category: "Frameworks" },
  { name: "Expo", icon: "/svg/expo.svg", level: 75, category: "Frameworks" },
  // Bases de données
  { name: "MySQL", icon: "/svg/mysql.svg", level: 80, category: "Bases de données" },
  { name: "MongoDB", icon: "/svg/mongodb.svg", level: 75, category: "Bases de données" },
  { name: "Neo4j", icon: "/svg/neo4j.svg", level: 65, category: "Bases de données" },
  // Outils & API
  { name: "Git", icon: "/svg/git.svg", level: 90, category: "Outils & API" },
  { name: "Bruno", icon: "/svg/bruno.png", level: 70, category: "Outils & API" },
  { name: "Swagger", icon: "/svg/swagger.svg", level: 75, category: "Outils & API" },
  { name: "Docker", icon: "/svg/docker.svg", level: 70, category: "Outils & API" },
]; 