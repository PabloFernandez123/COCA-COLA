document.addEventListener("click",function (e){
    if(e.target.classList.contains("foto-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('foto-modal'))
    }
})