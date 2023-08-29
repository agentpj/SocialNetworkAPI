const { connect, connection } = require('mongoose');

connect('mongodb+srv://texasadmin:root@cluster0.rsc7kij.mongodb.net/socialnetworkDB');

module.exports = connection;
