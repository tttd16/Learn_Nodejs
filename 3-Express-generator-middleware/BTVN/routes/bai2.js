var express = require("express");
const Joi = require("joi");

var router = express.Router();

const authAdmin = (req, res, next) => {
  if (req.path !== "/admin") {
    res.send("Trang người dùng");
    return next();
  } else {
    const authSchema = Joi.object({
      username: "admin",
      password: "admin",
    });
    const { error } = authSchema.validate(req.body);
    if (error) {
      res.status(401).send("Tên đăng nhập hoặc mật khẩu không hợp lệ");
    } else {
      next();
    }
  }
};

router.use(authAdmin);

router.get("/admin", (req, res) => {
  res.send("Trang quản trị nội dung của admin");
});

module.exports = router;
