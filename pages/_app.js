import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
import WorkExperience from '../components/workexperience';
import ToDoList from '../components/todolist';
import Education from '../components/education';
import Skills from '../components/skills';
import Project from '../components/project';
import About from '../components/about';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(1);

  const props = {show, setShow, todo, setTodo};
 
  return (
    <>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Resume</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <Navbar {...props}/>
    <div id='content'>
      {show === 1 ?<About />:''}
      {show === 2 ?<WorkExperience />:''}
      {show === 3 ?<Education />:''}
      {show === 4 ?<Skills/>:''}
      {show === 5 ?<Project />:''}
      {show === 6 ?<ToDoList />:''}
    </div>
  </>
  )
  }


export default MyApp
