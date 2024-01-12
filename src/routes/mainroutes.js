const express = require("express");
const Detail = require("../models/Details");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Course = require("../models/Courses");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const detail = await Detail.findOne({ _id: "65a0f1d8557a1825e25d44be" });
  const slider = await Slider.find();
  const service = await Service.find();

  res.render("index", {
    details: detail,
    sliders: slider,
    services: service,
  });
});

routes.get("/courses", async (req, res) => {
  const detail = await Detail.findOne({ _id: "65a0f1d8557a1825e25d44be" });
  const courses = await Course.find();
  res.render("course", {
    details: detail,
    course: courses,
  });
});

routes.post("/process-contact-form", async (req, res) => {
  console.log("form is submitted");
  console.log(req.body);
  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = routes;
