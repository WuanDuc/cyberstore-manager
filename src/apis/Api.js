import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000/api",
});

const getAllCompany = async () => {
  try {
    const response = await client.get("/Company/getCompanys");
    if (response.data.success) {
      return response.data.companys;
    } else {
      console.log("not get product types");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const getAllProduct = async () => {
  try {
    const response = await client.get("/Product/getProduct");
    if (response.data.success) {
      return response.data.Products;
    } else {
      console.log("not get product ");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const addProduct = async (data) => {
  const endpoint = "/Product/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateProduct = async (data, id) => {
  const endpoint = "/Product/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteProduct = async (id) => {
  try {
    await client.delete("/Product/delete/" + id);
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const getProductById = async (id) => {
  const endpoint = "/Product/ProductById/" + id;
  try {
    const response = await client.get(endpoint);
    console.log("api");
    if (response.data.success) {
      return response.data.productById;
    } else {
      console.log("not get staff by id");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return {};
  }
};
const getAllSaleProduct = async () => {
  try {
    const response = await client.get("/SaleProduct/getSaleProduct");
    if (response.data.success) {
      return response.data.saleProducts;
    } else {
      console.log("not get product types");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const addSaleProduct = async (data) => {
  const endpoint = "/SaleProduct/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateSaleProduct = async (data, id) => {
  const endpoint = "/SaleProduct/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteSaleProduct = async (id) => {
  try {
    await client.delete("/SaleProduct/delete/" + id);
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const getSaleProductById = async (id) => {
  const endpoint = "/SaleProduct/saleProductById/" + id;
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
    const response = await client.get("/GoodsReceipt/getGoodsReceipts");
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

const getAllProduct = async () => {
  try {
    const response = await client.get("/Product/getProduct");
    if (response.data.success) {
      return response.data.Products;
    } else {
      console.log("not get product ");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const addProduct = async (data) => {
  const endpoint = "/Product/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateProduct = async (data, id) => {
  const endpoint = "/Product/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteProduct = async (id) => {
  try {
    await client.delete("/Product/delete/" + id);
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const getProductById = async (id) => {
  const endpoint = "/Product/ProductById/" + id;
  try {
    const response = await client.get(endpoint);
    console.log("api");
    if (response.data.success) {
      return response.data.productById;
    } else {
      console.log("not get staff by id");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return {};
  }
};
const getAllSaleProduct = async () => {
  try {
    const response = await client.get("/SaleProduct/getSaleProduct");
    if (response.data.success) {
      return response.data.saleProducts;
    } else {
      console.log("not get product types");
    }
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  }
};
const addSaleProduct = async (data) => {
  const endpoint = "/SaleProduct/add";
  try {
    const response = await client.post(endpoint, data);
    return response.data.docId;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const updateSaleProduct = async (data, id) => {
  const endpoint = "/SaleProduct/update/" + id;
  try {
    await client.put(endpoint, data);
  } catch (error) {
    console.error("error: ", error.message);
  }
};
const deleteSaleProduct = async (id) => {
  try {
    await client.delete("/SaleProduct/delete/" + id);
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const getSaleProductById = async (id) => {
  const endpoint = "/SaleProduct/saleProductById/" + id;
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
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllSaleProduct,
  getSaleProductById,
  addSaleProduct,
  updateSaleProduct,
  deleteSaleProduct,
  getAllCompany,
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
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllSaleProduct,
  getSaleProductById,
  addSaleProduct,
  updateSaleProduct,
  deleteSaleProduct,
};
