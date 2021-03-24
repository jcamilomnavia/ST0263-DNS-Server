# PROYECTO 1 - Topicos Especiales de Telematica

## Universidad EAFIT

### Autores

Juan Camilo Marin Navia <[jcmarinn@eafit.edu.co](mailto:jcmarinn@eafit.edu.co)>

Estefania Velez Cortez <[evelezc1@eafit.edu.co](mailto:evelezc1@eafit.edu.co)>

### Sobre este repositorio

En este proyecto se especifica la configuracion usada para la creacion del MIDDLEWARE planteado en el proyecto 1 de la materia.

### Requerimientos
• El usuario debe autenticarse antes de poder hacer uso del servicio.
• El productor debe poder crear y listar colas.
• El productor debe poder crear y listar canales.
• El productor debe poder enviar mensajes a sus canales.
• El productor debe poder enviar mensajes a sus colas.
• El consumidor debe poder listar las colas activas.
• El consumidor debe poder listar los canales activos.
• El consumidor debe poder conectarse a colas.
• El consumidor debe poder conectarse a canales.
• El consumidor debe poder hacer la operación PULL a canales para obtener
los mensajes enviados por el productor.
• El consumidor debe poder hacer la operación PULL a colas para obtener los
mensajes enviados por el productor.
• El consumidor debe poder recuperar los mensajes que fueron enviados al
canal al que está suscrito, así haya estado offline.

 ### Analisis
Para esta práctica nos basamos en las instrucciones del documento inicial donde se definen funcionalidades y servicios relacionados con la implementación de un Middleware en donde primero tuvimos en cuenta la conexión y desconexión al servidor, después el ciclo de vida de canales y de colas y finalmente su envió y recepción de mensajes; todo esto bajado en una lista de requerimientos en donde aprendimos y evidenciamos características de los sistemas distribuidos como heterogeneidad, transparencia, entre otros…
 
 ### Diseño/Arquitectura
 ![image](https://user-images.githubusercontent.com/30262251/112245914-d9bf4d80-8c1f-11eb-936f-75e60b86674e.png)
La arquitectura que implementamos para el proyecto se estructura de la siguiente manera:
Servidor: Donde estará corriendo un API REST implementado en nest.js identificado como el middleware orientado a mensajes(MOM). Aquí se podrá realizar la autenticación de usuarios y se guardará en memoria RAM todos los datos recibidos. Estará corriendo sobre una máquina EC2 dedicada con una imagen ami, dentro de la máquina estará ejecutándose un docker con el API en el puerto 80.
Cliente(s): Donde estará corriendo una aplicación implementada en react.js consumiendo el API REST para el envío y consumo de mensajes. Pueden haber tantas instancias del cliente como se desee. Estará corriendo sobre una máquina EC2 dedicada con una imagen ami, dentro de la máquina estará ejecutándose un docker con el API en el puerto 80.

