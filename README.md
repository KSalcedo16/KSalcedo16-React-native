# Se cactualizó la carpeta evidencias
Esta contiene las imagenes donde se muestra la app en emulador de android <Tambien el calendario de actividades>.

# Subiendo al repositorio

Integrantes:

Kenner Herrera Torres.
Luigy Ocoso Sinisterra.
Daniel Rivas Segura.

# Informe de Progreso del Proyecto
Este documento detalla los pasos de configuración del entorno de desarrollo y el progreso alcanzado en la fase inicial del proyecto de la aplicación móvil de recolección de residuos.

1. Configuración del Entorno de Desarrollo
Para iniciar el desarrollo de la aplicación móvil, me enfoqué en establecer un entorno robusto y listo para React Native con Expo.

# Herramientas Instaladas y Verificadas:

Node.js y npm: Verifiqué su correcta instalación para el entorno de ejecución de JavaScript y la gestión de paquetes.

Expo CLI: Instalé esta herramienta globalmente, ya que simplifica la creación, ejecución y gestión de la aplicación móvil.

Android Studio: Configuré el entorno, incluyendo la instalación del SDK de Android y la creación de un Dispositivo Virtual (AVD) para emular un teléfono Android y realizar pruebas precisas.

Solución de Problemas:

Encontré y resolví un error común de compatibilidad entre el Android Gradle Plugin (AGP) y la versión de Java por defecto, actualizando la configuración del proyecto para utilizar el JDK 17.

2. Desarrollo y Diseño Inicial de la Aplicación
Comencé el desarrollo enfocándome en las dos pantallas principales y la funcionalidad de geolocalización:

Home.tsx (Pantalla de Inicio):

Diseñé la pantalla de bienvenida con una interfaz atractiva.

Optimicé el diseño para corregir la posición del encabezado.

La pantalla ahora invita al usuario a ver la ubicación en tiempo real del camión de basura.

# ExploreScreen.js (Visualización del Mapa):

Implementé un mapa interactivo.

Correcciones Geográficas: Corregí las coordenadas iniciales para que el mapa se centre correctamente en la ciudad de Buenaventura, Colombia.

Funcionalidad: Implementé los controles de zoom (+ y -) para mejorar la navegación del usuario.

Monitoreo: Agregué un Marker (marcador) al mapa para indicar visualmente la ubicación actual del camión de basura.

3. Control de Versiones y Flujo de Ramas (Git)
Implementé la gestión de versiones para asegurar la trazabilidad y el respaldo de mi código, superando un problema inicial de sincronización:

Inicialización y Primer Carga: Inicialicé el directorio como un repositorio local de Git y lo conecté con el repositorio en línea en GitHub, identificado como KSalcedo16/React-native. Los archivos base se subieron en el primer push.

Problema Inicial de Sincronización: En un intento posterior de actualizar el código, la terminal me mostró el mensaje "Already up to date" al usar git pull. Identifiqué que la causa era la ausencia de nuevos commits en la rama local, y que el comando no era el adecuado para subir cambios.

Establecimiento de un Flujo de Trabajo con Ramas: Para garantizar un historial limpio y ordenado, establecí un flujo de desarrollo en ramas separadas:

Creación de la Nueva Rama: Utilicé el comando <git branch actualizaciones> para crear una rama de desarrollo llamada actualizaciones y cambiarme a ella de inmediato con <git checkout actualizaciones>, separando mi trabajo de la rama principal (main).

Subida de la Nueva Rama Remota: Ejecuté git push --set-upstream origin actualizaciones. Este comando subió la nueva rama a GitHub.

Confirmación y Sincronización de Cambios: Finalmente, apliqué la práctica correcta: usé git add . para preparar los archivos modificados, creé un commit con el mensaje "Se agregaron las funcionalidades del login y ajustes generales" y luego ejecuté git push para enviar los commits guardados a la rama remota.

Resumen de Comandos Esenciales de Git
Los comandos esenciales que he ejecutado para la gestión del código han sido:

git init: Inicializar el repositorio local.

git branch actualizaciones y git checkout actualizaciones: Crear una nueva rama y cambiar a ella.

git add .: Agregar todos los archivos al área de preparación.

git commit -m "Mensaje": Confirmar los cambios localmente.

git push / Push origin: Sincronizar y subir la copia local a GitHub.

# React native con expo
Ecosistema y conjunto de herramientas que simplifica el desarrollo de app multiplataforma con React Native. Ofrece un SDK (Software Development Kit) con APIs para funciones nativas (como acceso a cámara o notificaciones), una herramienta de línea de comandos (Expo CLI) para administrar el proyecto y la aplicación Expo Go para previsualizar la aplicación en dispositivos físicos sin procesos de compilación nativos.

# Límites
1. Rendimiento en cargas de trabajo muy intensivas

2. Dependencia de módulos nativos.

3. Tamaño de la aplicación.

4. Actualizaciones del sistema operativo.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Subiendo al repositorio
## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
