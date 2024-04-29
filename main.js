const dots = document.getElementsByClassName("dots");
const box = document.getElementsByClassName("inner-box");
console.log(Array.of(dots))

Array.from(dots).forEach(dots => {
    dots.addEventListener("mouseover", (event)=> {
        let parent = dots.parentNode;
        parent = parent.parentNode;
        console.log(parent)
        parent.style.backgroundColor="#1c204b";
        event.stopPropagation();
    })
    dots.addEventListener("mouseleave", (event)=> {
        let parent = dots.parentNode;
        parent = parent.parentNode;
        parent.style.backgroundColor="#33397a";
        event.stopPropagation();
    })
})

Array.from(box).forEach(box => {
    box.addEventListener("mouseover", ()=> {
        box.style.backgroundColor = "#33397a";
    })
    box.addEventListener("mouseleave", ()=> {
        box.style.backgroundColor = "#1c204b";
    })
})