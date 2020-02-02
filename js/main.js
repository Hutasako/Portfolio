// Additional blur effect for parallax
let $parallaxElement = document.querySelector('.parallax')
let elementHeight = $parallaxElement.offsetHeight;

function parallax() {
    let scrollPos = window.scrollY;
    let transformValue = scrollPos / 40;
    let opacityValue = 1 - (scrollPos / 2000);
    let blurValue = Math.min(scrollPos / 100, 3);
    if (scrollPos < elementHeight) {
        $parallaxElement.style.transform = 'translate3d(0, -' + transformValue + '%, 0)';
        $parallaxElement.style.opacity = opacityValue;
        $parallaxElement.style.filter = 'blur(' + blurValue + 'px)';
        $parallaxElement.style.Webkitfilter = 'blur(' + blurValue + 'px)';
    }
}

window.addEventListener('scroll', function (e) {
    parallax()
})

// Typed JS application, select a random font for each string

let fontFam = ['Roboto Mono, monospace', 'PT Mono, monospace', 'Montserrat, sans-serif', 'Raleway, sans-serif', 'Poppins, sans-serif']
let num;

let options = {
    strings: ['Hi', 'Hello', 'Welcome', 'Hello there', 'Hey'],
    typeSpeed: 90,
    smartBackspace: true,
    backDelay: 1500,
    shuffle: true,
    loop: true,
    loopCount: Infinity,
    preStringTyped: (arrayPos, self) => {
        num = Math.floor(Math.random() * 5);
        document.querySelector('.typed').style.fontFamily = fontFam[num];
    },
};

let typed = new Typed('.typed', options)

// Dark/Light switcher
const checkBox = document.getElementById("switcherCheckbox");

checkBox.addEventListener('change', (event) => {
    if (event.target.checked){
        //darkmode OFF
        document.getElementById("github-logo").src = "./images/GitHub-Mark-120px-plus.png"
        document.body.classList.toggle('darkmode')
        $parallaxElement.classList.toggle('darkmode')
    } else {
        //darkmode ON
        document.getElementById("github-logo").src = "./images/GitHub-Mark-Light-120px-plus.png"
        document.body.classList.toggle('darkmode')
        $parallaxElement.classList.toggle('darkmode')
    }
})
