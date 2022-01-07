"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("employees", [
      {
        name: "John Doe",
        email: "example@example.com",
        Phone_number: "08123456789",
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Doe John",
        email: "example@example.org",
        Phone_number: "123456789",
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John",
        email: "example@example.net",
        Phone_number: "08123456789",
        company_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
