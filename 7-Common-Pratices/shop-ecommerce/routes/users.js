var express = require("express");
var router = express.Router();
const {
  registerUser,
  authLogin,
  getUserProfile,
  updateUser,
  getAllUser,
  deleteUser,
  getUserById,
  updateUserById,
} = require("../controller/userController");
// Ham protect kiem tra xem user co gui len token dung hay khong?
// ham isAdmin kiem tra xem co phai admin khong
const { protect, isAdmin } = require("../middleware/authMiddleware");

// @desc : Register a new user
// @route: POST/api/user
// @access: piblic - return token

router.post("/", registerUser);

// 2. @desc: User can login to system
// @route: POST /api/users/login
// @access: Public - return token
router.post("/login", authLogin);

// 3. @desc: Get user profile
// @route: GET /api/users/profile
// @access: Private - Su dung token
router.get("/profile", protect, getUserProfile);

//4. @desc: update user profile
// @route: PUT /api/users/profile
// @access: Private
router.put("/profile", protect, updateUser);

// 5. @desc: Get all users
// @route: GET /api/users
// @access: Private/admin
router.get("/", protect, isAdmin, getAllUser);

// 6. @desc: Delete user
// @route: DELETE /api/users/:id
// @access: Private/admin
router.delete("/:id", protect, isAdmin, deleteUser);

// 7. @desc: Get user by ID
// @route: GET /api/users/:id
// @access: Private/admin
router.get("/:id", protect, isAdmin, getUserById);

// 8. @desc: Update user by ID
// @route: PUT /api/users/:id
// @access: Private/admin
router.put("/:id", protect, isAdmin, updateUserById);

module.exports = router;
