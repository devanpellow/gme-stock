import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameStop() {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    console.log('TO THE MOON');
    axios
      .get('http://localhost:5000/gme_quote')
      .then((response) => {
        let price = response.data.toFixed(2);
        setPrice(price);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-red-500 text-6xl font-black">GME</h1>
      <h1 className="text-white text-7xl md:text-8xl mt-10 md:mt-20">
        ${price}
      </h1>
    </div>
  );
}
