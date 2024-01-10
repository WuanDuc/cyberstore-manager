"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Label,
  Radio,
  Table,
  Tabs,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/saleProductCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { HiSearch } from "react-icons/hi";
import { Eye, File, FileText, Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";
import { BillCard } from "@/components/billProduct";
import AddressSelect from "@/components/address";
import { BillProductCard } from "@/components/billProductCard";
import api from "@/apis/Api";
import { useRouter } from "next/navigation";

export default function CreateBills() {
  const [salesProducts, setSaleProducts] = useState([
    {
      name: "Sample Product 1",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 2",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 3",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 4",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 5",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 6",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 7",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 8",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand 9",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 10",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 11",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 12",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 13",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 14",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      discount: 10,
      amount: 1,
    },
    {
      name: "Sample Product 15",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand 16",
      discount: 10,
      amount: 1,
    },
  ]);
  const [customerType, setCustomerType] = useState("old");
  const [shippingType, setShippingType] = useState("direct");
  const [addressType, setAddressType] = useState("old");
  const [recentProductList, setRecentProductList] = useState(salesProducts);
  const [productsInBill, setProductsInBill] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [activeBill, setActiveBill] = useState(0);
  const [recentCustomer, setRecentCustomer] = useState({});
  const [listCurrentBill, setListCurrentBill] = useState([
    {
      product: [
        {
          name: "Sample Product 13",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand",
          discount: 10,
          amount: 1,
        },
        {
          name: "Sample Product 14",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand",
          discount: 10,
          amount: 1,
        },
        {
          name: "Sample Product 15",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand 16",
          discount: 10,
          amount: 1,
        },
      ],
      customerInfo: {
        customerType: "",
        phone: "",
        name: "",
        gender: false,
      },
      discount: {
        id: "",
        percent: 0,
      },
      totalPrice: 54,
      finalPrice: 54,
    },
    {
      product: [
        {
          name: "Sample Product 10",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand",
          discount: 10,
          amount: 1,
        },
        {
          name: "Sample Product 12",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand",
          discount: 10,
          amount: 1,
        },
        {
          name: "Sample Product 11",
          src: "/sample.jpg",
          price: 19.99,
          brand: "Sample Brand 16",
          discount: 10,
          amount: 1,
        },
      ],
      customerInfo: {
        customerType: "",
        phone: "",
        name: "",
        gender: false,
      },
      discount: {
        id: "",
        percent: 0,
      },
      totalPrice: 54,
      finalPrice: 54,
    },
  ]);
  const [discounts, setDiscounts] = useState([]);
  const [customerInfos, setCustomers] = useState({});

  const handleSearchName = (search) => {
    const normalizeText = (text) => text.toLowerCase();
    const searchProduct = salesProducts.filter((saleProduct, index) => {
      return (
        normalizeText(saleProduct.name).includes(normalizeText(search)) ||
        search == ""
      );
    });
    console.log(searchProduct);
    setRecentProductList(searchProduct);
  };

  const handleChange = (e) => {
    // setSearchName(e.target.value);
    handleSearchName(e.target.value);
  };

  const handleAddProductToBill = (product) => {
    let flag = true;
    listCurrentBill[activeBill].product.map((pd, index) => {
      if (pd.name == product.name) {
        flag = false;
        return;
      }
    });
    if (flag) {
      let temp = listCurrentBill[activeBill].product;
      temp.push(product);
      product.amount = 1;
      let temp2 = listCurrentBill;
      temp2[activeBill].totalPrice +=
        Math.ceil((product.price * (100 - product.discount)) / 100) *
        product.amount;
      temp2[activeBill].product = temp;
      setListCurrentBill(temp2);
      router.refresh();
    } else {
      alert("Sản phẩm này đã có trong hóa đơn");
    }
  };

  const createNewBill = () => {
    let temp = listCurrentBill;
    temp.push({
      product: [],
      customerInfo: {},
      totalPrice: 0,
      finalPrice: 0,
      discount: { id: "", percent: 0 },
    });
    alert("Tạo hóa đơn mới thành công");
    setListCurrentBill(temp);
    router.refresh();
  };

  const deleteProductFromBill = (value) => {
    let temp = listCurrentBill[activeBill].product.filter((product, index) => {
      if (product.name !== value) return true;
    });
    let temp2 = listCurrentBill;
    temp2[activeBill].product = temp;
    setListCurrentBill(temp2);
  };

  const handleEnterTel = (e) => {
    if (e.key === "Enter") {
      // alert(e.target.value);
      // document.getElementById("nameOld").value = "Cúc iu";
    }
  };

  const handleEnterCustomerName = (e) => {
    if (e.key === "Enter") {
      alert(e.target.value);
    }
  };

  const getDiscounts = async () => {
    const temp = await api.getAllDiscounts();
    setDiscounts(temp);
  };

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [listCurrentBill]);

  useEffect(() => {
    getDiscounts();
  }, []);

  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 h-screen w-screen">
        <div className="flex-col">
          <div className=" flex-row pt-5">
            <div
              style={{
                flexDirection: "column",
              }}
            >
              <label className=" font-semibold text-2xl text-black pl-4">
                Lập hóa đơn
              </label>
              <Button
                style={{
                  borderRadius: 20,
                  backgroundColor: "#0156FF",
                  paddingLeft: 5,
                  paddingRight: 5,
                  position: "absolute",
                  left: 1000,
                  top: 15,
                }}
                onClick={createNewBill}
              >
                <FileText style={{ marginRight: 3 }} />
                Tạo hóa đơn mới
              </Button>
            </div>

            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
              onActiveTabChange={(tab) => setActiveBill(tab)}
            >
              {listCurrentBill.map((bill, index) => {
                return (
                  <Tabs.Item
                    active
                    title={"Hóa đơn " + (index + 1)}
                    key={index}
                  >
                    <div className="flex flex-row h-screen">
                      <div
                        className="basis-4/12 overflow-y-scroll pt-5 border border-cyan-950 rounded-2xl mr-4"
                        style={{ backgroundColor: "#7AB8BF" }}
                      >
                        {/* <label className=" font-semibold text-2xl text-black pl-4 pt-24">
                          Lập hóa đơn
                        </label> */}
                        <div className="h-12 w-full">
                          <TextInput
                            className="w-11/12 pl-4"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 20,
                              color: "black",
                              width: "100%",
                            }}
                            onChange={handleChange}
                            id="name"
                            name="name"
                            type="Search"
                            rightIcon={HiSearch}
                            placeholder={index.toString()}
                            required
                          />
                        </div>
                        {recentProductList.map((saleProduct, index) => {
                          if (
                            index % 2 == 0 &&
                            recentProductList[index] !== undefined
                          ) {
                            return (
                              <div key={index} className="flex flex-row mt-4">
                                <div className="w-4"></div>
                                <BillProductCard
                                  product={saleProduct}
                                  title={"Thêm sản phẩm"}
                                  onClick={handleAddProductToBill}
                                  index={index}
                                ></BillProductCard>
                                {recentProductList[index + 1] !== undefined ? (
                                  <div className="ml-4">
                                    <BillProductCard
                                      product={recentProductList[index + 1]}
                                      title={"Thêm sản phẩm"}
                                      onClick={handleAddProductToBill}
                                      index={index}
                                    ></BillProductCard>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            );
                          }
                        })}
                      </div>
                      <div
                        id="productBill"
                        className="basis-3/12 pt-5 h-500 pl-2 pr-2 border border-cyan-950 rounded-2xl mr-4"
                        style={{ backgroundColor: "#7AB8BF" }}
                      >
                        <label className=" font-semibold text-2xl text-black pl-4 pt-24">
                          Sản phẩm đã chọn
                        </label>
                        <div
                          className="overflow-y-scroll h-4/6 mt-2"
                          style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                            // borderColor: "black",
                            // borderWidth: 2,
                            // borderRadius: 10,
                          }}
                        >
                          {bill.product.map((product, indexb) => {
                            return (
                              <div
                                key={indexb}
                                className="flex flex-row w-full mb-2 bg-gray-800"
                                style={{
                                  borderColor: "black",
                                  borderWidth: 2,
                                  borderRadius: 20,
                                  overflow: "hidden",
                                  // backgroundColor: "#F5F7FF",
                                }}
                              >
                                <img
                                  src="\sample.jpg"
                                  alt="product"
                                  style={{ width: 120, height: 120 }}
                                />

                                <div className="flex flex-col w-full justify-between">
                                  <label className="font-semibold text-s ml-1 text-wrap">
                                    {product.name}
                                  </label>
                                  <text className="ml-1 text-s">
                                    {"Đơn giá: " +
                                      Math.ceil(
                                        (product.price *
                                          (100 - product.discount)) /
                                          100
                                      )}
                                  </text>
                                  <div className="flex flex-row w-full">
                                    <text className="ml-1 text-s">
                                      {"Số lượng:  "}
                                    </text>
                                    <input
                                      type="number"
                                      id="numberOfProduct"
                                      onChange={(e) => {
                                        let tempproduct =
                                          listCurrentBill[activeBill].product;
                                        const i =
                                          tempproduct[indexb].amount -
                                          parseInt(e.target.value);
                                        tempproduct[indexb].amount = parseInt(
                                          e.target.value
                                        );
                                        let tempListBill = listCurrentBill;
                                        tempListBill[activeBill].product =
                                          tempproduct;
                                        tempListBill[activeBill].totalPrice +=
                                          Math.ceil(
                                            (product.price *
                                              (100 - product.discount)) /
                                              100
                                          ) * -i;
                                        setListCurrentBill(tempListBill);
                                        router.refresh();
                                      }}
                                      value={
                                        listCurrentBill[activeBill].product[
                                          indexb
                                        ]?.amount || 1
                                      }
                                      min={1}
                                      defaultValue={1}
                                      className="w-8 text-center ml-2 bg-gray-800"
                                      style={{
                                        borderColor: "#0156FF",
                                        borderWidth: 2,
                                        borderRadius: 5,
                                      }}
                                    />
                                    <Trash2
                                      className="ml-16"
                                      color="#F5F7FF"
                                      onClick={() => {
                                        let temp =
                                          listCurrentBill[activeBill].product;
                                        // console.log(product);
                                        temp.push(product);
                                        let temp2 = listCurrentBill;
                                        temp2[activeBill].totalPrice -=
                                          Math.ceil(
                                            (product.price *
                                              (100 - product.discount)) /
                                              100
                                          ) * product.amount;
                                        temp2[activeBill].product = temp;
                                        setListCurrentBill(temp2);
                                        deleteProductFromBill(product.name);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <text className="mt-5 font-semibold text-xl text-black">
                          {"Thành tiền: " +
                            listCurrentBill[activeBill].totalPrice}
                        </text>
                        <div
                          style={{
                            marginLeft: 250,
                            width: "100%",
                          }}
                        >
                          <Button
                            style={{
                              borderRadius: 15,
                              paddingLeft: 4,
                              paddingRight: 4,
                              backgroundColor: "#0156FF",
                            }}
                            onClick={() => {
                              if (listCurrentBill.length > 1) {
                                listCurrentBill.splice(activeBill, 1);
                                setActiveBill(0);
                              } else {
                                alert(
                                  "Không thể xóa hóa đơn duy nhất này! Vui lòng làm mới dữ liệu"
                                );
                              }
                            }}
                          >
                            Hủy thanh toán
                          </Button>
                        </div>
                      </div>
                      <div
                        id="customerInfo"
                        className="basis-3/12 flex flex-col justify-start pl-4 overflow-y-scroll pb-40 border border-cyan-950 rounded-2xl"
                        style={{ backgroundColor: "#7AB8BF" }}
                      >
                        <label className="font-semibold text-2xl text-black">
                          Thông tin chi tiết hóa đơn
                        </label>
                        {/* <label className="font-semibold text-lg text-black">
                          Thông tin khách hàng
                        </label> */}
                        <fieldset className="flex max-w-md flex-col gap-1">
                          <legend className="font-semibold text-lg text-black">
                            Thông tin khách hàng
                          </legend>
                          <div className="flex items-center gap-1">
                            <Radio
                              id="oldCus"
                              name="cusType"
                              value="old"
                              defaultChecked
                              onClick={() => setCustomerType("old")}
                            />
                            <label
                              className="text-black"
                              htmlFor="united-state"
                            >
                              Khách hàng cũ
                            </label>
                          </div>
                          <div className="flex items-center gap-1">
                            <Radio
                              id="newCus"
                              name="cusType"
                              value="new"
                              onClick={() => setCustomerType("new")}
                            />
                            <label htmlFor="newCus" className="text-black">
                              Khách hàng mới
                            </label>
                          </div>
                        </fieldset>
                        <hr />
                        {customerType == "old" ? (
                          <div className="flex flex-col mt-1">
                            <label className="text-black">Số điện thoại</label>
                            <div>
                              <input
                                type="tel"
                                id="telOld"
                                onKeyDown={(e) => handleEnterTel(e)}
                                className="w-9/12 text-black border border-black rounded-xl mt-1"
                              />
                              <button></button>
                            </div>

                            <label className="text-black">Tên khách hàng</label>
                            <input
                              type="text"
                              id="nameOld"
                              onKeyDown={(e) => handleEnterCustomerName(e)}
                              className="w-9/12 text-black border border-black rounded-xl mt-1"
                            />
                            <hr className="mt-2" />
                            <label
                              htmlFor="discount"
                              className="font-bold text-lg text-black"
                            >
                              Mã giảm giá:
                            </label>
                            <select
                              name="discount"
                              id="discount"
                              className="w-9/12 text-black border border-black rounded-xl mt-1"
                            >
                              {discounts?.map((discount, index) => {
                                return (
                                  <option
                                    key={index}
                                    value={discount.id}
                                    className="w-9/12 text-black border border-black font-bold"
                                  >
                                    {discount.percent + " %"}
                                  </option>
                                );
                              })}
                            </select>
                            <fieldset className="flex max-w-md flex-col gap-1">
                              <legend className="font-bold text-lg text-black">
                                Vận chuyển
                              </legend>
                              <div className="flex items-center gap-1">
                                <Radio
                                  id="shippingType"
                                  name="shippingType"
                                  value="direct"
                                  defaultChecked
                                  onClick={() => setShippingType("direct")}
                                />
                                <label className="text-black" htmlFor="direct">
                                  Nhận trực tiếp
                                </label>
                              </div>
                              <div className="flex items-center gap-1">
                                <Radio
                                  id="shippingType"
                                  name="shippingType"
                                  value="shipping"
                                  onClick={() => setShippingType("shipping")}
                                />
                                <label
                                  htmlFor="shipping"
                                  className="text-black"
                                >
                                  Vận chuyển đến địa chỉ
                                </label>
                              </div>
                            </fieldset>
                            {shippingType == "shipping" ? (
                              <div>
                                <fieldset className="flex max-w-md flex-col gap-1">
                                  <legend className="font-bold text-lg text-black">
                                    Địa chỉ
                                  </legend>
                                  <div className="flex items-center gap-1">
                                    <Radio
                                      id="addressType"
                                      name="addressType"
                                      value="old"
                                      defaultChecked
                                      onClick={() => setAddressType("old")}
                                    />
                                    <label className="text-black" htmlFor="old">
                                      Địa chỉ mặc định
                                    </label>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Radio
                                      id="addressType"
                                      name="addressType"
                                      value="new"
                                      onClick={() => setAddressType("new")}
                                    />
                                    <label htmlFor="new" className="text-black">
                                      Khác
                                    </label>
                                  </div>
                                </fieldset>
                                {addressType == "old" ? (
                                  <AddressSelect />
                                ) : (
                                  <div>
                                    <AddressSelect />
                                    <AddressSelect />
                                  </div>
                                )}
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col mt-1">
                            <label className="text-black">Số điện thoại</label>
                            <div>
                              <input
                                type="tel"
                                className="w-9/12 text-black border border-black rounded-xl mt-1 px-2"
                              />
                              <button></button>
                            </div>

                            <label className="text-black">Tên khách hàng</label>
                            <input
                              type="text"
                              className="w-9/12 text-black border border-black rounded-xl mt-1 px-2"
                            />
                            <fieldset className="flex flex-row max-w-md gap-1">
                              <legend className="text-black">Giới tính</legend>
                              <div className="flex items-center gap-1">
                                <Radio
                                  id="gender"
                                  name="gender"
                                  value="male"
                                  defaultChecked
                                  // onClick={() => setCustomerType("male")}
                                />
                                <label className="text-black" htmlFor="male">
                                  Nam
                                </label>
                              </div>
                              <div className="flex items-center gap-1 ml-3">
                                <Radio
                                  id="gender"
                                  name="gender"
                                  value="female"
                                  // onClick={() => setCustomerType("new")}
                                />
                                <label htmlFor="female" className="text-black">
                                  Nữ
                                </label>
                              </div>
                            </fieldset>
                            <hr className="mt-2" />
                            <label
                              htmlFor="discount"
                              className="font-bold text-lg text-black"
                            >
                              Mã giảm giá:
                            </label>
                            <select
                              name="discount"
                              id="discount"
                              className="w-9/12 text-black border border-black rounded-xl mt-1"
                            >
                              {discounts?.map((discount, index) => {
                                return (
                                  <option
                                    key={index}
                                    value={discount.id}
                                    className="w-9/12 text-black border border-black font-bold"
                                  >
                                    {discount.percent + " %"}
                                  </option>
                                );
                              })}
                            </select>
                            <hr />
                            <fieldset className="flex max-w-md flex-col gap-1">
                              <legend className="font-bold text-lg text-black">
                                Vận chuyển
                              </legend>
                              <div className="flex items-center gap-1">
                                <Radio
                                  id="shippingType"
                                  name="shippingType"
                                  value="direct"
                                  defaultChecked
                                  onClick={() => setShippingType("direct")}
                                />
                                <label className="text-black" htmlFor="direct">
                                  Nhận trực tiếp
                                </label>
                              </div>
                              <div className="flex items-center gap-1">
                                <Radio
                                  id="shippingType"
                                  name="shippingType"
                                  value="shipping"
                                  onClick={() => setShippingType("shipping")}
                                />
                                <label
                                  htmlFor="shipping"
                                  className="text-black"
                                >
                                  Vận chuyển đến địa chỉ
                                </label>
                              </div>
                            </fieldset>
                            {shippingType == "shipping" ? (
                              <div>
                                <label className="text-black font-bold">
                                  Địa chỉ
                                </label>
                                <AddressSelect />
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        )}
                        <label className="font-bold text-lg text-black">
                          Thanh toán
                        </label>
                        <table className="text-black font-thin">
                          <th className="text-left">
                            <tr>Tổng giá sản phẩm:</tr>
                            <tr>Phí vận chuyển:</tr>
                            <tr>Giảm giá:</tr>
                            <tr className="text-lg">Tổng hóa đơn:</tr>
                          </th>
                          <th>
                            <tr>200</tr>
                            <tr>200</tr>
                            <tr className="mr-1">{-200}</tr>
                            <tr>200</tr>
                          </th>
                        </table>
                        <Button className="w-11/12 mt-3">Hoàn tất</Button>
                      </div>
                    </div>
                  </Tabs.Item>
                );
              })}

              {/* <Tabs.Item active title="Quản lý kho">
                <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96"
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="storageProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Quản lý sản phẩm bán">
                <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="saleProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </Tabs.Item> */}
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
{
  /* <div className="flex flex-row h-screen">
      <div className="basis-5/12 overflow-y-scroll pt-5">
        <label className=" font-semibold text-2xl text-black pl-4 pt-24">
          Lập hóa đơn
        </label>
        <div className="h-12 w-full pl-4 mt-3 pr-4">
          <TextInput
            className="w-full"
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              color: "black",
              width: "100%",
            }}
            onChange={handleChange}
            id="name"
            name="name"
            type="Search"
            rightIcon={HiSearch}
            placeholder="Search"
            required
          />
        </div>
        {recentProductList.map((saleProduct, index) => {
          if (index % 2 == 0 && recentProductList[index] !== undefined) {
            return (
              <div key={index} className="flex flex-row mt-4">
                <div className="w-4"></div>
                <ProductCard
                  product={saleProduct}
                  title={"Thêm sản phẩm"}
                  onClick={() => alert("click")}
                  index={index}
                ></ProductCard>
                {recentProductList[index + 1] !== undefined ? (
                  <div className="ml-4">
                    <ProductCard
                      product={recentProductList[index + 1]}
                      title={"Thêm sản phẩm"}
                      onClick={() => alert("click")}
                      index={index}
                    ></ProductCard>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          }
        })}
      </div>
      <div className="basis-4/12 bg-green-200 pt-5">
        <label className=" font-semibold text-2xl text-black pl-4 pt-24">
          Sản phẩm đã chọn
        </label>
        <div className="overflow-y-scroll h-5/6 bg-pink">
          <BillCard />
        </div>
      </div>
      <div className="basis-4/12 bg-gray-200"></div>
    </div> */
}
const customeRadioTheme: CustomFlowbiteTheme["radio"] = {
  root: {
    base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
  },
};
