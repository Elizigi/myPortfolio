import type { skillsArray } from "./skillsModel";
import wolrde from "../images/wolrde.png";
import DrawingBoardCollab from "../images/DrawingBoardCollab.png";
interface Project {
  name: string;
  description: string;
  technologies: typeof skillsArray;
  photo: string;
  GitLink: string;
  DemoLink?: string;
}
export const projectsModelArray: Project[] = [
  {
    name: "Collaborative Drawing Board",
    description:
      "Real-time multiplayer drawing application with layers, image import, and transform controls. Features room-based collaboration with host permissions, undo/redo functionality, and live cursor tracking.",
    technologies: [
      "React",
      "TypeScript",
      "Socket.IO",
      "Zustand",
      "Node.js",
      "Express",
    ],
    photo: DrawingBoardCollab,
    GitLink: "https://github.com/Elizigi/DrawingBoardCollab",
    DemoLink: "https://drawingboardcollab-production.up.railway.app/",
  },
  {
    name: "Wordle Clone",
    description:
      "Full-stack word guessing game with daily puzzles that reset every 24 hours. Features animated letter reveals, color-coded feedback, interactive keyboard tracking, and local progress persistence. Includes rate limiting and duplicate letter handling.",
    technologies: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Flask",
      "Python",
      "REST APIs",
    ],
    photo: wolrde,
    GitLink: "https://github.com/Elizigi/worldeLike",
    DemoLink: "https://worlde-like.vercel.app",
  },
];
