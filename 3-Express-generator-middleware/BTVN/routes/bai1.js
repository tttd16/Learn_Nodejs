var express = require("express");
var router = express.Router();

const logBai1 = (req, res, next) => {
  if (req.url === "/" && req.method === "GET") {
    console.log("Trang chu", req.method, req.url);
    return res.send("Le Tien Dung");
  } else if (req.url === "/about" && req.method === "GET") {
    console.log("About", req.method, req.url);
    return res.send("About");
  }
  next();
};

router.use(logBai1);

module.exports = router;
