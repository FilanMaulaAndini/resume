import Link from 'next/link'
import About from "../pages/about";
import Navbar from "../pages/navbar";
import WorkExperience from "../pages/workexperience";
import Education from "../pages/education";
import Skills from "../pages/skills";
import Project from "../pages/project";
import ToDoList from "../pages/todolist";

export default function Layout() {
  return (
    <>
      <Navbar />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Project />
      <ToDoList />
    </>
  );
}