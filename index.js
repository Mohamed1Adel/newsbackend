require("dotenv").config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");
var bodyParser = require("body-parser");
const app = express();
// const DayTour = require("./models/dayTour");
// const Domestic = require("./models/domestic");
// const HajjOmrah = require("./models/hajjOmrah");
// const NileCruise = require("./models/nileCruise");
// const Outbound = require("./models/outbound");
// const MainSliderImages = require("./models/mainSliderImages");
// const TransportationSliderImages = require("./models/transportationSliderImages");
// const HajjOmrahSliderImages = require("./models/hajjOmrahSliderImages");
const news = require("./models/newsmodal");

// const Program = require("./models/program");
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: "35mb" }));
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
// const Login = require("./models/Login");
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "35mb",
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// app.get('/news', (req, res) => {
//   // console.log(req.body);
//   // Here, we will interact with MongoDB to save the data
//   // res.send('Form data received!');
//   res.sendFile(__dirname + "/public/index.html");
// });
app.post('/addnews', (req, res) => {
  // console.log(req.body);

  const newss = new news(req.body);
    newss.save();
    console.log(req.body);
    // res.redirect("/");
  // Here, we will interact with MongoDB to save the data
  res.send('Form data received!');
});

  app.get("/getAllNews", async (req, res) => {
    const newss = await news.find();
    res.json(newss);
  });
  app.get("/getNews/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const newss = await news.findById(id);
      res.json(newss);
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });
  app.patch("/updateNews/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const newss = await news.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json(newss);
      console.log("update succefully");
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });
  app.delete("/deleteNews/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const newss = await news.deleteOne({ _id: id });
      res.json({ deletedCount: newss.deletedCount });
      return;
    } catch (e) {
      console.log("error while reading dayTour of id ", id);
      return res.send("error");
    }
  });



// app.get("/",cors(), (req, res) => {
//   res.send("Hello world!");
//   // res.sendFile("./views/home.html", { root: __dirname });
// });

// app.post("/login",async(req,res)=>{
//   const {userName,password} = req.body;

//   try{
//     const check = await Login.findOne({userName:userName,password:password});
//     if(check){
//       res.json("exist")
//     }else{
//       res.json("notexist")
      
//     }
//   }catch(e){
//     res.json("notexist")
//   }
// })

// app.post("/", (req, res) => {
//   // res.send("Hello world!");
//   console.log(req.body);
//   res.redirect("/");
// });




// {
//   //day tour section

//   app.post("/addDayTour", (req, res) => {
//     const dayTour = new DayTour(req.body);
//     dayTour.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllDayTours", async (req, res) => {
//     const dayTour = await DayTour.find();
//     res.json(dayTour);
//   });
//   app.get("/getDayTourDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const dayTour = await DayTour.findById(id);
//       res.json(dayTour);
//       return;
//     } catch (e) {
//       console.log("error while reading dayTour of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateDayTourDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const dayTour = await DayTour.findOneAndUpdate({ _id: id }, req.body, {
//         new: true,
//       });
//       res.json(dayTour);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading dayTour of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteDayTour/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const dayTour = await DayTour.deleteOne({ _id: id });
//       res.json({ deletedCount: dayTour.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading dayTour of id ", id);
//       return res.send("error");
//     }
//   });
// }

// domestic
// {
//   app.post("/addDomestic", (req, res) => {
//     const domestic = new Domestic(req.body);
//     domestic.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllDomestics", async (req, res) => {
//     const domestics = await Domestic.find();
//     console.log(domestics);
//     res.json(domestics);
//   });
//   app.get("/getDomesticDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const domestic = await Domestic.findById(id);
//       res.json(domestic);
//       return;
//     } catch (e) {
//       console.log("error while reading dmoestic of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateDomesticDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const domestic = await Domestic.findOneAndUpdate({ _id: id }, req.body, {
//         new: true,
//       });
//       res.json(domestic);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading dmoestic of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteDomestic/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const domestic = await Domestic.deleteOne({ _id: id });
//       res.json({ deletedCount: domestic.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading dmoestic of id ", id);
//       return res.send("error");
//     }
//   });
// }

// {
//   // hajjOmrah section

