"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Table,
  Tabs,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { useEffect, useState } from "react";
import { SaleProductCard } from "@/components/saleProductCard";
import SearchInput from "@/components/searchinput";
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { Eye, File, FileText } from "react-feather";
import { useRouter } from "next/navigation";
import api from "@/apis/Api";
import { ProductCard } from "@/components/productCard";

const goodsReceipts = [
  {
    goodsReceiptsId: "PN001",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
  {
    goodsReceiptsId: "PN002",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
  {
    goodsReceiptsId: "PN003",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
];
const FilterContainer = () => (
  <div className="h-2/3 w-100 bg-gray-300 p-4 ml-4 mr-4 text-center">
    <h1 className="text-black font-bold">Filters</h1>
    <button className="rounded-full bg-opacity-0 bg-gray-300 border border-gray-500  pt-2 pb-2 pl-4 pr-4 mt-4 ">
      Xóa filter
    </button>

    <h2 className="text-black font-bold mt-4 mb-2">Danh mục</h2>
    <ul className="list-none p-0 m-0">
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
    </ul>

    <h2 className="text-black font-bold mt-4 mb-2">Giá</h2>
    <div className="flex justify-between">
      <div className="flex-col">
        <div>$0 -$1,000</div>
        <div>$1,000 -$2,000</div>
        <div>$2,000 -$3,000</div>
        <div>$3,000 -$4,000</div>
        <div>$4,000 -$5,000</div>
        <div>$5,000 -$6,000</div>
        <div>$6,000 -$7,000</div>
        <div>$7,000 And Above</div>
      </div>
      <div className="flex-col">
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
      </div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Loại</h2>
    <div className="flex">
      <div className="bg-green-500 rounded p-2 mr-2"></div>
      <div className="mx-2">Mới</div>
    </div>
    <div className="flex">
      <div className="bg-yellow-500 rounded p-2 mr-2 mt-2"></div>
      <div className="mx-2">Cũ</div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Màu</h2>
    <div className="flex">
      <div className="bg-red-500 rounded p-2 mr-2"></div>
      <div className="bg-yellow-500 rounded p-2 mr-2"></div>
      <div className="bg-gray-500 rounded p-2 mr-2"></div>
    </div>

    <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-4 pr-4 mt-8">
      Áp dụng filters
    </button>
  </div>
);

export default function ProductManagement() {
  const [salesProducts, setSaleProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const getSalesProduct = async () => {
    const temp = await api.getAllSaleProduct();
    console.log(temp);
    setSaleProducts(temp);
    setrecentSaleProductList(temp);
  };
  const [recentProductList, setrecentProductList] = useState(products);
  
  const getProduct = async () => {
    const temp = await api.getAllProduct();
    console.log(temp);
    setProducts(temp);
    setrecentProductList(temp);
  };
  const [recentSaleProductList, setrecentSaleProductList] = useState(salesProducts);

  const router = useRouter();
  const handleSearchName = (search) => {
    const normalizeText = (text) => text.toLowerCase();
    const searchProduct = salesProducts.filter((saleProduct, index) => {
      return (
        normalizeText(saleProduct.name).includes(normalizeText(search)) ||
        search == ""
      );
    });
    console.log(searchProduct);
    setrecentSaleProductList(searchProduct);
  };
  const handleSearchNameProduct = (search) => {
    const normalizeText = (text) => text.toLowerCase();
    const searchProduct = products.filter((product, index) => {
      return (
        normalizeText(product.productName).includes(normalizeText(search)) ||
        search == ""
      );
    });
    console.log(searchProduct);
    setrecentProductList(searchProduct);
  };
  const handleChange = (e) => {
    // setSearchName(e.target.value);
    handleSearchName(e.target.value);
    handleEnterCustomerName(e.target.value);
  };

  const handleEnterCustomerName = (e) => {
    if (e.key === "Enter") {
      alert(e.target.value);
    }
  };

  useEffect(()=>{
    getSalesProduct();
    getProduct();
  }, []);
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 w-screen h-screen overflow-y-scroll">
        <div className="flex-col">
          <div className=" flex-row pt-8">
            <label className=" font-semibold text-2xl text-black p-7 pt-24">
              Quản lý sản phẩm
            </label>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
              <Tabs.Item active title="Quản lý kho">
                <div
                  className="flex flex-row-reverse w-10/12"
                  style={{ height: 50 }}
                >
                  <Button
                    style={{
                      marginLeft: 4,
                      height: 45,
                      borderRadius: 20,
                      backgroundColor: "#0156FF",
                    }}
                    onClick={() =>
                      router.push("/productsmanagement/updateProduct/add")
                    }
                  >
                    <FileText /> Thêm loại sản phẩm
                  </Button>
                  <TextInput
                    style={{
                      width: 300,
                      backgroundColor: "white",
                      borderRadius: 20,
                      color: "black",
                    }}
                    id="email4"
                    type="Search"
                    rightIcon={HiSearch}
                    placeholder="Search"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex overflow-y-scroll">
                  <FilterContainer />
                  <div className="grid grid-cols-5">
                    {recentProductList.map((product, index) => {
                      console.log(product);
                      return (
                        <div key={index} className="flex flex-row mt-4">
                          <div className="w-4"></div>
                          <ProductCard
                            product={product}
                            title={"Chỉnh sửa"}
                            onClick={console.log("ok")}
                            index={index}
                          ></ProductCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Tabs.Item>

              <Tabs.Item title="Sản phẩm bán">
                <div
                  className="flex flex-row-reverse w-10/12"
                  style={{ height: 50 }}
                >
                  <Button
                    style={{
                      marginLeft: 4,
                      height: 45,
                      borderRadius: 20,
                      backgroundColor: "#0156FF",
                    }}
                    onClick={() =>
                      router.push("/productsmanagement/addSaleProduct")
                    }
                  >
                    <FileText /> Thêm sản phẩm mới
                  </Button>
                  <TextInput
                    style={{
                      width: 300,
                      backgroundColor: "white",
                      borderRadius: 20,
                      color: "black",
                    }}
                    id="email4"
                    type="Search"
                    rightIcon={HiSearch}
                    placeholder="Search"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex overflow-y-scroll">
                  <FilterContainer />
                  <div className="grid grid-cols-4">
                    {recentSaleProductList.map((saleProduct, index) => {
                      console.log(saleProduct);
                      console.log(index);
                      return (
                        <div key={index} className="flex flex-row mt-4">
                          <div className="w-4"></div>
                          <SaleProductCard
                            product={saleProduct}
                            title={"Chỉnh sửa"}
                            onClick={console.log("ok")}
                            index={index}
                          ></SaleProductCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Tabs.Item>

              <Tabs.Item title="Quản lý phiếu nhập">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-40 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                      }}
                      id="email4"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                  <div className=" flex fixed right-1 pr-1">
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                      onClick={() =>
                        router.push("/productsmanagement/goodsReceipt")
                      }
                    >
                      <File style={{ marginRight: 3 }} />
                      Thêm phiếu nhập
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    width: 1200,
                    alignSelf: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  <Table hoverable theme={THEME.tableTheme}>
                    <Table.Head>
                      <Table.HeadCell>STT</Table.HeadCell>
                      <Table.HeadCell>Mã phiếu nhập</Table.HeadCell>
                      <Table.HeadCell>Mã nhân viên</Table.HeadCell>
                      <Table.HeadCell>Ngày nhập</Table.HeadCell>
                      <Table.HeadCell>Thành tiền</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {goodsReceipts.map((goodsReceipt, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-100"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell>
                              {goodsReceipt.goodsReceiptsId}
                            </Table.Cell>
                            <Table.Cell>{goodsReceipt.staffId}</Table.Cell>
                            <Table.Cell>{goodsReceipt.entryDate}</Table.Cell>
                            <Table.Cell>{goodsReceipt.totalPrice}</Table.Cell>
                            <Table.Cell className="w-16">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    alert(goodsReceipt.goodsReceiptsId)
                                  }
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                  <Eye color="green" />
                                </button>
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      );
                    })}
                  </Table>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
