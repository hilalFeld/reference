const express = require("express");
const mongoose = require("mongoose");
const Tour = require("../model/tour");

function gettour(req, res) {
  res.render("main");
}

function posttour(req, res) {
  const newTour = new Tour({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
  });
  newTour.save();

  res.redirect("/");
}

module.exports = {
  gettour,
  posttour,
};