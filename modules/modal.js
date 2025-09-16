function openModal(modalContentSelector, modalSelector, modalTimerId) {
  const modalContent = document.querySelector(modalContentSelector);
   modal = document.querySelector(modalSelector),
  modalContent.classList.add("model_fade");
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if(modalTimerId){
    clearInterval(modalTimerId);
  }
}

function closeModel(modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.add("hide");
  modal.classList.add("show");
  document.body.style.overflow = "";
}

function modal(btnSelector, modalSelector, modalContentSelector, modalTimerId) {
  const modelOpneBtns = document.querySelectorAll(btnSelector),
    modal = document.querySelector(modalSelector),
    modalDialog = document.querySelector(".modal__dialog");

  modelOpneBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalContentSelector, modalSelector, modalTimerId));
  });

  modal.addEventListener("click", (event) => {
    // console.log(event.target);

    if (
      event.target === modal ||
      event.target === modalDialog ||
      event.target.getAttribute("data-modal-close") === ""
    ) {
      closeModel(modalSelector);
    }
  });

    document.addEventListener("keydown", (event) =>{
      if(event.code === 'Esc' && modal.classList.contains('show')){
        closeModel(modalSelector)
      }
    })

 
}

export default modal;
export { openModal, closeModel };
