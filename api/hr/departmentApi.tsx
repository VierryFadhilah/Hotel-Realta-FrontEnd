import axios from "../config";

const getDepartment = (search: any, page: number, entry: number) => {
  return axios.get(
    `/hr/department?search=${search}&page=${page}&entry=${entry}`
  );
};

const departmentApi = {
  getDepartment,
};

export default departmentApi;
