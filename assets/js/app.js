//--------------------------navbar--------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}


//-----------------------slider-----------------------
// $('.slider-content').slick({
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 700,
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

//----------------------------------------------back to top------------------------------------------------
const myButton = document.getElementById("myBtn");

window.onscroll = function () {
    myButton.style.display = window.scrollY > 200 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// theme class //
// const button = document.getElementById('themeToggle');
// button.addEventListener('click', function () {
//     document.documentElement.classList.toggle('dark-theme');
    
//     // Save the current theme to localStorage
//     let theme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
// });

// // Load saved theme from localStorage
// window.onload = function () {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         document.documentElement.classList.add('dark-theme');
//     }
// };
