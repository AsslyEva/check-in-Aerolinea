const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Configuración de la conexión a la base de datos

router.get('/:id/passengers', (req, res) => {
  const flightId = req.params.id;

  // Lógica para buscar datos del vuelo y los pasajeros en la base de datos

  res.status(200).json({
    code: 200,
    data: {
      flightId,
      takeoffDateTime: 1688207580,
      takeoffAirport: "Aeropuerto Internacional Arturo Merino Benitez, Chile",
      landingDateTime: 1688221980,
      landingAirport: "Aeropuerto Internacional Jorge Cháve, Perú",
      airplaneId: 1,
      passengers: [
        {
          passengerId: 90,
          dni: 983834822,
          name: "Marisol",
          age: 44,
          country: "México",
          boardingPassId: 24,
          purchaseId: 47,
          seatTypeId: 1,
          seatId: 1
        },
        // ...
      ]
    }
  });
});

module.exports = router;