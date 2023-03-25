import React from "react";

export const Pagination = (props: any) => {
  const itemList = [];
  for (let i = 0; i < props.data.totalPage; i++) {
    if (i + 1 === +props.data.page) {
      itemList.push(
        <a
          key={i}
          onClick={() => {}}
          aria-current="page"
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-purple-900 ring-1 ring-inset ring-purple-700  focus:z-20 focus:outline-offset-0  cursor-pointer"
        >
          {i + 1}
        </a>
      );
    } else {
      itemList.push(
        <a
          key={i}
          onClick={() => {
            props.setPage(i + 1);
          }}
          aria-current="page"
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
        >
          {i + 1}
        </a>
      );
    }
  }

  return (
    <div className="flex-1 flex justify-center">
      <a
        onClick={() => {
          if (props.page - 1 !== 0) {
            props.setPage(props.page - 1);
          }
        }}
        aria-current="page"
        className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
      >
        <svg
          className="h-3 w-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      {itemList}
      <a
        onClick={() => {
          if (props.page < props.data.totalPage) {
            props.setPage(props.page + 1);
          }
        }}
        aria-current="page"
        className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
      >
        <svg
          className="h-3 w-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};
