const logger = require('../util/logger.js');
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'pond18143',
    server: 'localhost',
    database: 'mvc'
};

var err = sql.connect(config)
if (err) console.log(err);

class request {
    //  2.1-2.2 ใส่ค่า Hashtag check english & upper case in mssql
    async Create(req) {
        var message
        var english = /^[A-Za-z]+$/;
        var hashtag = req.hashtag
        if(english.test(hashtag)){
        var request = new sql.Request();
        var command = `INSERT INTO twitteraccount
        (Hashtag)
        VALUES('${hashtag}')`;
               var result = await request.query(command);
        logger.debug(result);
        logger.debug(command);
        message ={
                status_Code: 200,
                status: "success",
                message: command.recordset
                }
        return [200, message];
        }
    }
}
module.exports = request