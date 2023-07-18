const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generatebtn");
const downloadBtn = document.getElementById("downloadbtn");
const qrcontainer = document.querySelector(".qr-code");
 
//generate button
generateBtn.onclick = (e) => {
   e.preventDefault(); 
   isEmptyInput() 
}

// select size
let size = sizes.value;
sizes.onchange = (e) => {
   size = sizes.value;
   isEmptyInput()
};

 // download button
 downloadBtn.addEventListener("click", (e) => {
 
   let image = document.querySelector(".qr-code img");
 if (image !== null) {
    downloadBtn.setAttribute("download", "QR_code.png");
   let imgAttr = image.getAttribute("src");
   downloadBtn.setAttribute("href", imgAttr);
 } else {
  
 downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
 }
});

// show hide button and size
const selectHide = document.querySelector(".select-hide");
const buttonHide = document.querySelector(".button-hide");
qrText.onfocus = (e) => {
   selectHide.classList.remove("select-hide");
   buttonHide.classList.remove("button-hide");
}
