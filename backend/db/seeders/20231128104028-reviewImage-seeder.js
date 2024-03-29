'use strict';

/** @type {import('sequelize-cli').Migration} */

const { ReviewImage } = require('../models');
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
    await ReviewImage.bulkCreate([
      {
        reviewId: 1,
        url: 'reviewImage1 url'
      },
      {
        reviewId: 2,
        url: 'reviewImage2 url'
      },
      {
        reviewId: 3,
        url: 'reviewImage3 url'
      },
      {
        reviewId: 4,
        url: 'reviewImage4 url'
      },
      {
        reviewId: 5,
        url: 'reviewImage5 url'
      },
      {
        reviewId: 6,
        url: 'reviewImage6 url'
      },
      {
        reviewId: 7,
        url: 'reviewImage7 url'
      },
      {
        reviewId: 8,
        url: 'reviewImage8 url'
      },
      {
        reviewId: 9,
        url: 'reviewImage9 url'
      },
      {
        reviewId: 10,
        url: 'reviewImage10 url'
      },
      {
        reviewId: 11,
        url: 'reviewImage11 url'
      },
      {
        reviewId: 12,
        url: 'reviewImage12 url'
      },

    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
    }, {});
  }
};
