const db = require("./db");

const Token = function(token){
    this.token_id = token.token_id;
    this.q_id = token.q_id;
    this.userr_id = token.userr_id;
} 

Token.delete = (userr_id,q_id) => {

    return new Promise((resolve,reject)=>{
     db.query(`DELETE FROM token WHERE userr_id = ${userr_id} AND q_id = ${q_id};`, (err, res) => {
       if (err) {
         reject(err)
         console.log("error: ", err);
       }
       resolve(true);
       
     });
   })
   
 };

 module.exports = Token;