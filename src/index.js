// navbar from home section
const nav = document.querySelector('nav');
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