"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Tabs,
  Table,
  TextInput,
  Select,
} from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import {
  Circle,
  Edit,
  Eye,
  FileText,
  Gift,
  Monitor,
  PlusCircle,
  Trash2,
  X,
} from "react-feather";
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import api from "@/apis/Api";

const GoodReceipt = ({ params }) => {
  const [importedProducts, setImportedProducts] = useState([]);
  const [goodsReceipt, setGoodsReceipt] = useState({
    goodsReceiptId: "",
    entryDate: moment().format("YYYY-MM-DD").toString(),
    staffId: "",
    totalPrice: 0,
    importedProducts: [],
  });
  const [products, setProducts] = useState([]);
  const [recentImported, setRecentImported] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const getProducts = async () => {
    const temp = await api.getAllProduct();
    setProducts(temp);
  };

  const handleUpdateProduct = async (imported) => {
    const product = await api.getProductById(imported.productId);
    let list = products;
    list.map((listP) => {
      if (listP.productId == product.productId) {
        product.goodsReceiptDetail = imported;
        product.amount += imported.amount;
      }
    });
    await api.updateProduct(product, product.productId);
  };

  const { id } = params;

  const handleChange = (e) => {
    setRecentImported({
      ...recentImported,
      [e.target.name]: e.target.value,
    });
    console.log("name: ", e.target.name, " value: ", e.target.value);
  };

  const router = useRouter();

  const getGoodsReceipt = async () => {
    console.log("abc");
    const temp = await api.getGoodsReceiptById(id);
    setTotalPrice(temp.totalPrice);
    setImportedProducts(temp.importedProducts);
    setGoodsReceipt(temp);
  };

  const handleImportProduct = () => {
    const matchName = recentImported.productId != "";
    const matchPrice = recentImported.importedPrice > 0;
    const matchAmount = recentImported.amount > 0;
    const matchSup = recentImported.supplierName != "";
    let matchId = true;
    importedProducts.map((imported, index) => {
      if (imported.productId == recentImported.productId) {
        matchId = false;
      }
    });
    if (matchName && matchAmount && matchPrice && matchSup && matchId) {
      let temp = importedProducts;
      setTotalPrice(
        totalPrice + recentImported.amount * recentImported.importedPrice
      );
      temp.push(recentImported);
      console.log(recentImported);
      setImportedProducts(temp);
    } else {
      alert(
        "Vui lòng điền đầy đủ thông tin hoặc chọn loại sản phẩm chưa có trong phiếu nhập này"
      );
    }
  };

  const handleAddReceipt = async () => {
    if (importedProducts.length > 0) {
      let temp = goodsReceipt;
      temp.importedProducts = importedProducts;
      temp.totalPrice = totalPrice;
      importedProducts.map((imported, index) => {
        console.table(imported);
        handleUpdateProduct(imported);
      });
      let id = "";
      await api.addGoodsReceipt(temp).then((docId) => {
        id = docId;
      });
      temp.goodsReceiptId = id;

      await api.updateGoodsReceipt(temp, id);
      alert("Thêm phiếu nhập thành công");
      router.back();
    }
  };

  useEffect(() => {
    console.log(id);
    if (id !== "add") {
      getGoodsReceipt();
    } else {
      getProducts();
    }
  }, []);

  return (
    <div className="flex max-h-screen flex-col fill-white overflow-scroll">
      <div className="z-10 fill-white max-w-5xl w-full text-sm">
        <div className="flex-col top-0 w-screen h-px-500">
          <div className="flex-col">
            <div className="flex-row pt-8">
              {id == "add" ? (
                <label className=" font-bold text-2xl text-black p-7 pt-24">
                  {"Quản lý phiếu nhập > Thêm phiếu nhập"}
                </label>
              ) : (
                <label className=" font-bold text-2xl text-black p-7 pt-24">
                  {"Quản lý phiếu nhập > Xem chi tiết"}
                </label>
              )}
            </div>
            <div className="h-300 w-9/12 p-4 ml-6 mr-6 text-black">
              <h1 className="text-xl text-black font-bold mb-2">
                Thông tin phiếu nhập
              </h1>
              <div className="w-2/5 h-0.5 bg-gray-300 mb-8"></div>
              <h1 className="text-xl text-black font-bold mb-2">
                Sản phẩm nhập
              </h1>
              {id == "add" ? (
                <div>
                  <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
                  <div className="flex flex-row">
                    <div className="flex flex-col w-2/5">
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Tên sản phẩm <span className="text-red-700">*</span>
                      </h2>
                      <div className="flex flex-row">
                        <select
                          style={{ backgroundColor: "white", color: "black" }}
                          disabled={id !== "add"}
                          className="w-full h-10 border border-gray-300 rounded px-3"
                          id="productId"
                          name="productId"
                          value={recentImported.productId || ""}
                          onChange={handleChange}
                        >
                          {products?.map((product: any) => (
                            <option
                              key={product.productId}
                              value={product.productId}
                              id="tinh"
                            >
                              {product.productName}
                            </option>
                          ))}
                        </select>
                        <Button
                          style={{
                            width: 45,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 5,
                            backgroundColor: "#0156FF",
                          }}
                          disabled={id !== "add"}
                          onClick={() => {
                            router.push(
                              "/productsmanagement/updateProduct/add"
                            );
                            router.refresh();
                          }}
                        >
                          <PlusCircle />
                        </Button>
                      </div>
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Số lượng <span className="text-red-700">*</span>
                      </h2>
                      <input
                        type="number"
                        disabled={id !== "add"}
                        name="amount"
                        min={1}
                        defaultValue={1}
                        onChange={handleChange}
                        className="w-full h-10 border border-gray-300 rounded px-3"
                      />
                    </div>
                    <div className="w-1/5"></div>
                    <div className="flex flex-col w-2/5">
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Tên nhà cung cấp
                      </h2>
                      <input
                        type="text"
                        name="supplierName"
                        value={recentImported?.supplierName}
                        onChange={handleChange}
                        disabled={id !== "add"}
                        className="w-full h-10 border border-gray-300 rounded px-3"
                      />
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Đơn giá <span className="text-red-700">*</span>
                      </h2>
                      <input
                        type="number"
                        min={0}
                        defaultValue={0}
                        name="importedPrice"
                        value={recentImported.importedPrice}
                        onChange={handleChange}
                        disabled={id !== "add"}
                        className="w-full h-10 border border-gray-300 rounded px-3"
                      />
                    </div>
                  </div>
                  <h1 className="text-xl text-black font-bold mb-1 mt-4">
                    {"Thành tiền: " +
                      new Intl.NumberFormat("en-DE").format(
                        (recentImported?.amount || 0) *
                          (recentImported?.importedPrice || 0)
                      )}
                  </h1>
                </div>
              ) : (
                <></>
              )}
              <div className="w-full h-0.5 bg-gray-300 mb-3"></div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-black font-bold mb-1 mt-1">
                  {"Tổng thành tiền: " +
                    new Intl.NumberFormat("en-DE").format(totalPrice)}
                </h1>
                {id == "add" ? (
                  <h1 className="text-xl text-black font-bold mb-1 mt-1">
                    {"Ngày nhập: " + moment().format("YYYY-MM-DD")}
                  </h1>
                ) : (
                  <span className="text-xl text-black font-bold mb-1 mt-1">
                    {"Ngày nhập: " + goodsReceipt.entryDate}
                  </span>
                )}
              </div>
              {id == "add" ? (
                <div className="flex flex-row">
                  <Button
                    style={{
                      backgroundColor: "#0156FF",
                      borderRadius: 30,
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 40,
                    }}
                    onClick={handleImportProduct}
                  >
                    Thêm sản phẩm
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#0156FF",
                      borderRadius: 20,
                      width: 60,
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 40,
                      marginLeft: 10,
                    }}
                    onClick={handleAddReceipt}
                  >
                    Lưu
                  </Button>
                </div>
              ) : (
                <></>
              )}
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
                  <Table.HeadCell>Mã sản phẩm</Table.HeadCell>
                  <Table.HeadCell>Tên nhà cung cấp</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>Đơn giá</Table.HeadCell>
                  <Table.HeadCell>Thành tiền</Table.HeadCell>
                  <Table.HeadCell hidden={id !== "add"}>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                {importedProducts?.map((importedProduct, index) => {
                  return (
                    <Table.Body className="divide-y bg-teal-200" key={index}>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-teal-200">
                        <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1/12 text-center">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell className="w-1/6">
                          {importedProduct.productId}
                        </Table.Cell>
                        <Table.Cell className="w-1/6">
                          {importedProduct.supplierName}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {importedProduct.amount}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {new Intl.NumberFormat("en-DE").format(
                            importedProduct.importedPrice
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {new Intl.NumberFormat("en-DE").format(
                            importedProduct.importedPrice *
                              importedProduct.amount
                          )}
                        </Table.Cell>
                        <Table.Cell
                          className="w-1/12 text-center"
                          hidden={id !== "add"}
                        >
                          <div style={{ flexDirection: "column" }}>
                            <button
                              onClick={() => {
                                const choice = window.confirm(
                                  "Bạn có chắc chắn muốn xóa?"
                                );
                                if (choice) {
                                  let temp = importedProducts;
                                  temp.splice(index, 1);
                                  setImportedProducts(temp);
                                  router.refresh();
                                }
                              }}
                              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                              disabled={id !== "add"}
                            >
                              <Trash2 color="green" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  );
                })}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodReceipt;
