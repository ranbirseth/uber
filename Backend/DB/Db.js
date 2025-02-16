const mongoose = require('mongoose');
function ConnectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {console.log('Connected to MongoDB');})
        .catch(err => console.error('Could not connect to MongoDB', err));
}
module.exports = ConnectToDb;