document.addEventListener("DOMContentLoaded", function () {
            let imgBox = document.getElementById("imgBox");
            let qrImage = document.getElementById("qrImage");
            let qrText = document.getElementById("qrText");
            let qrColor = document.getElementById("qrColor");
            let bgColor = document.getElementById("bgColor");

            function generateQR() {
                const text = qrText.value.trim();
                const color = qrColor.value.substring(1);
                const bgcolor = bgColor.value.substring(1);

                if (text === "") {
                    alert("Please enter some text or a URL to generate the QR code.");
                    return;
                }

                qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}&color=${color}&bgcolor=${bgcolor}`;
                imgBox.classList.add("show-img");
            }

            function downloadQR() {
                const qrImageSrc = qrImage.src;
                if (qrImageSrc) {
                    const a = document.createElement('a');
                    a.href = qrImageSrc;
                    a.download = 'qr_code.png'; // Specify the file name
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                } else {
                    alert("Please generate a QR code first.");
                }
            }

            document.querySelector("button").addEventListener("click", generateQR);
            document.querySelectorAll("button")[1].addEventListener("click", downloadQR);
        });