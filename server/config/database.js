var mongoose = require('mongoose');

module.exports = ((url) => {
    mongoose.connect(url);

    mongoose.connection.on('connected',  () => {
        console.log('mongoose connected');
    })
})
