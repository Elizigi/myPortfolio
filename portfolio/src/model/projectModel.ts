import type { skillsArray } from "./skillsModel";

interface Project {
  name: string;
  description: string;
  technologies: typeof skillsArray;
  photo: string;
  GitLink: string;
  DemoLink?: string;
}
const porjectsModelArray: Project[] = [];
