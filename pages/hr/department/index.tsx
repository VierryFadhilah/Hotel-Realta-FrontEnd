import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDepartment, getDepartment } from "@/redux/action/hr/department";
import { SearchInput } from "@/components/searchInput";
import { Pagination } from "@/components/pagination";
import { Plus } from "@/components/icons/Plus";
import { Modal } from "@/components/modal";
import { Pencil } from "@/components/icons/pencil";
import { Trash } from "@/components/icons/trash";
import { FormDepartment } from "@/components/hr/formDepartment";
import { ConfirmationDeleteDepartment } from "@/components/hr/confirmationDeleteDepartment";

interface IDepartement {
  id: number;
  name: string;
}

const Department = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [entry, setEntry] = useState(10);
  const [isOpen, setIsOpen] = useState({
    department: "",
    id: 0,
    isShow: false,
  });
  const [isDelete, setIsDelete] = useState({
    department: "",
    id: 0,
    isShow: false,
  });
  const header = ["Departmen ID", "Department"];
  const { data, refresh } = useSelector(
    (state: any) => state.departmentReducers
  );
  const dispatch = useDispatch();

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value);
  };
  const closeDeleteModal = (): void => {
    setIsDelete((prev: any) => {
      return { ...prev, isShow: false };
    });
  };
  const handleDeleteDepartment = (id: number) => {
    closeDeleteModal();
    dispatch(deleteDepartment(id));
  };
  useEffect(() => {
    dispatch(getDepartment(search, page, entry));
  }, [search, page, entry, refresh, isOpen, dispatch, isDelete]);

  return (
    <div className="flex w-full font-display">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput handleSearchChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                setIsOpen({ department: "", id: 0, isShow: true });
              }}
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded"
            >
              <Plus /> <p className="px-2">Add</p>
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

        <table className="w-full shadow-lg">
          <thead className=" bg-slate-100">
            <tr className="bg-[#F9FAFB] border">
              {(header || []).map((h, i) => (
                <th key={i} className=" py-2 px-4 text-left ">
                  {h}
                </th>
              ))}
              <th className=" py-2 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {(data.department || []).map(
              (department: IDepartement, i: number) => (
                <tr key={i} className="border">
                  <td className=" py-4 px-4 ">{department.id}</td>
                  <td className=" py-4 px-4 ">{department.name}</td>
                  <td className=" py-4 px-4  ">
                    <div className="flex justify-end">
                      <div
                        className="mx-2 cursor-pointer"
                        onClick={() => {
                          setIsDelete({
                            department: department.name,
                            id: department.id,
                            isShow: true,
                          });
                        }}
                      >
                        <Trash />
                      </div>
                      <div
                        className="mx-2 cursor-pointer"
                        onClick={() => {
                          setIsOpen({
                            department: department.name,
                            id: department.id,
                            isShow: true,
                          });
                        }}
                      >
                        <Pencil />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            )}
            <tr className="border-t">
              <td colSpan={3} className="px-4 py-4">
                <Pagination
                  pagination={{
                    totalPage: data.totalPage,
                    page: data.page,
                  }}
                  setPage={setPage}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isOpen.isShow ? (
        <Modal
          handleClose={() => {
            setIsOpen((prev) => {
              return { ...prev, isShow: false };
            });
          }}
          header={"Add Department"}
          body={
            <FormDepartment
              id={isOpen.id}
              department={isOpen.department}
              setIsOpen={setIsOpen}
            />
          }
        />
      ) : null}
      {isDelete.isShow ? (
        <Modal
          handleClose={() => {
            closeDeleteModal();
          }}
          header={"Delete Department"}
          body={
            <ConfirmationDeleteDepartment
              department={isDelete.department}
              handleDeleteDepartment={handleDeleteDepartment}
              id={isDelete.id}
              handleClose={() => {
                closeDeleteModal();
              }}
            />
          }
        />
      ) : null}
    </div>
  );
};

export default Department;
