const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "konnect_db0"
});
const insertOne = (uname, unum) => {
    con.connect(function(err) {
        if (err) throw err;
        var sql = `INSERT INTO users (name, mobile_number) VALUES ('${uname}', '${unum}')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
}
const getdata = () => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM tests", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
}

module.exports = {insertOne, getdata}


//   // Check if the mobile number exists in the database
//   const findUserSql = 'SELECT * FROM users WHERE mobileNumber = ?';

//   // Execute the find user query
//   connection.query(findUserSql, [mobileNumber], (err, results) => {
//     if (err) {
//       console.error('Error finding user: ', err);
//       res.status(500).json({ error: 'Failed to find user' });
//     } else if (results.length > 0) {
//       // User exists, generate OTP and store in the user record
//       const user = results[0];
//       const otp = generateOTP();

//       // Update the user record with the generated OTP
//       const updateOtpSql = 'UPDATE users SET otp = ? WHERE mobileNumber = ?';

//       // Execute the update OTP query
//       connection.query(updateOtpSql, [otp, mobileNumber], (err) => {
//         if (err) {
//           console.error('Error updating OTP: ', err);
//           res.status(500).json({ error: 'Failed to update OTP' });
//         } else {
//           // Send the OTP to the user
//           sendOTP(mobileNumber, otp)
//             .then(() => {
//               res.status(200).json({ message: 'OTP sent successfully' });
//             })
//             .catch((err) => {
//               console.error('Error sending OTP: ', err);
//               res.status(500).json({ error: 'Failed to send OTP' });
//             });
//         }
//       });
//     } else {
//       // User does not exist, insert the new user
//       const insertUserSql = 'INSERT INTO users (mobileNumber) VALUES (?)';

//       // Execute the insert user query
//       connection.query(insertUserSql, [mobileNumber], (err) => {
//         if (err) {
//           console.error('Error inserting user: ', err);
//           res.status(500).json({ error: 'Failed to insert user' });
//         } else {
//           // Generate OTP and store in the user record
//           const otp = generateOTP();
//           const updateOtpSql = 'UPDATE users SET otp = ? WHERE mobileNumber = ?';

//           // Execute the update OTP query
//           connection.query(updateOtpSql, [otp, mobileNumber], (err) => {
//             if (err) {
//               console.error('Error updating OTP: ', err);
//               res.status(500).json({ error: 'Failed to update OTP' });
//             } else {
//               // Send the OTP to the user
//               sendOTP(mobileNumber, otp)
//                 .then(() => {
//                   res.status(200).json({ message: 'OTP sent successfully' });
//                 })
//                 .catch((err) => {
//                   console.error('Error sending OTP: ', err);
//                   res.status(500).json({ error: 'Failed to send OTP' });
//                 });
//             }
//           });
//         }
//       });
//     }
//   });