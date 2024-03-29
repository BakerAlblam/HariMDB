import { Card } from '@nextui-org/react';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { options } from '@/app/layout';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { CardContent } from '../ui/card';

export default async function SimilarMovies({ data }: { data: any }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/similar?language=en-US&page=1`,
    options
  );

  const SimilarMovies = await response?.data?.results;

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {SimilarMovies?.map((m: any) => (
          <CarouselItem
            key={m.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/8 basis-1/2"
          >
            <Card
              className="w-full rounded-sm overflow-hidden"
              key={m?.id}
            >
              <div className="relative">
                <img
                  alt={m?.name || m?.title}
                  className="w-full h-auto rounded-none"
                  src={`https://image.tmdb.org/t/p/original${
                    m.poster_path || m?.profile_path
                  }`}
                  style={{
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <CardContent className="bg-white p-4">
                <Link href={`/movies/${m.id}`}>
                  <h3 className="text-lg text-left font-bold truncate">
                    {m?.title}
                  </h3>
                </Link>
                <div className="flex mt-1 space-x-2 text-sm text-gray-600">
                  <p>
                    {m?.release_date?.toString()?.substring(0, 4) ||
                      m?.first_air_date?.toString()?.substring(0, 4)}
                    •
                  </p>

                  <Star
                    size={20}
                    color="gold"
                  />
                  <p>
                    {' '}
                    {m?.vote_average &&
                      typeof m.vote_average === 'number' &&
                      m.vote_average.toFixed(1)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-block" />
      <CarouselNext className="hidden sm:inline-block" />
    </Carousel>
  );
}
