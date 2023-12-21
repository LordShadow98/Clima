README.md
Arquitectura Monolítica
Este proyecto sigue una arquitectura monolítica, donde la aplicación se desarrolla como una única unidad, integrando tanto el frontend como el backend en un solo código base. La comunicación entre el cliente y el servidor se realiza a través de solicitudes HTTP, utilizando Express.js en el backend para manejar las rutas y lógica del servidor.

Instalación de Dependencias
Antes de ejecutar la aplicación, asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos:

Clona este repositorio:

bash
Copy code
git clone https://github.com/tu-usuario/nombre-del-repo.git
Navega al directorio del proyecto:

bash
Copy code
cd nombre-del-repo
Instala las dependencias tanto para el frontend como para el backend:

bash
Copy code
npm install
Este comando instalará las bibliotecas necesarias que se encuentran en los archivos package.json tanto en la carpeta raíz como en la carpeta public.

Levantar la Aplicación
Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación con los siguientes comandos:

Para Desarrollo
Ejecuta el servidor Express (backend):

bash
Copy code
npm start
El servidor estará disponible en http://localhost:3000/api/weather.

Abre otro terminal y ejecuta el servidor de desarrollo para el frontend:

bash
Copy code
npm run dev
La aplicación estará disponible en http://localhost:3000/weather.

Para Producción
Construye la aplicación para producción:

bash
Copy code
npm run build
Este comando compilará y optimizará el código para producción.

Ejecuta el servidor Express (backend):

bash
Copy code
npm start
La aplicación estará disponible en http://localhost:3000/weather.

Uso de la Aplicación
Una vez que la aplicación esté en funcionamiento, puedes acceder a la interfaz de usuario en http://localhost:3000/weather. Ingresa el nombre de la ciudad y haz clic en "Consultar Clima" para obtener información en tiempo real sobre el clima.

Nota: Asegúrate de tener una clave de API válida de OpenWeatherMap y reemplazar '999d54a97f49d0f57ae4e7af8870e4d4' con tu propia clave en los archivos index.html y app.js.

    