//   app.post("/addHajjOmrah", (req, res) => {
//     const hajjOmrah = new HajjOmrah(req.body);
//     hajjOmrah.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllHajjOmrah", async (req, res) => {
//     const hajjOmrah = await HajjOmrah.find();
//     res.json(hajjOmrah);
//   });
//   app.get("/getHajjOmrahDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const hajjOmrah = await HajjOmrah.findById(id);
//       res.json(hajjOmrah);
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateHajjOmrahDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const hajjOmrah = await HajjOmrah.findOneAndUpdate(
//         { _id: id },
//         req.body,
//         {
//           new: true,
//         }
//       );
//       res.json(hajjOmrah);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteHajjOmrah/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const hajjOmrah = await HajjOmrah.deleteOne({ _id: id });
//       res.json({ deletedCount: hajjOmrah.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
// }

// {
//   // nileCruise section

//   app.post("/addNileCruise", (req, res) => {
//     const nileCruise = new NileCruise(req.body);
//     nileCruise.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllNileCruise", async (req, res) => {
//     const nileCruise = await NileCruise.find();
//     res.json(nileCruise);
//   });
//   app.get("/getNileCruiseDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const nileCruise = await NileCruise.findById(id);
//       res.json(nileCruise);
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateNileCruiseDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const nileCruise = await NileCruise.findOneAndUpdate(
//         { _id: id },
//         req.body,
//         {
//           new: true,
//         }
//       );
//       res.json(nileCruise);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading nileCruise of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteNileCruise/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const nileCruise = await NileCruise.deleteOne({ _id: id });
//       res.json({ deletedCount: nileCruise.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading nileCruise of id ", id);
//       return res.send("error");
//     }
//   });
// }

// {
//   // Outbound section

//   app.post("/addOutbound", (req, res) => {
//     const outbound = new Outbound(req.body);
//     outbound.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllOutbound", async (req, res) => {
//     const outbound = await Outbound.find();
//     res.json(outbound);
//   });
//   app.get("/getOutboundDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const outbound = await Outbound.findById(id);
//       res.json(outbound);
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateOutboundDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const outbound = await Outbound.findOneAndUpdate({ _id: id }, req.body, {
//         new: true,
//       });
//       res.json(outbound);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading Outbound of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteOutbound/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const outbound = await Outbound.deleteOne({ _id: id });
//       res.json({ deletedCount: outbound.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading Outbound of id ", id);
//       return res.send("error");
//     }
//   });
// }

// {
//   // Program section

//   app.post("/addProgram", (req, res) => {
//     const program = new Program(req.body);
//     program.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getAllProgram", async (req, res) => {
//     const program = await Program.find();
//     res.json(program);
//   });
//   app.get("/getProgramDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const program = await Program.findById(id);
//       res.json(program);
//       return;
//     } catch (e) {
//       console.log("error while reading hajjOmrah of id ", id);
//       return res.send("error");
//     }
//   });
//   app.patch("/updateProgramDetails/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const program = await Program.findOneAndUpdate({ _id: id }, req.body, {
//         new: true,
//       });
//       res.json(program);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading Program of id ", id);
//       return res.send("error");
//     }
//   });
//   app.delete("/deleteProgram/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       const program = await Program.deleteOne({ _id: id });
//       res.json({ deletedCount: program.deletedCount });
//       return;
//     } catch (e) {
//       console.log("error while reading Program of id ", id);
//       return res.send("error");
//     }
//   });
// }

// {
//   // sliders Images

//   //main slider

//   app.post("/mainSlider", (req, res) => {
//     const mainSliderImages = new MainSliderImages(req.body);
//     mainSliderImages.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getMainSlider", async (req, res) => {
//     const mainSliderImages = await MainSliderImages.find();
//     res.json(mainSliderImages);
//   });
//   app.patch("/updateMainSlider/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       // const id = req.params.id;
//       const mainSliderImages = await MainSliderImages.findOneAndUpdate(
//         { _id: id },
//         req.body,
//         {
//           new: true,
//         }
//       );
//       res.json(mainSliderImages);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading Program of id ", id);
//       return res.send("error");
//     }
//   });

//   //transportation slider

//   app.post("/transportationSlider", (req, res) => {
//     const transportationSliderImages = new TransportationSliderImages(req.body);
//     transportationSliderImages.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getTransportationSlider", async (req, res) => {
//     const transportationSliderImages = await TransportationSliderImages.find();
//     res.json(transportationSliderImages);
//   });
//   app.patch("/updateTransportationSlider/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       // const id = req.params.id;
//       const transportationSliderImages =
//         await TransportationSliderImages.findOneAndUpdate(
//           { _id: id },
//           req.body,
//           {
//             new: true,
//           }
//         );
//       res.json(transportationSliderImages);
//       console.log("update succefully");
//       return;
//     } catch (e) {
//       console.log("error while reading Program of id ", id);
//       return res.send("error");
//     }
//   });

//   //hajjOmreh slider

//   app.post("/hajjOmrahSlider", (req, res) => {
//     const hajjOmrahSliderImages = new HajjOmrahSliderImages(req.body);
//     hajjOmrahSliderImages.save();
//     console.log(req.body);
//     res.redirect("/");
//   });
//   app.get("/getHajjOmrahSlider", async (req, res) => {
//     const hajjOmrahSliderImages = await HajjOmrahSliderImages.find();
//     res.json(hajjOmrahSliderImages);
//   });
//   app.patch("/updateHajjOmrahSlider/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//       // const id = req.params.id;
//       const hajjOmrahSliderImages =
//         await HajjOmrahSliderImages.findOneAndUpdate({ _id: id }, req.body, {
//           new: true,
//         });
//       res.json(hajjOmrahSliderImages);
//       console.log("update succefullyy");
//       return;
//     } catch (e) {
//       console.log("error while reading Program of id ", id);
//       return res.send("error");
//     }
//   });
// }

mongoose
  // .connect(
  //   "mongodb+srv://mohamedqwe542:Sliman01556040246@cluster0.sx79eno.mongodb.net/?retryWrites=true&w=majority"
  // )
  .connect(
    "mongodb+srv://mohamedqwe542:q72bfWU6yVfQo7El@rmcluster.s63cstd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080 || process.env.PORT, () => {
      console.log(` 8080`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
