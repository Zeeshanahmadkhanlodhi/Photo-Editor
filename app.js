const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


const img = new Image() // API IMAGE
const reader  = new FileReader() // API FILEREADER

function uploadImage(e){
   reader.readAsDataURL(e.target.files[0]) 
   reader.onload = () =>{
       img.src = reader.result
       img.onload = () =>{
        canvas.width = img.width // for making image clear
        canvas.height = img.height // for making image height clear
        ctx.drawImage(img,0,0)//300 ,150
        

       
       }
   }

}
function grayscale(){
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data  = imageData.data;
    for(let i=0;i<=data.length;i+=4){
        const grey = data[i] * 0.21  + data[i+1] * 0.1 + data[i+2]
 * 0.7;
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;

}
 ctx.putImageData(imageData,0,0)

}
function sepia(){
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data  = imageData.data;
    for(let i=0;i<=data.length;i+=4){
        const grey = data[i] * 0.21  + data[i+1] * 0.1 + data[i+2]
 * 0.7;
        data[i] = grey + 95;
        data[i+1] = grey + 58;
        data[i+2] = grey;
}
 ctx.putImageData(imageData,0,0)

}
function invert(){
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data  = imageData.data;
    for(let i=0;i<=data.length;i+=4){
        data[i]  = 255 - data[i]// equal to red
        data[i+1] = 255 - data[i+1] // equal to green
        data[i+2]  = 255 - data[i+2]// equal to blue
}
 ctx.putImageData(imageData,0,0)

}
function rbg() {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data =  imageData.data

    for(let i =0;i<=data.length;i+=4){
        const  green = data[i+1]
        data[i]  = data[i] // equal to red
        data[i+1] = data[i+2]  // equal to green
        data[i+2]  = green ;// equal to blue
 
    }
    ctx.putImageData(imageData,0,0);
}


function bgr() {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data =  imageData.data

    for(let i =0;i<=data.length;i+=4){
        const  red = data[i]
        data[i]  = data[i+2] // equal to red
        data[i+1] = data[i+1]  // equal to green
        data[i+2]  = red;// equal to blue
 
    }
    ctx.putImageData(imageData,0,0);
}

function gbr() {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data =  imageData.data

    for(let i =0;i<=data.length;i+=4){
        const  red = data[i]
        data[i]  = data[i+1] // equal to red
        data[i+1] = data[i+2]  // equal to green
        data[i+2]  = red;// equal to blue
 
    }
    ctx.putImageData(imageData,0,0);
}

function grd() {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
    const data =  imageData.data

    for(let i =0;i<=data.length;i+=4){
        const  red = data[i]
        data[i]  = data[i+1] // equal to red
        data[i+1] =red  // equal to green
        data[i+2]  = data[i+2];// equal to blue
 
    }
    ctx.putImageData(imageData,0,0);
}

function clearChanges(){
    img.src = reader.result
}
function download(){
    const image = canvas.toDataURL()
    const link = document.createElement('a')
    link.href = image
    link.download = 'image.png'
    link.click();
}

document.querySelectorAll('button')[0].addEventListener("click",grayscale);
document.querySelectorAll('button')[1].addEventListener("click",sepia);
document.querySelectorAll('button')[2].addEventListener("click",invert);
document.querySelectorAll('button')[3].addEventListener("click",rbg);
document.querySelectorAll('button')[4].addEventListener("click",bgr);
document.querySelectorAll('button')[5].addEventListener("click",gbr);
document.querySelectorAll('button')[6].addEventListener("click",gbr);
document.querySelectorAll('button')[7].addEventListener("click",clearChanges);
document.querySelectorAll('button')[8].addEventListener("click",download);





const imageloader = document.getElementById("uploader")
imageloader.addEventListener('change',uploadImage);


