import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000/api",
});

const getAllProductTypes = async () => {
  try {
    const response = await client.get("/ProductType/getProductTypes");
    if (response.data.success) {
      return response.data.productTypes;
    } else {
      console.log("not get product types");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};

const getAllStaffs = async () => {
  try {
    const response = await client.get("/StaffManagement/getStaffs");
    if (response.data.success) {
      return response.data.staffs;
    } else {
      console.log("not get staffs");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const addStaff = async (data) => {
  const endpoint = "/StaffManagement/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateStaff = async (data, id) => {
  const endpoint = "/StaffManagement/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteStaff = async (id) => {
  try {
    await client.delete("/StaffManagement/delete/" + id);
  } catch (error) {
    console.log("error: ", error.message);
  }
};
// const getStaffsBySearch = async (searchCriteria) => {
//   try {
//     const queryParams = new URLSearchParams(searchCriteria).toString();
//     const response = await client.get(`/StaffManagement/Bills?${queryParams}`);

//     if (response.data.success) {
//       return response.data.bills;
//     } else {
//       console.log("not get bills");
//     }
//   } catch (error) {
//     console.log("error: ", error.message);
//     return [];
//   }
// };

const getStaffById = async (id) => {
  const endpoint = "/StaffManagement/staffById/" + id;
  try {
    const response = await client.get(endpoint);
    if (response.data.success) {
      return response.data.staffById;
    } else {
      console.log("not get staff by id");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return {};
  }
};

export default {
  getAllProductTypes,
  getAllStaffs,
  getStaffById,
  updateStaff,
  deleteStaff,
  addStaff,
};
