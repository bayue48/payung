"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("companies", [
      {
        company_name: "PT. John Doe",
        telephone_number: "08123456789",
        address: "Jl. Jalan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "PT. Doe John",
        telephone_number: "0123456789",
        address: "Jl. Hidup",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "PT. John",
        telephone_number: "0987654321",
        address: "Jl. Kota",
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
    return queryInterface.bulkDelete("companies", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
