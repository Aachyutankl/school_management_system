const db = require('../models');
const smsStudentDet = db.studentdetail;
const moment = require('moment');
const dateFormatString = "DD-MM-YYYY";

exports.createSmsStudent = (req, res) => {
    smsStudentDet.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          class: req.body.class,
          rollNo: req.body.rollNo,
          dob: moment(req.body.dob,dateFormatString),
          contactNumber: req.body.contactNumber,
          email: req.body.email,
          place: req.body.place,
          age: req.body.age,
          gender: req.body.gender
      }).then(() => {
          res.json({
              success: true,
              message: "Student added successfully!"
            });
      }).catch(err => {
          res.status(500).json({
            success: false,
            message: "Error Message: " + err
          });
        });
  }
  
  exports.getSmsStudent = (req, res) => {
    smsStudentDet.findAll().then(message => {
    
      if (Object.keys(message).length !== 0) {
        res.status(200).send(message);
      }
      else {
        res.status(200).send({ statue: 204, message: "No Data Found" });
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving message."
      });
    });
  }
  
  exports.updateSmsStudent = (req, res) => {
    
    smsStudentDet.update(req.body, {
      where: { id: req.params.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Data was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update data with id=${id}. Maybe data was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating data with id=" + id
        });
      });
  };
  
  exports.deleteSmsStudent = (req, res) => {
    
    smsStudentDet.destroy({
      where: { id: req.params.id }
    })
      .then(lmsStud => {
        if (lmsStud == 1) {
          res.send({
            message: lmsStud.username + " was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Data with id=" + id
        });
      });
  };


  exports.login = (req, res) => {
	smsStudentDet.findOne({
		where: {
			username: req.body.username
		}
	}).then(stud => {
		if (!stud) {
			return res.status(200).send({ auth: false,status: 400, accessToken: null, reason: "Invalid Student Name!" });
		}
		/* var passwordIsValid = bcrypt.compareSync(req.body.password, stud.password);
		if (!passwordIsValid) {
			return res.status(200).send({ auth: false, status: 401, accessToken: null, reason: "Invalid Password!" });
		} */
		res.status(200).send({ 
      auth: true,
      status: 200,
      IsAdmin: stud.lmsrole === 1 ? true : false , 
      username:stud.username      
    });
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}