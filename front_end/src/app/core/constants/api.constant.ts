
const APIENV = {
    'UAT': {
        Login:"http://localhost:5000/api/auth/login",
        getTeacherDetails:"http://localhost:5000/api/auth/getSmsTeacher",
        createSmsTeacher:"http://localhost:5000/api/auth/createSmsTeacher",
        updateSmsTeacher:"http://localhost:5000/api/auth/updateSmsTeacher",
        deleteSmsTeacher:"http://localhost:5000/api/auth/deleteSmsTeacher",

        //student api
        getStudentDetails:"http://localhost:5000/api/auth/getSmsStudent",
        createSmsStudent:"http://localhost:5000/api/auth/createSmsStudent",
        updateSmsStudent:"http://localhost:5000/api/auth/updateSmsStudent",
        deleteSmsStudent:"http://localhost:5000/api/auth/deleteSmsStudent/:id"
    },
    'LIVE': {
        Login:"http://localhost:5000/api/auth/login",
        getTeacherDetails:"http://localhost:5000/api/auth/getSmsTeacher",
        createSmsTeacher:"http://localhost:5000/api/auth/createSmsTeacher",
        updateSmsTeacher:"http://localhost:5000/api/auth/updateSmsTeacher",
        deleteSmsTeacher:"http://localhost:5000/api/auth/deleteSmsTeacher",
        
         //student api
         getStudentDetails:"http://localhost:5000/api/auth/getSmsStudent",
         createSmsStudent:"http://localhost:5000/api/auth/createSmsStudent",
         updateSmsStudent:"http://localhost:5000/api/auth/updateSmsStudent",
         deleteSmsStudent:"http://localhost:5000/api/auth/deleteSmsStudent/:id"
    },
    live: false
}
export const apiConstant = APIENV.live ? APIENV.LIVE : APIENV.UAT;