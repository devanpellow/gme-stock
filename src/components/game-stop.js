import { useState } from 'react';
const finnhub = require('finnhub');

export default function GameStop() {
  const [price, setPrice] = useState(0);

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
  const finnhubClient = new finnhub.DefaultApi();

  finnhubClient.quote('GME', (error, data, response) => {
    if (data) {
      setPrice(data.c);
    }
    console.log(response);
  });

  return (
    <div class="flex flex-col items-center">
      <h1 class="text-red-500 text-6xl font-black">GME</h1>
      <h1 class="text-white text-7xl md:text-9xl mt-10 md:mt-20">${price}</h1>
    </div>
  );
}
