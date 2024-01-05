const burger = document.querySelector('.menu__burger')
const body = document.body



burger.addEventListener('click', () => {
    burger.parentElement.classList.toggle('active')
    body.classList.toggle('lock')
})

const animItems = document.querySelectorAll('.scroll-anim');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-anim')
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.add('scroll-anim')
        }
    })
}, {
    threshold: 0.25
    })

console.dir(observer);
animItems.forEach(item => {
    observer.observe(item)
})
