import * as React from 'react';


export function ListLoading () {
  return (
    <div className="grid items-center h-16 px-4">
        <div role="status" className="max-w-sm animate-pulse px-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
    </div>
  );
}
