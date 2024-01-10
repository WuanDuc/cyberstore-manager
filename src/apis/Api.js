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

const getAllCustomers = async () => {
  try {
    const response = await client.get("/CustomerManagement/getCustomers");
    if (response.data.success) {
      return response.data.customers;
    } else {
      console.log("not get customers");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};

const addCustomer = async (data) => {
  const endpoint = "/CustomerManagement/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateCustomer = async (data, id) => {
  const endpoint = "/CustomerManagement/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteCustomer = async (id) => {
  try {
    await client.delete("/CustomerManagement/delete/" + id);
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

const getCustomerById = async (id) => {
  const endpoint = "/CustomerManagement/customerById/" + id;
  try {
    const response = await client.get(endpoint);
    if (response.data.success) {
      return response.data.customerById;
    } else {
      console.log("not get customer by id");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return {};
  }
};

const getAllDiscounts = async () => {
  try {
    const response = await client.get("/DiscountManagement/getDiscounts");
    if (response.data.success) {
      return response.data.discounts;
    } else {
      console.log("not get discounts");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};

const addDiscount = async (data) => {
  const endpoint = "/DiscountManagement/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateDiscount = async (data, id) => {
  const endpoint = "/DiscountManagement/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteDiscount = async (id) => {
  try {
    await client.delete("/DiscountManagement/delete/" + id);
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

const getDiscountById = async (id) => {
  const endpoint = "/DiscountManagement/discountById/" + id;
  try {
    const response = await client.get(endpoint);
    if (response.data.success) {
      return response.data.discountById;
    } else {
      console.log("not get discount by id");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return {};
  }
};

const getAllGoodsReceipt = async () => {
  try {
    console.log("before");
    const response = await client.get("/GoodsReceipt/getGoodsReceipts");
    console.log("after");
    if (response.data.success) {
      return response.data.goodsReceipt;
    } else {
      console.log("not get GoodsReceipt");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};

const addGoodsReceipt = async (data) => {
  const endpoint = "/GoodsReceipt/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateGoodsReceipt = async (data, id) => {
  const endpoint = "/GoodsReceipt/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteGoodsReceipt = async (id) => {
  try {
    await client.delete("/GoodsReceipt/delete/" + id);
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

const getGoodsReceiptById = async (id) => {
  const endpoint = "/GoodsReceipt/goodsReceiptById/" + id;
  try {
    const response = await client.get(endpoint);
    if (response.data.success) {
      return response.data.goodsReceiptById;
    } else {
      console.log("not get GoodsReceipt by id");
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
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  addCustomer,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
  addDiscount,
  getAllGoodsReceipt,
  getGoodsReceiptById,
  addGoodsReceipt,
  updateGoodsReceipt,
  deleteGoodsReceipt,
};
