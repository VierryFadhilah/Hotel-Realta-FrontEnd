import axios from "../config";

const getDepartment = (search: any, page: number, entry: number) => {
  return axios.get(
    `/hr/department?search=${search}&page=${page}&entry=${entry}`
  );
};

const createDepartment = (data: any) => {
  return axios.post(`/hr/department`, data);
};

const deleteDepartment = (id: number) => {
  return axios.delete(`/hr/department/${id}`);
};

const departmentApi = {
  getDepartment,
  createDepartment,
  deleteDepartment,
};

export default departmentApi;
