const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const seedParts = require('./part-seeds');
const seedProductTag = require('./productTag-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force: false});
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    await seedProducts();
    console.log('--------------');
    await seedParts();
    console.log('--------------');
    await seedProductTag();
    console.log('--------------');

    process.exit(0);
};
seedAll();