const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
});
const hiddingElements = document.querySelectorAll(".hidden");
hiddingElements.forEach(el=>{observer.observe(el)});