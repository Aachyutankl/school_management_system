const getTeacherController = require("../controller/teacherController.js");

module.exports = (app) => {
    app.get('/api/auth/getSmsTeacher', getTeacherController.getSmsTeacher); // Get API Teacher Details

    app.post('/api/auth/createSmsTeacher', getTeacherController.createSmsTeacher);
    app.put('/api/auth/updateSmsTeacher', getTeacherController.updateSmsTeacher);
    app.delete('/api/auth/deleteSmsTeacher/:id', getTeacherController.deleteSmsTeacher);
    app.post('/api/auth/login', getTeacherController.login);
  };