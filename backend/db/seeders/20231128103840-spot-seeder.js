'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Spot } = require('../models');
// const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: '16384 CT NE Seattle 98101',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States of America',
        lat: 23.6061,
        lng: 99.3328,
        name: "Happy Home",
        description: "Welcome to Happy Home, enjoy your time!",
        price: 325
      },
      {
        ownerId: 2,
        address: '1356 CT NE Bellevue 98004',
        city: 'Bellevue',
        state: 'Washington',
        country: 'United States of America',
        lat: 78.6101,
        lng: 150.2015,
        name: "Golden Holiday",
        description: "Welcome to Golden Holiday, enjoy your time!",
        price: 199
      },
      {
        ownerId: 3,
        address: '1999 CT NE Kirkland 98034',
        city: 'Kirkland',
        state: 'Washington',
        country: 'United States of America',
        lat: 51.6769,
        lng: 50.2060,
        name: "Gorgeous Hotel",
        description: "Welcome to Gorgeous Hotel, enjoy your time!",
        price: 188
      },
      {
        ownerId: 4,
        address: '2888 CT NE Redmond 98052',
        city: 'Redmond',
        state: 'Washington',
        country: 'United States of America',
        lat: 37.6740,
        lng: 39.1215,
        name: "Fantastic Castle",
        description: "Welcome to Fantastic Castle, enjoy your time!",
        price: 598
      }

    ], { validate: true });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Happy Home', 'Golden Holiday', 'Gorgeous Hotel', "Fantastic Castle"] }
    }, {});
  }
};
