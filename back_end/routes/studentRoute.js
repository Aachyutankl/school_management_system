const getStudentController = require("../controller/studentController");

module.exports = (app) => {
    app.get('/api/auth/getSmsStudent', getStudentController.getSmsStudent); // Get API Teacher Details

    app.post('/api/auth/createSmsStudent', getStudentController.createSmsStudent);
    app.put('/api/auth/updateSmsStudent', getStudentController.updateSmsStudent);
    app.delete('/api/auth/deleteSmsStudent/:id', getStudentController.deleteSmsStudent);
    app.post('/api/auth/login', getStudentController.login);
  };