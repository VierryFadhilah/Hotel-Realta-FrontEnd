import React from "react";

export const ConfirmationDeleteDepartment = (props: any) => {
  return (
    <>
      <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
        Are you sure you want to delete{" "}
        <a className="text-[#7743DB]">{props.department}</a> city?
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={() => {
            props.handleDeleteDepartment(props.id);
          }}
          className="inline-flex w-full justify-center rounded-md bg-[#7743DB] px-7 py-2 text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          Save
        </button>
        <button
          onClick={props.handleClose}
          className="inline-flex w-full justify-center rounded-md border border-[#7743DB] px-4 py-2   shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </>
  );
};
