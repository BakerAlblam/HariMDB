import { Star } from 'lucide-react';
import React from 'react';

type genre = {
  id: string;
  name: string;
};

const MovieOverview = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <div className="flex">
        <ul>
          <li className="flex">
            <Star size={'25'} />
            <span className="ml-1 mb-2 text-lg">
              {data?.vote_average.toString().substring(0, 3)}
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-1">
        <h1 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {data?.title}
        </h1>
        <div className="flex text-sm space-x-2">
          {data?.genres?.map((g: genre) => (
            <li
              key={g.id}
              className=" list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg"
            >
              {g.name}
            </li>
          ))}
          <p className=" list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg">
            TV Series{' '}
          </p>
        </div>
        <span>&quot;{data?.tagline}&quot;</span>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="">{data?.overview}</p>
        <p className="">Release Date: {data?.release_date} </p>
        <p className="">Runtime: {data?.runtime} minutes</p>
      </div>
    </div>
  );
};

export default MovieOverview;