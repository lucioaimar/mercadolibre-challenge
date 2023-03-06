const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const MercadolibreService = require("./MercadolibreService.js");

const mercadolibreService = new MercadolibreService();

app.get("/getUser", (req, res) => {
  mercadolibreService.getUser().then((user) => {
    res.json(user);
  });
});

app.get("/getUserRestrictions/:id", (req, res) => {
  mercadolibreService
    .getUserRestrictions(req.params.id)
    .then((userRestrictions) => {
      res.json(userRestrictions);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

app.get("/getUserPurchases/:id", (req, res) => {
  mercadolibreService
    .getUserPurchases(req.params.id, req.query.limit, req.query.page)
    .then((userPurchases) => {
      res.json(userPurchases);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

app.get("/getLevel/:id", (req, res) => {
  mercadolibreService
    .getLevel(req.params.id)
    .then((level) => {
      res.json(level);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

app.get("/getShipment/:id", (req, res) => {
  mercadolibreService
    .getShipment(req.params.id)
    .then((shipment) => {
      res.json(shipment);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

app.get("/getPayment/:id", (req, res) => {
  mercadolibreService
    .getPayment(req.params.id)
    .then((payment) => {
      res.json(payment);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
