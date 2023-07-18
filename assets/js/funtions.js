function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Please Input Text");
      
    }
function generateQRCode() {
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
      text: qrText.value,
      width: size,
      height: size,
      colorDark: "#000000",
      colorLight: "#ffffff",
   });
}