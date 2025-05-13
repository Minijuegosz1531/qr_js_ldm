# Generador de Códigos QR

Una aplicación web simple y eficiente para generar códigos QR personalizados con la capacidad de añadir logos y personalizar el tamaño.

## Características

- Generación de códigos QR en tiempo real
- Personalización del tamaño del código QR
- Capacidad para añadir un logo al centro del código QR
- Vista previa en tiempo real
- Descarga del código QR en formato PNG
- Interfaz de usuario intuitiva y fácil de usar

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Biblioteca QR Code Generator
- Canvas API para el renderizado

## Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requieren dependencias adicionales, la biblioteca QR se carga desde CDN

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/Minijuegosz1531/qr_js_ldm
```

2. Abre el archivo `index.html` en tu navegador web

## Uso

1. Ingresa el texto o URL que deseas codificar en el campo "Valor del QR"
2. (Opcional) Personaliza el nombre del archivo
3. (Opcional) Ajusta el tamaño del código QR
4. (Opcional) Añade un logo al centro del código QR
5. Visualiza el resultado en tiempo real
6. Descarga el código QR haciendo clic en el botón "Descargar"

## Personalización

### Tamaño del QR
- El tamaño se puede especificar en el formato "ancho x alto" (ejemplo: "600x600")
- El tamaño mínimo recomendado es 200x200 píxeles
- El tamaño máximo recomendado es 1000x1000 píxeles

### Logo
- Se puede añadir un logo al centro del código QR
- El logo se redimensionará automáticamente al 20% del tamaño del código QR
- Se recomienda usar logos con fondo transparente para mejores resultados

## Estructura del Proyecto

```
qr-generator/
├── index.html          # Archivo HTML principal
├── script.js           # Lógica de la aplicación
├── styles.css          # Estilos de la aplicación
└── README.md          # Este archivo
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

[Jonathan Brand Garcia] - [desarrollo@losdemarketing.com]

Link del Proyecto: [URL del repositorio] 
