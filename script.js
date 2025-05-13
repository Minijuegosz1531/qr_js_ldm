document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const qrValueInput = document.getElementById("qr-value")
    const fileNameInput = document.getElementById("file-name")
    const sizeInput = document.getElementById("size")
    const logoInput = document.getElementById("logo")
    const qrPreview = document.getElementById("qr-preview")
    const saveBtn = document.getElementById("save-btn")
    const downloadBtn = document.getElementById("download-btn")

    // Variables para almacenar el estado
    let qrValue = qrValueInput.value
    let fileName = fileNameInput.value
    let size = sizeInput.value
    let logoUrl = null
    let qrCanvas = null

    // Import qrcode library (assuming it's available globally or via a module loader)
    const qrcode = window.qrcode // Or require('qrcode-generator'), depending on your setup

    // Función para generar el código QR
    function generateQR() {
        // Limpiar el contenedor de previsualización
        qrPreview.innerHTML = ""

        // Obtener dimensiones del formato "600x600"
        const dimensions = size.split("x").map(Number)
        const qrSize = dimensions[0] || 600

        // Crear el QR
        const qr = qrcode(0, "H") // 'H' es el nivel de corrección de errores más alto
        qr.addData(qrValue)
        qr.make()

        // Crear un canvas para el QR
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const cellSize = Math.floor(qrSize / qr.getModuleCount())
        const margin = Math.floor((qrSize - cellSize * qr.getModuleCount()) / 2)

        canvas.width = qrSize
        canvas.height = qrSize
        canvas.style.maxWidth = "100%"
        canvas.style.height = "auto"

        // Fondo blanco
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Dibujar el QR
        ctx.fillStyle = "#000000"
        for (let row = 0; row < qr.getModuleCount(); row++) {
            for (let col = 0; col < qr.getModuleCount(); col++) {
                if (qr.isDark(row, col)) {
                    ctx.fillRect(margin + col * cellSize, margin + row * cellSize, cellSize, cellSize)
                }
            }
        }

        // Si hay un logo, añadirlo al centro
        if (logoUrl) {
            const logoImg = new Image()
            logoImg.crossOrigin = "anonymous"
            logoImg.onload = () => {
                // Tamaño del logo (20% del QR)
                const logoSize = qrSize * 0.2
                const logoX = (qrSize - logoSize) / 2
                const logoY = (qrSize - logoSize) / 2

                // Dibujar un fondo blanco para el logo
                ctx.fillStyle = "#FFFFFF"
                ctx.fillRect(logoX, logoY, logoSize, logoSize)

                // Dibujar el logo
                ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize)

                // Guardar el canvas para descargar
                qrCanvas = canvas
            }
            logoImg.src = logoUrl
        } else {
            // Guardar el canvas para descargar
            qrCanvas = canvas
        }

        // Mostrar el QR en la previsualización
        qrPreview.appendChild(canvas)
    }

    // Manejar cambios en los inputs
    qrValueInput.addEventListener("input", function () {
        qrValue = this.value
        generateQR()
    })

    fileNameInput.addEventListener("input", function () {
        fileName = this.value
    })

    sizeInput.addEventListener("input", function () {
        size = this.value
        generateQR()
    })

    logoInput.addEventListener("change", function () {
        const file = this.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                logoUrl = e.target.result
                generateQR()
            }
            reader.readAsDataURL(file)
        }
    })

    // Función para descargar el QR
    downloadBtn.addEventListener("click", () => {
        if (!qrCanvas) return

        // Crear un enlace temporal para descargar
        const link = document.createElement("a")
        link.download = `${fileName}.png`
        link.href = qrCanvas.toDataURL("image/png")
        link.click()
    })

    // Función para guardar el QR (simulada)
    saveBtn.addEventListener("click", () => {
        alert(`QR guardado como: ${fileName}.png`)
        // En una implementación real, aquí se enviaría el QR a un servidor
    })

    // Generar el QR inicial
    generateQR()
})
