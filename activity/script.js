let allFilter=document.querySelectorAll(".filter");
let ticketContainer=document.querySelector(".ticket-container");
for(let i=0;i<allFilter.length;i++){
    allFilter[i].addEventListener("click",EkFunctionFire);

}
let ticketModalOpenClose=false;
function EkFunctionFire(e){
    let filteredSelected=e.target.classList[1];
    if(ticketContainer.classList.length>1){
        ticketContainer.classList.remove(ticketContainer.classList[1]);
    }

    //console.log(filteredSelected);
      ticketContainer.classList.add(filteredSelected);
}
let openModal=document.querySelector(".open-modal");
let closeModal=document.querySelector(".close-modal");
openModal.addEventListener("click",openingModal);
closeModal.addEventListener("click",closingModal);

/**
 * 
     <div class="ticket-modal">  Line :38 hai iska code


         <div class="ticket-text"></div>
         <div class="ticket-filters">
            <div class="tickets-filter red"></div>
            <div class="tickets-filter blue"></div>
            <div class="tickets-filter yellow"></div>
            <div class="tickets-filter green"></div>
            <div class="tickets-filter black" ></div>

         </div>
     </div> } e 
 */
 
function openingModal(e){
    if(ticketModalOpenClose){
        return;
    }
    let ticketModal=document.createElement("div");
    ticketModal.classList.add("ticket-modal");
    ticketModal.innerHTML =`<div class="ticket-text" spellcheck="false" contenteditable="true"></div>
    <div class="ticket-filters">
       <div class="tickets-filter red"></div>
       <div class="tickets-filter blue"></div>
       <div class="tickets-filter yellow"></div>
       <div class="tickets-filter green"></div>
       <div class="tickets-filter black" ></div>

    </div>`
    //console.log(ticketModal);
    document.querySelector("body").append(ticketModal);
    ticketModalOpenClose=true;


}
function closingModal(e){
    if(ticketModalOpenClose){
        document.querySelector(".ticket-modal").remove();
    }
    ticketModalOpenClose=false;

}