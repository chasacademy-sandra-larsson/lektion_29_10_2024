document.addEventListener("DOMContentLoaded", function() {


// DOM refererens
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");
            

function fnOpenModal() {
    // Lägg till classen show på vår modal-container
    modalContainer.classList.add("show");
    // alterntivt modalContainer.classList.toggle("show");

    // Det här går bra också - ändra direkt i style
    //modalContainer.style.display = "flex"
}

function fnCloseModal() {
    modalContainer.classList.remove("show");
    // alterntivt modalContainer.classList.toggle("show");
}

function fnCloseContainer(event) {
    console.log(event.target)
    // Vi trycker på yttre området men inte inre
    if(event.target === modalContainer) {
        //modalContainer.classList.remove("show"); 
        fnCloseModal();
    } 
    // Man kan också jämföra med classList.contains()
    // ex 
    // document.getElementById("modal").classList.contains("inner")

}

// Events
openModal.addEventListener("click", fnOpenModal);
closeModal.addEventListener("click", fnCloseModal);
modalContainer.addEventListener("click", fnCloseContainer);


});


