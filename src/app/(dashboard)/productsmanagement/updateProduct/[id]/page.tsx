"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Select, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/apis/Api"
import axios from "axios";

const ContainerRight = () => (
  <div className="h-1/4 w-1/4 p-4 mr-6">
    {/* Container chứa thông tin bên phải */}
    <div className="flex flex-col mt-5  items-center justify-center">
      <div className="flex items-center">
        <h2 className="text-base text-black font-bold mt-3 mr-3 text-center">
          Thêm ảnh máy *
        </h2>
        <button className="rounded-full bg-opacity-0 bg-gray-300 border text-gray-500 font-bold text-base border-gray-500  pt-1 pb-1 pl-4 pr-4 mt-4 ">
          Chọn file...
        </button>
      </div>
      <img
        src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        alt="Product Image"
        className="w-40 h-40 rounded mr-4"
      />
    </div>
  </div>
);

const UpdateProduct = ({params }) => {
  const {id } = params;
  const [product, setProduct] = useState({
    amount: "",
    companyId: "",
    companyName: "",
    detailedSpecification: [],
    goodsReceiptDetail: [],
    isAvailable: "",
    productId: "",
    productName: "",
    productType: "",
    productTypeId: "",
    warrantyPeriod: "",
  });
  const [laptopDetail, setLaptopDetail] = useState({
    CPU:"",
    RAM:"",
    banPhim:"",
    chip:"",
    congKetNoi:"",
    congXuatHinh:"",
    heDieuHanh:"",
    ketNoiKhongDay:"",
    kheM2:"",
    khoiLuong:"",
    kichThuoc:"",
    luuTru:"", 
    luuTruToiDa:"", 
    manHinh:"",
    mau:"", 
    nhuCau:"",
    pin:"",
    LED:"",
  });
  const [pcDetail, setPcDetail] = useState({
    mau:"",
    nhuCau:"",
    CPU:"",
    RAM:"",
    luuTru:"",
    heDieuHanh:"",
    chip:"",
    soCongLuuTruToiDa:"",
    congKetNoi:"",
    khePCIPCIe:"",
    congXuatHinh:"",
    ketNoiKhongDay:"",
    dauDocThe:"",
    khoiLuong:"",
    kichThuoc:"",
  });
  const [RAMDetail, setRAMDetail] = useState({
    loaiHang:"",
    mau:"",
    LED:"",
    nhuCau:"",
    dungLuong:"",
    theHe:"",
    bus:"",
    timing:"",
  });
  const [mouseDetail, setMouseDetail] = useState({
    mau:"",
    nhuCau:"",
    kieuKetNoi:"",
    LED:"",
    loaiKetNoi:"",
    dangCamBien:"",
    thoiGianPhanHoi:"",
    soNutBam:"",
    kieuPin:"",
    kichThuoc:"",
    khoiLuong:"",
    doPhanGiai:"",
  });
  var companys = [];
  const router = useRouter();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleLaptopChange = (e) => {
    setLaptopDetail({ ...laptopDetail, [e.target.name]: e.target.value });
    console.log(laptopDetail);
  };
  const handlePCChange = (e) => {
    setPcDetail({ ...pcDetail, [e.target.name]: e.target.value });
  };
  const handleRAMChange = (e) => {
    setRAMDetail({ ...RAMDetail, [e.target.name]: e.target.value });
  };
  const handleMouseChange = (e) => {
    setMouseDetail({ ...mouseDetail, [e.target.name]: e.target.value });
  };
  const handleAddProduct = async () => {
    const newProduct = product;
    await api.addProduct(newProduct);
    alert("Thêm thành công");
    router.push("/productsmanagement");
  };

  const handleUpdateProduct = async () => {
      await api.updateProduct(product, product.productId);
      alert("Cập nhật thành công");
      router.back();
  };
  const getProduct = async () => {
    console.log(id);
    const recentProduct = await api.getProductById(id);
    companys = await api.getAllCompany();
    console.log(companys);
    console.log(recentProduct);
    // document.getElementById("name").innerHTML = recentProduct.name || "";;
    setProduct(recentProduct);
    if (recentProduct.productType === "Laptop"){
      console.log(recentProduct.detailedSpecification[0]);
      setLaptopDetail({...recentProduct.detailedSpecification[0]});
    }
    if (recentProduct.productType === "PC"){
      console.log(recentProduct.detailedSpecification[0]);
      setPcDetail({...recentProduct.detailedSpecification[0]});
    }
    if (recentProduct.productType === "RAM"){
      console.log(recentProduct.detailedSpecification[0]);
      setRAMDetail({...recentProduct.detailedSpecification[0]});
    }
    if (recentProduct.productType === "Chuột"){
      console.log(recentProduct.detailedSpecification[0]);
      setMouseDetail({...recentProduct.detailedSpecification[0]});
    }
    else
      console.log("cant fetch");
  };

  useEffect(() => {
    if (id !== "add") {
      getProduct();
    }
  }, []);
  useEffect(()=>{
    console.log(laptopDetail);
  }, [laptopDetail])

  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 w-screen">
        <div className="flex-col h-screen overflow-y-auto">
          <h1 className="text-3xl text-black font-bold mb-10 ml-10 mt-10">
            Quản lý kho{" "}
            <span className="text-3xl text-black font-bold">
              {">"} {id == "add"} sản phẩm
            </span>
          </h1>

          <div className="flex">
            <div className=" w-2/4  p-4 ml-6 mr-6  overflow-y-auto">
      <h1 className="text-xl text-black font-bold mb-2">Thông tin về sản phẩm</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
      <h2 className="text-base text-black font-semibold mb-1 mt-4">
        Tên loại sản phẩm
      </h2>
      <input
      id="productName"
      name="productName"
      onChange={handleChange}
        defaultValue={product.productName}
        className=" text-black w-full h-10 border border-gray-300 rounded px-3"
      />
      <h2 className="text-base text-black font-semibold mb-1 mt-4">Hãng</h2>
      <input
            id="companyName"
            name="companyName"
            onChange={handleChange}
              defaultValue={product.companyName}
        type="text"
        className="w-full text-black h-10 border border-gray-300 rounded px-3"
      />
      <h2 className="text-base text-black font-semibold mb-1 mt-4">
        Mã loại sản phẩm
      </h2>
      <input
        id="productId"
        name="productId"
        onChange={handleChange}
        defaultValue={product.productId}
      
        type="text"
        className="w-full h-10 text-black border border-gray-300 rounded px-3"
      />
      <h2 className="text-base text-black font-semibold mb-1 mt-4">
        Thời gian bảo hành
      </h2>
      <input
        type="text"
        id="warrantyPeriod"
        name="warrantyPeriod"
        onChange={handleChange}
        defaultValue={product.warrantyPeriod}
        placeholder="Thời gian bảo hành(tháng)"
        className="w-full h-10 text-black border border-gray-300 rounded px-3"
      />
      <h2 className="text-base text-black font-semibold mb-1 mt-4">Số lượng</h2>
      <input
        type="text"
        id="amount"
        name="amount"
        onChange={handleChange}
        defaultValue={product.amount}

        className=" text-black w-full h-10 border border-gray-300 rounded px-3"
      />
    </div>
            <ContainerRight />
          </div>

          <div className=" w-4/4  p-4 ml-6 mr-6 mb-10 overflow-y-auto">
    {/* CHỌN LOẠI SẢN PHẨM */}
    <h2 className="text-base text-black font-semibold mb-1 mt-4">
      Loại sản phẩm
    </h2>
    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Máy tính:</h2>

      <input onChange={handleChange} value="Laptop" name="productType" checked={product.productType === "Laptop"?true:false} type="radio" className="form-radio text-blue-500 mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Laptop</h2>
      <input onChange={handleChange} value="PC" name="productType" checked={product.productType === "PC"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">PC</h2>
    </div>

    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Linh kiện:</h2>

      <input onChange={handleChange} value="Màn hình" name="productType" checked={product.productType === "Màn hình"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Màn hình</h2>
      <input onChange={handleChange} value="Ổ cứng" name="productType" checked={product.productType === "Ổ cứng"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Ổ cứng</h2>
      <input onChange={handleChange} value="Chip" name="productType" checked={product.productType === "Chip"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Chip</h2>
      <input onChange={handleChange} value="Tản nhiệt" name="productType" checked={product.productType === "Tản nhiệt"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Tản nhiệt</h2>
      <input onChange={handleChange} value="Mainboard" name="productType" checked={product.productType === "Mainboard"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Mainboard</h2>
      <input onChange={handleChange} value="RAM" name="productType" checked={product.productType === "RAM"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">RAM</h2>
    </div>
    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Phụ kiện:</h2>

      <input onChange={handleChange} value="Chuột" name="productType" checked={product.productType === "Chuột"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Chuột</h2>
      <input onChange={handleChange} value="Bàn phím" name="productType" checked={product.productType === "Bàn phím"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Bàn phím</h2>
      <input onChange={handleChange} value="Ghế gaming" name="productType" checked={product.productType === "Ghế gaming"?true:false} type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Ghế gaming</h2>
    </div>

    {/* HIỂN THỊ THÔNG TIN CHI TIẾT SẢN PHẨM */}
    <h2 className="text-base text-black font-semibold mb-1 mt-12">
      Thông tin chi tiết
    </h2>

    {/* THÔNG TIN UPDATE PC */}
    <div className="flex " style={{display: product.productType === "PC"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu sắc
            </h2>
          </div>
          <select name="mau" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Đỏ">Đỏ</option>
            <option value="Đen">Đen</option>
            <option value="Trắng">Trắng</option>
            <option value="Hông">Hồng</option>
            <option value="Xanh">Xanh</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select name="nhuCau" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Chơi game">Chơi game</option>
            <option value="Văn phòng">Văn phòng</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              CPU
            </h2>
          </div>
          <select name="CPU" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
              <option value="Intel Core i3">Intel Core i3</option>
              <option value="Intel Core i5">Intel Core i5</option>
              <option value="Intel Core i7">Intel Core i7</option>
              <option value="AMD Ryzen 5">AMD Ryzen 5</option>
              <option value="AMD Ryzen 7">AMD Ryzen 7</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              RAM
            </h2>
          </div>
          <select name="RAM" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="8GB DDR4 2400MHz">8GB DDR4 2400MHz</option>
            <option value="16GB DDR4 2666MHz">16GB DDR4 2666MHz</option>
            <option value="32GB DDR4 3200MHz">32GB DDR4 3200MHz</option>                   {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu trữ
            </h2>
          </div>
          <select name="luuTru" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Hệ điều hành
            </h2>
          </div>
          <select name="heDieuHanh" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chip đồ họa
            </h2>
          </div>
          <select name="chip" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số cổng lưu trữ tối đa
            </h2>
          </div>
          <select name="soCongLuuTruToiDa" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng xuất hình
            </h2>
          </div>
          <select name="congXuatHinh" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khe PCI/PCIe
            </h2>
          </div>
          <select name="khePCIPCIe" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng kết nối
            </h2>
          </div>
          <select name="congKetNoi" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối không dây
            </h2>
          </div>
          <select name="ketNoiKhongDay" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Đầu đọc thẻ
            </h2>
          </div>
          <select name="dauDocThe" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng
            </h2>
          </div>
          <select name="khoiLuong" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select name="kichThuoc" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE Laptop */}
    <div className="flex " style={{display: product.productType === "Laptop"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu sắc
            </h2>
          </div>
          <select name="mau" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Đen">Đen</option>
            <option value="Bạc">Bạc</option>
            <option value="Hồng">Hồng</option>
            <option value="Xanh">Xanh</option>      
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màn hình
            </h2>
          </div>
          <select name="manHinh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Full HD (1920 x 1080)">{"Full HD (1920 x 1080)"}</option>
            <option value="4K UHD (3840 x 2160)">{"4K UHD (3840 x 2160)"}</option>     
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select name="nhuCau" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Văn phòng">Văn phòng</option>
            <option value="Gaming">Gaming</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              CPU
            </h2>
          </div>
          <select name="CPU" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Intel Core i3">Intel Core i3</option>
            <option value="Intel Core i5">Intel Core i5</option>
            <option value="Intel Core i7">Intel Core i7</option>
            <option value="AMD Ryzen 5">AMD Ryzen 5</option>
            <option value="AMD Ryzen 7">AMD Ryzen 7</option>   
           {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              RAM
            </h2>
          </div>
          <select name="RAM" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="8GB DDR4">8GB DDR4</option>
          <option value="16GB DDR4">16GB DDR4</option>
          <option value="32GB DDR4">32GB DDR4</option>
          <option value="64GB DDR4">64GB DDR4</option>   
           {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu trữ
            </h2>
          </div>
          <select name="luuTru" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="256GB SSD">256GB SSD</option>
            <option value="512GB SSD">512GB SSD</option>
            <option value="1TB HDD">1TB HDD</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Hệ điều hành
            </h2>
          </div>
          <select name="heDieuHanh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Windows 10 Home">Windows 10 Home</option>
            <option value="macOS Catalina">macOS Catalina</option>
            <option value="Linux">Linux</option>
            </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chip đồ họa
            </h2>
          </div>
          <select name="chip" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Integrated Graphics">Integrated Graphics</option>
          <option value="NVIDIA GeForce GTX 1650">NVIDIA GeForce GTX 1650</option>
          <option value="NVIDIA GeForce GTX 1660 Ti">NVIDIA GeForce GTX 1660 Ti</option>
          <option value="NVIDIA GeForce RTX 3050">NVIDIA GeForce RTX 3050</option>
          <option value="NVIDIA GeForce RTX 3060">NVIDIA GeForce RTX 3060</option>
          <option value="NVIDIA GeForce RTX 3070">NVIDIA GeForce RTX 3070</option>
          <option value="NVIDIA GeForce RTX 3080">NVIDIA GeForce RTX 3080</option>
          <option value="AMD Radeon RX 5500M">AMD Radeon RX 5500M</option>
          <option value="AMD Radeon RX 5600M">AMD Radeon RX 5600M</option>
          <option value="AMD Radeon RX 5700M">AMD Radeon RX 5700M</option>
          <option value="AMD Radeon RX 6700M">AMD Radeon RX 6700M</option>
          <option value="AMD Radeon RX 6800M">AMD Radeon RX 6800M</option>          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số cổng lưu trữ tối đa
            </h2>
          </div>
          <select name="soCongLuuTruToiDa" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="1 x M.2 NVMe">1 x M.2 NVMe</option>
            <option value="2 x M.2 NVMe">2 x M.2 NVMe</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng xuất hình
            </h2>
          </div>
          <select name="congXuatHinh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="HDMI">HDMI</option>
           <option value="DisplayPort">DisplayPort</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu khe M.2 hỗ trợ
            </h2>
          </div>
          <select name="khe2M" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="M.4 NVMe">M.4 NVMe</option>
            <option value="M.3 NVMe">M.3 NVMe</option>
            <option value="M.2 NVMe">M.2 NVMe</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bàn phím
            </h2>
          </div>
          <select name="banPhim" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Chiclet Keyboard">Chiclet Keyboard</option>
            <option value="Backlit Chiclet Keyboard">Backlit Chiclet Keyboard</option>
            <option value="Mechanical Keyboard">Mechanical Keyboard</option>          
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Pin
            </h2>
          </div>
          <select name="pin" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="4000mAh">4000mAh</option>
          <option value="6000mAh">6000mAh</option>
          <option value="8000mAh">8000mAh</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng kết nối
            </h2>
          </div>
          <select name="congKetNoi" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Wi-Fi 6">Wi-Fi 6</option>
          <option value="Bluetooth 5.0">Bluetooth 5.0</option>
          <option value="Thunderbolt 3">Thunderbolt 3</option>     
         {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối không dây
            </h2>
          </div>
          <select name="ketNoiKhongDay" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Bluetooth">Bluetooth</option>
  <option value="Wi-Fi">Wi-Fi</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng
            </h2>
          </div>
          <select name="khoiLuong" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="1.5 kg">1.5 kg</option>
          <option value="2.0 kg">2.0 kg</option>
          <option value="2.5 kg">2.5 kg</option>
              {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select name="kichThuoc" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="14 inches">14 inches</option>
          <option value="15 inches">15 inches</option>
          <option value="17 inches">17 inches</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Đèn LED
            </h2>
          </div>
          <select name="LED" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="RGB LED">RGB LED</option>
          <option value="Single-color LED">Single-color LED</option>
          <option value="No LED">No LED</option>
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE MÀN HÌNH */}
    <div className="flex " style={{display: product.productType === "Màn hình"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ phân giải
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tấm nền
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tần số quét
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian phản hồi
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu màn hình
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Công nghệ đồng bộ
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ sáng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Góc nhìn
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khả năng hiển thị màu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ tương phản tĩnh
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bề mặt
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              HDR
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng xuất hình
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Phụ kiện đi kèm
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE Ổ CỨNG */}
    <div className="flex " style={{display: product.productType === "Ổ cứng"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu ổ cứng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu sắc của ổ cứng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Dung lượng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              NAND
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tốc độ đọc
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tốc độ ghi
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Hỗ trợ HDH
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE CHIP */}
    <div className="flex " style={{display: product.productType === "Chip"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              CPU
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Socket
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số nhân xử lý
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số lượng xử lý
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tốc độ xử lý
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cache
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              TDP
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bộ nhớ hỗ trợ
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE TẢN NHIỆT */}
    <div className="flex " style={{display: product.productType === "Tản nhiệt"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Dạng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước quạt{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Socket{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chất liệu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>

      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước Radiator{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số vòng quay của bơm
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu lượng không khí{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ ồn{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE MAINBOARD */}
    <div className="flex " style={{display: product.productType === "Mainboard"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Socket{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số khe RAM
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu RAM hỗ trợ{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bộ nhớ tối đa{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bus RAM{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu trữ{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu khe M.2
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng xuất hình{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khe PCI{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số cổng USB{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LAN{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Âm thanh{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE RAM */}
    <div className="flex " style={{display: product.productType === "RAM"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Loại hàng{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu sắc
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Dung lượng{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thế hệ{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bus
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Timing
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE CHUỘT */}
    <div className="flex " style={{display: product.productType === "Chuột"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu kết nối
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Loại kết nối{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Dạng cảm biến{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian phản hồi{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số nút bấm
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu pin
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ phân giải{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE BÀN PHÍM */}
    <div className="flex " style={{display: product.productType === "Bàn phím"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Loại kết nối
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Loại bàn phím{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Phím chức năng{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tính năng đặc biệt
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>

    {/* THÔNG TIN UPDATE GHẾ GAMING */}
    <div className="flex " style={{display: product.productType === "Ghế gaming"? 'flex' :'none' }}>
      {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian bảo hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Tay vịn
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cover
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cơ chế
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chiều cao{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chất liệu{" "}
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>
  </div>
  {id == "add" ? (
                    <Button
                      className=" mt-20"
                      type="submit"
                      id="addSProduct"
                      onClick={handleAddProduct}
                    >
                      Thêm nhân viên
                    </Button>
                  ) : (
                    <Button
                      className=" mt-20"
                      type="submit"
                      id="updateProduct"
                      onClick={handleUpdateProduct}
                    >
                      Cập nhật
                    </Button>
                  )}
        </div>
      </div>
    </main>
  );
};

export default UpdateProduct;