
var tooltipButton=document.querySelector(".mytooltip");

var tooltip=document.querySelector(".tooltip")

tooltipButton.addEventListener("click",()=>{
    if(screen.width>1000)tooltip.style.display=tooltip.style.display=="flex"?"none":"flex";
    else{
        
        tooltip.classList.toggle("mobileToolpopUP")
    } 
})

//If mobile, tooltip will go main
//if desktop, tooltip will stay at share
//Also when screen size change then hide the tooltip if its visible
window.addEventListener("resize",()=>{
    DeskT0Mob() 
    if(screen.width>1000)tooltip.style.display="none"
    else{
        tooltip.style.display="flex";
        tooltip.classList.remove("mobileToolpopUP")
    }
})
DeskT0Mob()

function DeskT0Mob(){
    screen.width<1000? tooltipButton.classList.remove("tooltip-desktop"):tooltipButton.classList.add("tooltip-desktop")
   
}
