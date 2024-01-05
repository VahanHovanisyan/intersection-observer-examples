const burger = document.querySelector('.menu__burger')
const body = document.body

burger.addEventListener('click', () => {
    burger.parentElement.classList.toggle('active')
    body.classList.toggle('lock')
})

const animItems = document.querySelectorAll('.scroll-anim');
const lazyImages = document.querySelectorAll('[data-src]');

const observerAnim = new IntersectionObserver(entries => {
    entries.forEach(entri => {
        if (entri.isIntersecting) {
            entri.target.classList.remove('scroll-anim');
            observerAnim.unobserve(entri.target);
        }
    })
},{
    threshold: 0.25
})
animItems.forEach(item => {
    observerAnim.observe(item);
});




const observerLazyLoad = new IntersectionObserver(entries => {
    entries.forEach(entri => {
        if (entri.isIntersecting) {
            entri.target.setAttribute('src', entri.target.dataset.src)
            // entri.target.removeAttribute('data-src');
            observerLazyLoad.unobserve(entri.target)
        }
    })
}, {
    rootMargin: '0px 0px 100px 0px',
    threshold: 0,
})
console.log(observerLazyLoad);
lazyImages.forEach(img => {
    observerLazyLoad.observe(img);
});
