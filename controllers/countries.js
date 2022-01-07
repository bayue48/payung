const axios = require("axios");
const status = require("../helpers/statusCode");

const getAll = async (_, res) => {
  try {
    const data = await axios.get(
      // `http://api.countrylayer.com/v2/all?access_key=${process.env.COUNTRY_LAYER_API_KEY}`
      // https://restcountries.eu/rest/v2/all
      `https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json`
    );
    console.log("data", data);
    let payload = data.data.map((val) => {
      for (const key in val) {
        if (key != "name" && key != "region" && key != "timezones") {
          delete val[key];
        }
      }
      return val;
    });
    res.status(status.code.success).json(status.success(payload));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = { getAll };
