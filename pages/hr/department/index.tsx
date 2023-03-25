import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartment } from "@/redux/action/hr/department";
import { SearchInput } from "@/components/searchInput";
import { Pagination } from "@/components/pagination";

const Department = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [entry, setEntry] = useState(10);
  const header = ["Departmen ID", "Department", "Action "];
  const { data } = useSelector((state: any) => state.departmentReducers);
  useEffect(() => {
    dispatch(getDepartment(search, page, entry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, entry]);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex w-screen font-display">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput handleSearchChange={handleSearchChange} />
          </div>
          <div>
            <button className="bg-purple-700 text-white py-2 px-4 rounded">
              + Add
            </button>
          </div>
        </div>

        <div className="py-3">
          <div className="sm:flex-1 sm:items-center sm:justify-start">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">{data.from}</span> to{" "}
              <span className="font-medium">{data.to}</span> of{" "}
              <span className="font-medium">{data.totalData}</span> results
            </p>
          </div>
        </div>

        <table className="w-full">
          <thead className=" bg-slate-100">
            <tr className="">
              {header.map((h, i) => (
                <th key={i} className=" py-2 px-4 text-left  ">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(data.department || []).map((department: any, i: number) => (
              <tr key={i} className="">
                <td className=" py-4 px-4 ">{department.id}</td>
                <td className=" py-4 px-4 ">{department.name}</td>
                <td className=" py-4 px-4 ">...</td>
              </tr>
            ))}
            <tr className="border-t">
              <td colSpan={3} className="px-4 py-4">
                <Pagination page={page} data={data} setPage={setPage} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
