// navbar from home section
const nav = document.querySelector('nav');
const navLogo = document.getElementsByClassName('nav__logo');
const navToggle = document.getElementsByClassName('nav__toggle');
const squiggle = document.getElementsByClassName('header__squiggle');
const squiggleContainer = document.getElementsByClassName('nav__squiggle-container');
const navLinks = document.getElementsByClassName('nav__links');
const navLink = document.getElementsByClassName('nav__link');
const target = document.querySelector('.header__text');

const toggleHome = [squiggle, squiggleContainer, navLinks];

const leaveHomeOptions = {
    threshold: 1.0
}

const leaveHome = new IntersectionObserver ((entries, leaveHome) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // toggleHome.forEach(items=> {
            //     Array.from(items).forEach(item => {
            //         item.classList.add('home')
            //     })
            // })
            nav.classList.remove('scrolled');
            Array.from(navLogo).forEach(element => {
                element.classList.add('home')
            })
            Array.from(navToggle).forEach(element => {
                element.classList.add('home')
            })
            Array.from(squiggleContainer).forEach(element => {
                element.classList.add('home')
            })
            Array.from(squiggle).forEach(element => {
                element.classList.add('home')
            })
            Array.from(navLinks).forEach(element => {
                element.classList.add('home')
            })
            Array.from(navLink).forEach(element => {
                element.classList.add('home')
            })

            
        }else if (!entry.isIntersecting){
            // toggleHome.forEach(items=> {
            //     Array.from(items).forEach(item => {
            //         item.classList.remove('home')
            //     })
            // })
            nav.classList.add('scrolled');
            Array.from(navToggle).forEach(element => {
                element.classList.remove('home')
            })
            Array.from(navLogo).forEach(element => {
                element.classList.remove('home')
            })
            Array.from(squiggleContainer).forEach(element => {
                element.classList.remove('home')
            })
            Array.from(squiggle).forEach(element => {
                element.classList.remove('home')
            })
            Array.from(navLinks).forEach(element => {
                element.classList.remove('home')
            })
            Array.from(navLink).forEach(element => {
                element.classList.remove('home')
            })
        }
    })
}, leaveHomeOptions)

leaveHome.observe(target)

// Toggle mobile menu
const toggleBtn = document.getElementById('toggle-bars');
const menu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const menuDots = document.getElementById('mobile-menu-dots');


const addIsActive = [toggleBtn, menu, body, menuDots]

const toggleMenu = () => {
    addIsActive.forEach(element => element.classList.toggle('is-active'))
    if(menu.classList.contains('is-active')){
        addCloseTriggers()
    }
}
const closeMenu = () => {
    addIsActive.forEach(element => element.classList.remove('is-active'))
    toggleBtn.setAttribute("onclick", "toggleMenu()")
}

// toggleMenu after link is clicked
const addCloseTriggers = () => {
    Array.from(navLink).forEach(element => {
        element.setAttribute("onclick", "closeMenu()")
    })
    toggleBtn.setAttribute("onclick", "closeMenu()")
  }
  
 

// Adjust nav link shadow according to section
// const about = document.getElementById('about');
// const work = document.getElementById('work');
// const contact = document.getElementById('contact');
// const aboutLink = document.getElementById('about-link')
// const workLink = document.getElementById('work-link')
// const contactLink = document.getElementById('contact-link')

// const sections = [about, work, contact];

// const changeShadowOptions = {
//     // threshold: 1.0
// }

// const changeShadow = new IntersectionObserver ((entries, changeShadow) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             let currentLink = entry.target.id + "Link"; 
//             console.log(`${currentLink}`)
//         }else if (!entry.isIntersecting){
            
//         }
//     })
// }, changeShadowOptions)


// sections.forEach(section => {
//     changeShadow.observe(section)
// })