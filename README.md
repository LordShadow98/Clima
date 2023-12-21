Descripción del Proyecto Este repositorio alberga una aplicación web sencilla que proporciona información meteorológica utilizando Node.js y Express. La arquitectura de esta aplicación sigue el enfoque monolítico, lo que significa que todos los componentes están integrados en un solo código base y funcionan como una unidad única.

Requisitos Previos Asegúrate de tener Node.js instalado en tu sistema antes de comenzar. Puedes descargar Node.js desde https://nodejs.org/.

Instalación de Dependencias Clona el repositorio a tu máquina local:

bash Copy code git clone https://github.com/tu-usuario/nombre-del-repo.git cd nombre-del-repo Instala las dependencias utilizando npm:

bash Copy code npm install Cómo Ejecutar la Aplicación Una vez que las dependencias estén instaladas, puedes utilizar los siguientes comandos para ejecutar la aplicación:

Para iniciar la aplicación en modo de desarrollo con reinicio automático:

bash Copy code npm run dev Para iniciar la aplicación en modo de producción:

bash Copy code npm start La aplicación estará disponible en http://localhost:3000.

Uso de la Aplicación Obtener Datos del Clima a través de la API Haz una solicitud GET a la siguiente ruta para obtener datos del clima para una ciudad específica:

bash Copy code /api/weather/:city Sustituye :city con el nombre de la ciudad para la cual deseas obtener información meteorológica.

Interfaz de Usuario Puedes acceder a la interfaz de usuario visitando la siguiente ruta:

bash Copy code /weather Esta ruta devuelve un formulario simple para realizar solicitudes de información meteorológica.

Obtener Datos del Clima mediante el Formulario Utiliza el formulario en la página principal para obtener información del clima para una ciudad específica. Realiza una solicitud POST a la ruta /weather con el nombre de la ciudad en el cuerpo de la solicitud.

Asegúrate de tener una clave de API válida de OpenWeatherMap configurada en el archivo de código fuente.

Capturas del Proyecto

Inicial

pantalla Inical
![Texto alternativo](Clima/Images/image.png)

Respuesta api

![Texto alternativo](Clima/Images/image-1.png)

