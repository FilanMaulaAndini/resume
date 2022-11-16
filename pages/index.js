import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../pages/Navbar'
import About from '../pages/About'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import Project from './Project'

export default function Home() {
  return (
   <>
    <Navbar />
    <About />
    <WorkExperience />
    <Education />
    <Skills />
    <Project />
   </>
  )
}

