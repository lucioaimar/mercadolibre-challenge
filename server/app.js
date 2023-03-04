const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const mercadolibreService = require('./MercadolibreService.js');

app.get("/getUser", (req, res) => {
  res.json(mercadolibreService.getUser());
});

app.get("/getUserRestrictions", (req, res) => {
  res.json(mercadolibreService.getUserRestrictions(req.params.id));
});

app.get("/getUserPurchases/:id", (req, res) => {
  res.json(mercadolibreService.getUserRestrictions(req.params.id, req.params.limit, req.params.page));
});

app.get("/getLevel", (req, res) => {
  res.json(mercadolibreService.getLevel(req.params.id));
});

app.get("/getShipment/:id", (req, res) => {
  res.json(mercadolibreService.getShipment(req.params.id));
});

app.get("/getPayment", (req, res) => {
  res.json(mercadolibreService.getPayment(req.params.id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
