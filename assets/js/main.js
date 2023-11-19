const contacto = document.querySelector("#contacto");

contacto.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC = document.querySelector(".contacto");
    sectionC.scrollIntoView({behavior:"smooth"});
})

function scrolll(){
    const left = document.querySelector(".scroll-test");
    left.scrollBy(-350,0);
}
function scrollr(){
    const right = document.querySelector(".scroll-test");
    right.scrollBy(350,0);
}