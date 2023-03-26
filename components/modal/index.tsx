import React from "react";
import { FormDepartment } from "../hr/formDepartment";

export const Modal = (props: any) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex justify-between border-b">
              <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 font-bold ">
                {props.header}
              </div>
              <div
                className="px-4 pt-5 pb-4 font-bold cursor-pointer"
                onClick={props.handleClose}
              >
                X
              </div>
            </div>

            {props.body}
          </div>
        </div>
      </div>
    </div>
  );
};
function dispatch(arg0: { type: string; payload: any }) {
  throw new Error("Function not implemented.");
}
