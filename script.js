let inputField = document.getElementById('usrInput')
let QrImg = document.getElementById('QRimg')
function generateQR(){
    if (String(inputField.value) === ''){
        alert('Enter the input field')
    }else{
        QrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + String(inputField.value)
    }
    
}