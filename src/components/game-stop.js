import { useState, useEffect } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://realstonks.p.rapidapi.com/GME',
  headers: {
    'x-rapidapi-host': 'realstonks.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  },
};

export default function GameStop() {
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log('TO THE MOON');
    setIsLoading(true);
    axios
      .request(options)
      .then((response) => {
        console.log(JSON.parse(response.data));
        let price = JSON.parse(response.data).price;
        setPrice(price);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [price]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-red-500 text-6xl font-black">GME</h1>
      {isLoading ? (
        <h1 className="text-7xl md:text-8xl mt-10 md:mt-20 animate-spin">
          💎
        </h1>
      ) : (
        <h1 className="text-white text-7xl md:text-8xl mt-10 md:mt-20">
          ${price}
        </h1>
      )}

      <h4 className="text-gray-500">USD</h4>
    </div>
  );
}
