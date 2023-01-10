// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  hourlyForecast: {
    time: string;
    temperature: number;
    condition: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const weather = [];
  const conditions = ['sunny', 'rainy', 'cloudy'];

  function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
  }

  for (let x = 0; x < 24; x++) {
    const hour = {
      time: addHours(x).toString(),
      temperature: Math.random() * 30,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    };
    weather.push(hour);
  }

  res.status(200).json({ hourlyForecast: weather });
}
