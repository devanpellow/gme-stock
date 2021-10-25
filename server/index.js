const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: '1mb' }));

app.listen(port, () => console.log(`Listening on port ${port}`));

const options = {
  method: 'GET',
  url: 'https://realstonks.p.rapidapi.com/GME',
  headers: {
    'x-rapidapi-host': 'realstonks.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY,
  },
};

app.get('/gme_quote', (req, res) => {
  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch(function (error) {
      console.error(error);
    });
});
