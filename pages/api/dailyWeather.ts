// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  dailyForecast: {
    day: string;
    temperature: number;
    condition: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const conditions = ['sunny', 'rainy', 'cloudy'];
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const weather = daysOfWeek.map((day, i) => {
    return {
      day: day,
      temperature: Math.random() * 30,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    };
  });

  res.status(200).json({ dailyForecast: weather });
}
