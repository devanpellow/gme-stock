const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json({ limit: '1mb' }));

app.listen(port, () => console.log(`Listening on port ${port}`));

const options = {
  method: 'GET',
  url: 'https://twelve-data1.p.rapidapi.com/price',
  params: { symbol: 'GME', format: 'json', outputsize: '30' },
  headers: {
    'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
    'x-rapidapi-key': process.env.TWELVE_API_KEY,
  },
};

app.get('/gme_quote', (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      const price = response.data.price;
      res.send(price);
    })
    .catch(function (error) {
      console.error(error);
    });
});
