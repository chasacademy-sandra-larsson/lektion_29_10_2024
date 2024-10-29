document.addEventListener("DOMContentLoaded", function() {

    // DOM referenser 
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("closeBtn");
    const lightBoxImage = document.getElementById("lightboxImage");

    gallery.addEventListener("click", function(e) {

        
        if(e.target.tagName === "IMG") {
            
            lightbox.classList.add("active");
            let fullImage = e.target.getAttribute("data-full");
            console.log(fullImage);
            lightBoxImage.setAttribute("src", fullImage);

            // Samma sak, typ (första ger hela url:en)
            //  console.log(e.target.src);
            //  console.log(e.target.getAttribute("src"));

            // Hämta dataset attribut, två sätt
            // console.log(e.target.dataset.full);
            // console.log(e.target.getAttribute("data-full"));
        }

    });

    closeBtn.addEventListener("click", function() {
        lightbox.classList.remove("active");
    })

    lightbox.addEventListener("click", function(event) {
        
        if(event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    })

});