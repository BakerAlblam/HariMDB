import Link from 'next/link';
import React from 'react';

export default async function MovieBreadcrumb({ data }: { data: any }) {
  return (
    <nav
      className="flex px-5 py-3 text-gray-700  rounded-lg mb-4 w-1-/3"
      aria-label="Breadcrumb text-lg"
    >
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center font-medium text-gray-400 hover:text-slate-500 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              href="/movies"
              className="ms-1 font-medium text-gray-400 hover:text-gray-500 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Movies
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 truncate font-medium text-gray-200 md:ms-2 dark:text-gray-400">
              {data?.title || ''}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
