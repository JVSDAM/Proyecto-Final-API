<img src="https://github.com/JVSDAM/Proyecto-Final-Movil/assets/145678059/c32cc4fb-8bc1-46dd-85cf-3caf2d0d3f4a" width=200px height=200px> 
<h1>Teams3C - API</h1>

### 📋 RESUMEN
API del proyecto final de DAM Teams3C. Cuenta con los endpoints y las definiones de las siguientes tablas:
- Players.
- Teams.
- Tournaments.
- Invites.
- Inscriptions.

### 🧱 INSTALACIÓN
1. Instalar NodeJs.
2. Descargar el paquete.
3. Ejecutar npm install.
4. Cambiar el enlace de conexión de config.js por el de tu base de datos MongoDB.
5. La API funciona en el puerto localhost:3001.

### 🛠 GUÍA DE USO
Una vez iniciada, la API funciona en localhost:3001. Para consultar la información de la API debemos hacer uso de los endpoints implementados, que devuelven los datos en formato JSON. A continuación un repaso de los endpoints implementados y su uso:

#### Players
- POST /players -> Permite crear un jugador a la base de datos.
- GET /players -> Devuelve todos los jugadores en la base de datos.
- GET /players/:par -> Devuelve todos los jugadores cuyo nombre coincida o se asemeje al parámetro introducido.
- GET /players/id/:par -> Devuelve el jugador cuya id haya sido introducida en el parámetro.
- GET /players/email/:par -> Devuelve el jugador cuyo email haya sido introducida en el parámetro.
- GET /players/team/:par -> Devuelve los jugadores cuya id de equipo haya sido introducida en el parámetro.
- PUT /players/id/:par -> Modifica el jugador cuya id haya sido introducida en el parámetro.
- DELETE /players/id/:par -> Elimina el jugador cuya id haya sido introducida en el parámetro.

#### Teams
- POST /teams -> Permite crear un equipo en la base de datos.
- GET /teams -> Devuelve todos los equipos en la base de datos.
- GET /teams/:par -> Devuelve todos los equipos cuyo nombre coincida o se asemeje al parámetro introducido.
- GET /teams/id/:par -> Devuelve el equipo cuya id haya sido introducida en el parámetro.
- PUT /teams/id/:par -> Modifica el equipo cuya id haya sido introducida en el parámetro.
- DELETE /teams/id/:par -> Elimina el equipo cuya id haya sido introducida en el parámetro.

#### Tournaments
- POST /tournaments -> Permite crear un torneo en la base de datos.
- GET /tournaments -> Devuelve todos los torneos en la base de datos.
- GET /tournaments/:par -> Devuelve todos los torneos cuyo nombre coincida o se asemeje al parámetro introducido.
- GET /tournaments/id/:par -> Devuelve el torneo cuya id haya sido introducida en el parámetro.
- PUT /tournaments/id/:par -> Modifica el torneo cuya id haya sido introducida en el parámetro.
- DELETE /tournaments/id/:par -> Elimina el torneo cuya id haya sido introducida en el parámetro

#### Invites
- POST /invites -> Permite crear una invitación en la base de datos.
- GET /invites -> Devuelve todas las invitaciones en la base de datos.
- GET /invites/id/:par -> Devuelve la invitación cuya id haya sido introducida en el parámetro.
- GET /invites/player/:par -> Devuelve las invitaciones cuyo id de jugador coincida con el parámetro introducido.
- GET /invites/team/:par -> Devuelve las invitaciones cuyo id de equipo coincida con el parámetro introducido.
- PUT /invites/id/:par -> Modifica la invitación cuya id haya sido introducida en el parámetro.
- DELETE /invites/id/:par -> Elimina la invitación cuya id haya sido introducida en el parámetro.

#### Inscriptions
- POST /inscriptions -> Permite crear una inscripción en la base de datos.
- GET /inscriptions -> Devuelve todas las inscripciones en la base de datos.
- GET /inscriptions/id/:par -> Devuelve la inscripción cuya id haya sido introducida en el parámetro.
- GET /inscriptions/tournament/:par -> Devuelve las inscripciones cuyo id de torneo coincida con el parámetro introducido.
- GET /inscriptions/team/:par -> Devuelve las inscripciones cuyo id de equipo coincida con el parámetro introducido.
- PUT /inscriptions/id/:par -> Modifica la inscripción cuya id haya sido introducida en el parámetro.
- DELETE /inscriptions/id/:par -> Elimina la inscripción cuya id haya sido introducida en el parámetro.

### © LICENCIA
API Proyecto Final Teams3C © 2024 by JVS is licensed under CC BY-NC-SA 4.0 
