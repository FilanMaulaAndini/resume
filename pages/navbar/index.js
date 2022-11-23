import React, { Component } from "react";
import { useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import Link from 'next/link'

const Navbar = () => {
   const [show, setShow] = useState(1);
    return(
    <div>  
    <body id="page-top">
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Filan Maula Andini</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile2.jpg" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a className={show === 1 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(1)}>About</a></li>
                    <Link href='/workexperience'><li class="nav-item"><a className={show === 2 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(2)}>Work Experience</a></li></Link>
                    <li class="nav-item"><a className={show === 3 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(3)}>Education</a></li>
                    <li class="nav-item"><a className={show === 4 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(4)}>Skills</a></li>
                    <li class="nav-item"><a className={show === 5 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(5)}>Project</a></li>
                    <li class="nav-item"><a className={show === 6 ? "nav-link js-scroll-trigger nav-underline" : "nav-link js-scroll-trigger"} onClick={() => setShow(6)}>To Do List</a></li>
                </ul>
            </div>
            <div class="social-icons">
                <a className={"social-icon"} >
                <FaBookmark color={
                    show === 1 ? "lime" : 
                    show === 2 ? "yellow" : 
                    show === 3 ? "purple" : 
                    show === 4 ? "brown" :  
                    "red"}/>
                </a>
            </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
        </div>
    )
}

export default Navbar