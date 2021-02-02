// import { v4 as uuidv4 } from 'uuid'; // ES6 Modal syntax

const { v4: uuidv4 } = require('uuid'); // commonJs Syntax

module.exports = (sequelize, Sequelize) => {
    const teacher = sequelize.define('teacherdetail', {
        teacherId: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        userName:{
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATEONLY    
        },
        contactNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        place: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.ENUM('Male', 'Female')
        }
    });
    teacher.beforeCreate(teacher => teacher.id = uuidv4());
    teacher.sync()
        .then(() => console.log('teacher table created successfully'))
        .catch(err => console.log('Did you enter wrong teacher table in database credentials?' + err));
    return teacher;
}