const contacto = document.querySelector("#contacto");

contacto.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC = document.querySelector(".contacto");
    sectionC.scrollIntoView({behavior:"smooth"});
})