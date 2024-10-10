
let textarea=document.getElementById("textarea")

const totalchar=document.getElementById("Total-character")

let remainigchar=document.getElementById("Remaining-character")

textarea.addEventListener("keyup", 
    ()=>
    {
        updateconuter();
    }
)

function updateconuter()
{
   totalchar.innerText=textarea.value.length

   remainigchar.innerText=textarea.getAttribute("maxlength")-textarea.value.length


}