const nav=document.querySelector("nav"),navLogo=document.getElementsByClassName("nav__logo"),navToggle=document.getElementsByClassName("nav__toggle"),squiggle=document.getElementsByClassName("header__squiggle"),squiggleContainer=document.getElementsByClassName("nav__squiggle-container"),navLinks=document.getElementsByClassName("nav__links"),navLink=document.getElementsByClassName("nav__link"),target=document.querySelector(".header__text"),toggleHome=[navLogo,navToggle,squiggle,squiggleContainer,navLinks,navLink],leaveHomeOptions={},leaveHome=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting?(toggleHome.forEach(e=>{Array.from(e).forEach(e=>{e.classList.add("home")})}),nav.classList.remove("scrolled")):e.isIntersecting||(toggleHome.forEach(e=>{Array.from(e).forEach(e=>{e.classList.remove("home")})}),nav.classList.add("scrolled"))})},leaveHomeOptions),toggleBtn=(leaveHome.observe(target),document.getElementById("toggle-bars")),menu=document.getElementById("mobile-menu"),body=document.querySelector("body"),menuDots=document.getElementById("mobile-menu-dots"),addIsActive=[toggleBtn,menu,body,menuDots],openMenu=()=>{addIsActive.forEach(e=>e.classList.toggle("is-active")),menu.classList.contains("is-active")&&addCloseTriggers()},closeMenu=()=>{addIsActive.forEach(e=>e.classList.remove("is-active")),toggleBtn.setAttribute("onclick","openMenu()")},addCloseTriggers=()=>{Array.from(navLink).forEach(e=>{e.setAttribute("onclick","closeMenu()")});let e=document.getElementById("logo");e.setAttribute("onclick","closeMenu()"),toggleBtn.setAttribute("onclick","closeMenu()")},checkbox=document.getElementById("checkbox");checkbox.addEventListener("change",()=>{document.body.classList.toggle("dark-mode")});