const smsTeacherRoutes = require("./teacherRoute");
const smsStudentRoutes = require("./studentRoute");

module.exports = router => {
    smsTeacherRoutes(router);
    smsStudentRoutes(router);
  return router;
};