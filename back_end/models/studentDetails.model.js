// import { v4 as uuidv4 } from 'uuid'; // ES6 Modal syntax

const { v4: uuidv4 } = require('uuid'); // commonJs Syntax

module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define('studentdetail', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        class: {
            type: Sequelize.STRING
        },
        rollNo: {
            type: Sequelize.INTEGER
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
    student.beforeCreate(student => student.id = uuidv4());
    student.sync()
        .then(() => console.log('student table created successfully'))
        .catch(err => console.log('Did you enter wrong student table in database credentials?' + err));
    return student;
}