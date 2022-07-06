var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10
var jwt = require('jsonwebtoken');
const secret ='LoginPage'



app.use(cors())

var mysql = require('mysql2');
const { request } = require('express')
// create the connection to database

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
  });


app.post('/register',jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    connection.execute(
    'INSERT INTO user (username, password, firstname, lastname) VALUES (?, ?, ?, ?)',
    [req.body.username, hash, req.body.firstname, req.body.lastname],
    function(err, results, fields) {
       if(err){
        res.json({status: 'error', message: err})
        return
       } 
       res.json({status : 'ok'})
    }
  ); 
 });
})

    app.post('/login',jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM user WHERE username=?',
        [req.body.username],
        function(err, user, fields) {
           if(err){
            res.json({status:'error',message:err})
            return
            } 
           if(user.length == 0 ){res.json({status:'error',message:'not user found'}); 
           return
            }
            // Load hash from your password DB.
            bcrypt.compare(req.body.password, user[0].password, function(err, Islogin) {
            if(Islogin){
                var token = jwt.sign({ username: user[0].username }, secret,{expiresIn:'1h'});
                var username = user[0].username 
                var firstname = user[0].firstname
                res.json({status:'ok',message:'login success',token,username,firstname})
                }else{
                res.json({status:'ok',message:'login failed'})
            } });}); })

app.post('/authen',jsonParser, function (req, res, next) {
try {
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret);
    res.json({status: 'ok',decoded})
 }catch(err){
    res.json({status: 'error',message:err.message})
 }})
 



//  app.get('/read',jsonParser, function (req, res, next) {
//   try {
//       const token = req.headers.authorization.split(' ')[1]
//       var data = jwt.verify(token, secret);
//       res.json({status: 'ok',data,})
//    }catch(err){
//       res.json({status: 'error',message:err.message})
//    }}
   
//    )



// app.get("/read/:username", async (req, res, next) => {
//   const username = req.params.username;
//       connection.query("SELECT username, firstname, lastname FROM user WHERE username = ?", [username],
//           function(err, results){
//             res.json(results[0])
//           })
//       })





// app.put('/user',function(req, res, next){
//   connection.query(
//     'UPDATE `user`, SET `username`=?, `password`=?, `firstname`=?, `lastname`=? WHERE id = ?',
//     [req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.id],
//     function(err, results){
//         res.json(results);
//     }
//     );
// })








      // const multer = require("multer");

      // const handleError = (err, res) => {
      //   res
      //     .status(500)
      //     .contentType("text/plain")
      //     .end("Oops! Something went wrong!");
      // };
      
      // const upload = multer({
      //   dest: "/path/to/temporary/directory/to/store/uploaded/files"
      //   // you might also want to set some limits: https://github.com/expressjs/multer#limits
      // });
      
      
      // app.post(
      //   "/upload",
      //   upload.single("file" /* name attribute of <file> element in your form */),
      //   (req, res) => {
      //     const tempPath = req.file.path;
      //     const targetPath = path.join(__dirname, "./uploads/image.png");
      
      //     if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      //       fs.rename(tempPath, targetPath, err => {
      //         if (err) return handleError(err, res);
      
      //         res
      //           .status(200)
      //           .contentType("text/plain")
      //           .end("File uploaded!");
      //       });
      //     } else {
      //       fs.unlink(tempPath, err => {
      //         if (err) return handleError(err, res);
      
      //         res
      //           .status(403)
      //           .contentType("text/plain")
      //           .end("Only .png files are allowed!");
      //       });
      //     }
      //   }
      // );






app.listen(3333, jsonParser ,function () {
  console.log('CORS-enabled web server listening on port 3333')
})