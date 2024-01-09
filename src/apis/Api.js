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

export default { getAllProductTypes };
