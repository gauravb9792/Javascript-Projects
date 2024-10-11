let imagecontainer=document.querySelector(".img_continer")

let dtn=document.querySelector(".button")

dtn.addEventListener("click",()=>{
    
    updateimage()
  
})

function updateimage(){
    for(let i=0;i<6;i++)
    {
        let newimg=document.createElement("img")
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
    
        imagecontainer.appendChild(newimg)

    }

}