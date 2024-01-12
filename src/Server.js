const express = require("express");
const routes = require("./routes/mainroutes");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Detail = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Courses = require("./models/Courses");

const app = express();
app.use("/static", express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("", routes);

//template engine
app.set("view engine", "hbs");
hbs.registerPartials("views/partials");
app.set("views", "Views");

//db connections
mongoose
  .connect(
    "mongodb+srv://Samarth:samarth123456@ecommercecluster.byh2bxj.mongodb.net/CourseWebsite"
  )
  .then(() => {
    console.log("db Connected");

    // Courses.create([
    //   {
    //     image: "/static/images/ApplicationBanner.png",
    //     title: "IOS and Android Application",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/WebDeveloperBanner.png",
    //     title: "Full Stack Developer",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/reactJSBanner.jpg",
    //     title: "ReactJS ",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/NodeJSBanner.jpg",
    //     title: "NodeJS",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/ReactNativeBanner.png",
    //     title: "React-Native",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/gameDevelopment.png",
    //     title: "Game Developer",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/javascript.png",
    //     title: "JavaScript",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    //   {
    //     image: "/static/images/html5.png",
    //     title: "HTML",
    //     linkText: "Info",
    //     link: "/contact",
    //   },
    // ]);

    // Service.create([
    //   {
    //     icon: "/static/image/webdesign.jpg",
    //     title: "Web Application",
    //     linkText: "Check",
    //     link: "/contact",
    //   },
    //   {
    //     icon: "/static/image/WebDevelopment.jpg",
    //     title: "Web Design and Development",
    //     linkText: "Check",
    //     link: "/contact",
    //   },
    //   {
    //     icon: "/static/image/appdevelopment.jpg",
    //     title: "App Development",
    //     linkText: "Check",
    //     link: "/contact",
    //   },
    //   {
    //     icon: "/static/image/Desktop.jpg",
    //     title: "Desktop Application",
    //     linkText: "Check",
    //     link: "/contact",
    //   },
    //   {
    //     icon: "/static/image/gameDevelopment.png",
    //     title: "Game Development",
    //     linkText: "Check",
    //     link: "/contact",
    //   },
    //   {
    //     icon: "/static/image/certificate.jpg",
    //     title: "Certified Course",
    //     linkText: "Check",
    //     link: "/courses",
    //   },
    // ]);

    // Slider.create([
    //   {
    //     title: "Learning",
    //     subTitle:
    //       "It is in their ability to shape destinies, spark laughter, and heal wounds. Every word, chosen thoughtfully, is able to enlighten your life.",
    //     imageUrl: "/static/images/learn1.webg",
    //   },
    //   {
    //     title: "Artist",
    //     subTitle:
    //       "Every child is an artist; the problem is staying an artist when you grow up” Pablo Picasso",
    //     imageUrl: "/static/images/learn2.jpg",
    //   },
    //   {
    //     title: "Learn New Things",
    //     subTitle:
    //       "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep",
    //     imageUrl: "/static/images/learn3.png",
    //   },
    //   {
    //     title: "Success",
    //     subTitle:
    //       "Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing",
    //     imageUrl: "/static/images/learn4.jpg",
    //   },
    // ]);

    // Detail.create({
    //   brandName: "Samarth Technical Solution",
    //   brandIconUrl: "/static/images/learningLogo.png",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Courses",
    //       url: "/courses",
    //     },
    //     {
    //       label: "Contact",
    //       url: "/contact",
    //     },
    //   ],
    // });
  })
  .catch((err) => {
    console.log("err" + err);
  });

app.listen(process.env.PORT || 5558, () => {
  console.log("Server started");
});
