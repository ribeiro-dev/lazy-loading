function ativarNoScroll() {
    document.querySelectorAll("img[data-src]").forEach((img, index) => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute("data-src")
            console.log("imagem aparecendo: ", index)
        }
    })
}

window.addEventListener("scroll", ativarNoScroll)