// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import cities from 'cities.json';

type Data = {
  country: string;
  name: string;
  lat: string;
  lng: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const searchTerm: string = req.query.searchTerm as string;
  const citiesData = JSON.parse(JSON.stringify(cities));
  res
    .status(200)
    .json(
      citiesData
        .filter((city: Data) =>
          city.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 20)
    );
}
