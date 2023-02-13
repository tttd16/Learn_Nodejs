const express = require("express");
const teacherRouter = express.Router();

const teachers = [
  { name: "Nguyen Tuan Anh - teacher", age: 31, id: 1, class:'2A' },
  { name: "Le Tien Dung - teacher", age: 23, id:2, class:'2B' },
  { name: "Trac Pham - teacher", age: 26, id:3, class:'2C' },
];

teacherRouter.get("/", (req, res) => {
  res.json(teachers);
});

teacherRouter.get("/add", (req, res) => {
  teachers.push({ name: "Ngo Kinh - teacher", age: 26 });
  res.json(teachers);
});

teacherRouter.get("/delete", (req, res) => {
  const index = teachers.findIndex(
    (value) => value.name == "Ngo Kinh - teacher" && value.age == 26
  );
  if (index !== -1) {
    teachers.splice(index, 1);
  }
  res.json(teachers);
});


teacherRouter.get('/find/:id', (req, res) => {
    const id = req.params.id
    const findTeacher = teachers.find((teacher) => teacher.id === parseInt(id))
    if(findTeacher){
        res.json(findTeacher)
    } else{
        res.send('Khong tim thay giao vien nay')
    }
})

teacherRouter.get('/find/:id/class/:classId', (req, res) => {
    const id = req.params.id
    const classId = req.params.classId
    const findTeacherById = teachers.filter((teacher) => teacher.id === parseInt(id))
    const findTeacherByClassId = findTeacherById.find((teacher) => teacher.class === classId )
    if(findTeacherByClassId) {
        res.json(findTeacherByClassId)
    } else {
        res.send(`Khong co giao vien trong lop ${classId}`)
    }
})

teacherRouter.get('/find', (req, res) => {
    const age = req.query.age
    const classTeacher = req.query.class
    const filterTeacher = teachers.filter((teacher) => teacher.age === parseInt(age))
    const findTeacherClass = filterTeacher.find((teacher) => teacher.class === classTeacher)
    if(findTeacherClass) {
        res.json(findTeacherClass)
    } else {
        res.send(`Khong thay giao vien co do tuoi nay ${age}`)
    }
})



module.exports = teacherRouter;
