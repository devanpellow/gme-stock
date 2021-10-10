import { useState } from 'react';
const finnhub = require('finnhub');

export default function GameStop() {
  const [price, setPrice] = useState(0);

  const socket = new WebSocket(
    `wss://ws.finnhub.io?token=` + process.env.REACT_APP_FINNHUB_API_KEY
  );

  // // Connection opened -> Subscribe
  // socket.addEventListener('open', function (event) {
  //   socket.send(JSON.stringify({ type: 'subscribe', symbol: 'GME' }));
  // });

  // // Listen for messages
  // socket.addEventListener('message', function (event) {
  //   if (event.data) {
  //     setPrice(event.data.p);
  //   }
  // });

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
  const finnhubClient = new finnhub.DefaultApi();

  finnhubClient.quote('GME', (error, data, response) => {
    if (data) {
      setPrice(data.c);
    }
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-red-500 text-6xl font-black">GME</h1>
      <h1 className="text-white text-7xl md:text-8xl mt-10 md:mt-20">${price}</h1>
    </div>
  );
}
