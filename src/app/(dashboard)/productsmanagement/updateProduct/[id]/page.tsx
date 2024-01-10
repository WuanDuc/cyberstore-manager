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
  const [companys, setCompanys] = useState([])
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
  const getProductDetail = (field) => {
    // Hãy đảm bảo rằng product có detailedSpecification và không rỗng
    if (product.detailedSpecification && product.detailedSpecification.length > 0) {
      const detail = product.detailedSpecification[0];
      console.log("abc: ", field, "def: ", detail[field]); // Chọn một đối tượng detailedSpecification nếu có nhiều hơn một
      return detail[field]|| ""; // Trả về giá trị của trường field hoặc giá trị mặc định ""
    }
    return "";
  }
  const [laptopDetail, setLaptopDetail] = useState({
    CPU:"Intel Core i3",
    RAM:"8GB DDR4",
    banPhim:"Chiclet Keyboard",
    chip:"Integrated Graphics",
    congKetNoi:"USB 2.0",
    congXuatHinh:"HDMI",
    heDieuHanh:"Window 10 Home",
    ketNoiKhongDay:"Bluetooth",
    kheM2:"M.4 NVMe",
    khoiLuong:"1.5 kg",
    kichThuoc:"14 inches",
    luuTru:"256GB SSD", 
    luuTruToiDa:"1 x M.2 NVMe", 
    manHinh:"Full HD (1920 x 1080)",
    mau:"Đen", 
    nhuCau:"Văn phòng",
    pin:"4000mAh",
    LED:"RGB LED",
  });
  const [pcDetail, setPcDetail] = useState({
    mau: "Đỏ", // hoặc thay bằng giá trị khác trong danh sách
    nhuCau: "Gaming",
    CPU: "Intel Core i5",
    RAM: "16GB DDR4",
    luuTru: "512GB SSD",
    heDieuHanh: "Windows 10 Home",
    chip: "NVIDIA GeForce GTX 1650",
    soCongLuuTruToiDa: "2 x M.2 NVMe",
    congKetNoi: "USB 3.0",
    khePCIPCIe: "PCIe 4.0",
    congXuatHinh: "HDMI",
    ketNoiKhongDay: "Bluetooth và Wi-Fi",
    dauDocThe: "SD Card Reader",
    khoiLuong: "2 kg đến 2.5 kg",
    kichThuoc: "15 inch",
  });
  const [RAMDetail, setRAMDetail] = useState({
    loaiHang:"Kingston",
    mau:"Đen",
    LED:"Có",
    nhuCau:"Gaming",
    dungLuong:"8GB",
    theHe:"DDR3",
    bus:"2400MHz",
    timing:"CL16",
  });
  const [mouseDetail, setMouseDetail] = useState({
    mau: "Đen",
    nhuCau: "Gaming",
    kieuKetNoi: "Dây",
    LED: "Có",
    loaiKetNoi: "Bluetooth",
    dangCamBien: "Quang học",
    thoiGianPhanHoi: "1ms",
    soNutBam: "2 nút",
    kieuPin: "AA",
    kichThuoc: "Nhỏ",
    khoiLuong: "Nhẹ",
    doPhanGiai: "1000 DPI",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleLaptopChange = (e) => {
    setLaptopDetail({ ...laptopDetail, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handlePCChange = (e) => {
    setPcDetail({ ...pcDetail, [e.target.name]: e.target.value });
    console.log(pcDetail);
  };
  const handleRAMChange = (e) => {
    setRAMDetail({ ...RAMDetail, [e.target.name]: e.target.value });
  };
  const handleMouseChange = (e) => {
    setMouseDetail({ ...mouseDetail, [e.target.name]: e.target.value });
  };
  const handleAddProduct = async () => {
    const newProduct = product;
    if (newProduct.productType === "Laptop"){
      newProduct.detailedSpecification.push(laptopDetail);
    }
    else    if (newProduct.productType === "PC"){
      newProduct.detailedSpecification.push(pcDetail);
    }
    else    if (newProduct.productType === "RAM"){
      newProduct.detailedSpecification.push(RAMDetail);
    }
    else    if (newProduct.productType === "Chuột"){
      newProduct.detailedSpecification.push(mouseDetail);
    }
    console.log(newProduct.detailedSpecification[0]);
    let Id = "";
    await api.addProduct(newProduct).then((docId) => {
      Id = docId;
    });
    newProduct.productId = Id;
    await api.updateProduct(newProduct, Id);
    console.log(newProduct);
    setProduct(newProduct);
    alert("Thêm thành công");
    router.push("/productsmanagement");
  };

  const handleUpdateProduct = async () => {
    const newProduct = product;
    if (newProduct.productType === "Laptop"){
      newProduct.detailedSpecification[0]=laptopDetail;
    }
    else    if (newProduct.productType === "PC"){
      newProduct.detailedSpecification[0]=pcDetail;
    }
    else    if (newProduct.productType === "RAM"){
      newProduct.detailedSpecification[0]=RAMDetail;
    }
    else    if (newProduct.productType === "Chuột"){
      newProduct.detailedSpecification[0]=mouseDetail;
    }
    console.log(newProduct.detailedSpecification[0]);

      await api.updateProduct(newProduct, product.productId);
      setProduct(newProduct);
      alert("Cập nhật thành công");
      router.back();
  };

  const getProduct = async () => {
    console.log(id);
    const recentProduct = await api.getProductById(id);
    const companysList = await api.getAllCompany();
    setCompanys(companysList);
    console.log(companys);
    console.log(recentProduct);
    // document.getElementById("name").innerHTML = recentProduct.name || "";;
    setProduct(recentProduct);
    if (recentProduct.productType === "Laptop"){
      setLaptopDetail({...recentProduct.detailedSpecification[0]});
    }
    else if (recentProduct.productType === "PC"){
      console.log(recentProduct.detailedSpecification[0]);
      setPcDetail({...recentProduct.detailedSpecification[0]});
    }
    else if (recentProduct.productType === "RAM"){
      console.log(recentProduct.detailedSpecification[0]);
      setRAMDetail({...recentProduct.detailedSpecification[0]});
    }
    else if (recentProduct.productType === "Chuột"){
      console.log(recentProduct.detailedSpecification[0]);
      setMouseDetail({...recentProduct.detailedSpecification[0]});
    }
    else
      console.log("cant fetch");
    console.log(recentProduct.productType);
  };

  useEffect(() => {
    if (id !== "add") {
      getProduct();
    }
  }, []);
  useEffect(()=>{
  }, [laptopDetail,pcDetail,RAMDetail,mouseDetail])
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
      <Select style={{backgroundColor: 'white', color: 'black'}} className=' my-1 w-60' id="city" >
        {companys.map((company: any) => (
          <option key={company.companyId} value={company.companyName}>
            {company.companyName}
          </option>
        ))}
        </Select> 
      <h2 className="text-base text-black font-semibold mb-1 mt-4">
        Thời gian bảo hành
      </h2>
      <input
        type="number"
        id="warrantyPeriod"
        name="warrantyPeriod"
        onChange={handleChange}
        defaultValue={product.warrantyPeriod}
        placeholder="Thời gian bảo hành(tháng)"
        className="w-full h-10 text-black border border-gray-300 rounded px-3"
      />
      <h2 className="text-base text-black font-semibold mb-1 mt-4">Số lượng</h2>
      <input
        type="number"
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
          <select name="mau" value={pcDetail.mau || "Đỏ"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="nhuCau" value={pcDetail.nhuCau || "Gaming"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="Gaming">Gaming</option>
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
          <select name="CPU" value={pcDetail.CPU || "Intel Core i3"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="RAM" value={pcDetail.RAM || "8GB DDR4"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="8GB DDR4">8GB DDR4</option>
          <option value="16GB DDR4">16GB DDR4</option>
          <option value="32GB DDR4">32GB DDR4</option>
          <option value="64GB DDR4">64GB DDR4</option> 
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu trữ
            </h2>
          </div>
          <select name="luuTru" value={pcDetail.luuTru || "256GB SSD"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="256GB SSD">256GB SSD</option>
          <option value="512GB SSD">512GB SSD</option>
          <option value="1TB HDD">1TB HDD</option>
            </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Hệ điều hành
            </h2>
          </div>
          <select name="heDieuHanh" value={pcDetail.heDieuHanh || "Windows 10 Home"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="chip"  value={pcDetail.chip || "NVIDIA GeForce GTX 1650"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
  <option value="AMD Radeon RX 6800M">AMD Radeon RX 6800M</option>
            </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số cổng lưu trữ tối đa
            </h2>
          </div>
          <select name="soCongLuuTruToiDa"  value={pcDetail.soCongLuuTruToiDa || "1 x M.2 NVMe"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="1 x M.2 NVMe">1 x M.2 NVMe</option>
            <option value="2 x M.2 NVMe">2 x M.2 NVMe</option>            {/* Add more options here */}
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
          <select name="congXuatHinh"  value={pcDetail.congXuatHinh ||"HDMI"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="HDMI">HDMI</option>
  <option value="DisplayPort">DisplayPort</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khe PCI/PCIe
            </h2>
          </div>
          <select name="khePCIPCIe"  value={pcDetail.khePCIPCIe || "PCI x4"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="PCI x1">PCI x1</option>
  <option value="PCI x4">PCI x4</option>
  <option value="PCI x8">PCI x8</option>
  <option value="PCI x16">PCI x16</option>
  <option value="PCI x32">PCI x32</option>
  <option value="PCIe 1.1">PCIe 1.1</option>
  <option value="PCIe 2.0">PCIe 2.0</option>
  <option value="PCIe 3.0">PCIe 3.0</option>
  <option value="PCIe 4.0">PCIe 4.0</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng kết nối
            </h2>
          </div>
          <select name="congKetNoi"  value={pcDetail.congKetNoi || "USB 3.0"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="USB 2.0">USB 2.0</option>
  <option value="USB 3.0">USB 3.0</option>
  <option value="USB 3.1">USB 3.1</option>
  <option value="USB 3.2">USB 3.2</option>
  <option value="USB Type-C">USB Type-C</option>
  <option value="Thunderbolt 3">Thunderbolt 3</option>
  <option value="Thunderbolt 4">Thunderbolt 4</option>
  <option value="HDMI">HDMI</option>
  <option value="DisplayPort">DisplayPort</option>
  <option value="VGA">VGA</option>
  <option value="Ethernet">Ethernet</option>
  <option value="Audio Jack">Audio Jack</option>
  <option value="Microphone Jack">Microphone Jack</option>
  <option value="SD Card Slot">SD Card Slot</option>            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối không dây
            </h2>
          </div>
          <select name="ketNoiKhongDay"  value={pcDetail.ketNoiKhongDay || "Bluetooth"} onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Bluetooth">Bluetooth</option>
  <option value="Wi-Fi">Wi-Fi</option>
  <option value="Bluetooth và Wi-Fi">Bluetooth và Wi-Fi</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Đầu đọc thẻ
            </h2>
          </div>
          <select  value={pcDetail.dauDocThe || "SD Card Reader"} name="dauDocThe" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="SD Card Reader">SD Card Reader</option>
  <option value="MicroSD Card Reader">MicroSD Card Reader</option>
  <option value="SDHC Card Reader">SDHC Card Reader</option>
  <option value="SDXC Card Reader">SDXC Card Reader</option>
  <option value="MMC Card Reader">MMC Card Reader</option>
  <option value="Memory Stick Card Reader">Memory Stick Card Reader</option>
  <option value="CompactFlash Card Reader">CompactFlash Card Reader</option>
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng
            </h2>
          </div>
          <select  value={pcDetail.khoiLuong || "Dưới 1 kg"} name="khoiLuong" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Dưới 1 kg">Dưới 1 kg</option>
  <option value="1 kg đến 1.5 kg">1 kg đến 1.5 kg</option>
  <option value="1.5 kg đến 2 kg">1.5 kg đến 2 kg</option>
  <option value="2 kg đến 2.5 kg">2 kg đến 2.5 kg</option>
  <option value="2.5 kg đến 3 kg">2.5 kg đến 3 kg</option>
  <option value="3 kg đến 3.5 kg">3 kg đến 3.5 kg</option>
  <option value="3.5 kg đến 4 kg">3.5 kg đến 4 kg</option>
  <option value="4 kg trở lên">4 kg trở lên</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select  value={pcDetail.kichThuoc || "Dưới 14 inch"} name="kichThuoc" onChange={handlePCChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Dưới 14 inch">Dưới 14 inch</option>
  <option value="14 inch">14 inch</option>
  <option value="15 inch">15 inch</option>
  <option value="17 inch">17 inch</option>
  <option value="Trên 17 inch">Trên 17 inch</option>            {/* Add more options here */}
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
          <select name="mau" value={laptopDetail.mau || "Đen"} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.manHinh} name="manHinh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="nhuCau" value={laptopDetail.nhuCau} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="CPU" value={laptopDetail.CPU} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="RAM" value={laptopDetail.RAM} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select name="luuTru" value={laptopDetail.luuTru} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.heDieuHanh} name="heDieuHanh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.chip} name="chip" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.luuTruToiDa} name="soCongLuuTruToiDa" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.congXuatHinh} name="congXuatHinh" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.kheM2} name="khe2M" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.banPhim} name="banPhim" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.pin} name="pin" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.congKetNoi} name="congKetNoi" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="USB 2.0">USB 2.0</option>
  <option value="USB 3.0">USB 3.0</option>
  <option value="USB 3.1">USB 3.1</option>
  <option value="USB 3.2">USB 3.2</option>
  <option value="USB Type-C">USB Type-C</option>
  <option value="Thunderbolt 3">Thunderbolt 3</option>
  <option value="Thunderbolt 4">Thunderbolt 4</option>
  <option value="HDMI">HDMI</option>
  <option value="DisplayPort">DisplayPort</option>
  <option value="VGA">VGA</option>
  <option value="Ethernet">Ethernet</option>
  <option value="Audio Jack">Audio Jack</option>
  <option value="Microphone Jack">Microphone Jack</option>
  <option value="SD Card Slot">SD Card Slot</option>
  <option value="Kensington Lock">Kensington Lock</option>
  <option value="RJ-45">RJ-45 (Ethernet)</option>
  <option value="Mini DisplayPort">Mini DisplayPort</option>
  <option value="Micro HDMI">Micro HDMI</option>         {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối không dây
            </h2>
          </div>
          <select name="ketNoiKhongDay" value={laptopDetail.ketNoiKhongDay} onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.khoiLuong} name="khoiLuong" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.khoiLuong} name="kichThuoc" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
          <select value={laptopDetail.LED} name="LED" onChange={handleLaptopChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
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
              Loại hàng
            </h2>
          </div>
          <select name="loaiHang" value={RAMDetail.loaiHang} onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Kingston">Kingston</option>
  <option value="Corsair">Corsair</option>
  <option value="G.Skill">G.Skill</option>
  <option value="Crucial">Crucial</option>
  <option value="ADATA">ADATA</option>
  <option value="TeamGroup">TeamGroup</option>
  <option value="HyperX">HyperX</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu sắc
            </h2>
          </div>
          <select  name="mau" value={RAMDetail.mau} onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Đen">Đen</option>
  <option value="Trắng">Trắng</option>
  <option value="Đỏ">Đỏ</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED
            </h2>
          </div>
          <select name="LED" value={RAMDetail.LED} onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Có">Có</option>
  <option value="Không">Không</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu{" "}
            </h2>
          </div>
          <select name="nhuCau" value={RAMDetail.nhuCau} onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Gaming">Gaming</option>
  <option value="Đồ họa">Đồ họa</option>
  <option value="Văn phòng">Văn phòng</option>            {/* Add more options here */}
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
          <select value={RAMDetail.dungLuong} name="dungLuong" onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="8GB">8GB</option>
  <option value="16GB">16GB</option>
  <option value="32GB">32GB</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thế hệ{" "}
            </h2>
          </div>
          <select value={RAMDetail.theHe} name="theHe" onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="DDR3">DDR3</option>
  <option value="DDR4">DDR4</option>
  <option value="DDR4X">DDR4X</option>
  <option value="DDR5">DDR5</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bus
            </h2>
          </div>
          <select value={RAMDetail.bus} name="bus" onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="2400MHz">2400MHz</option>
  <option value="3200MHz">3200MHz</option>
  <option value="3600MHz">3600MHz</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Timing
            </h2>
          </div>
          <select value={RAMDetail.timing} name="timing" onChange={handleRAMChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="CL16">CL16</option>
  <option value="CL18">CL18</option>
  <option value="CL22">CL22</option>            {/* Add more options here */}
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
          <select value={mouseDetail.mau} name="mau" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Đen">Đen</option>
  <option value="Trắng">Trắng</option>
  <option value="Đỏ">Đỏ</option>
  <option value="Xanh">Xanh</option>
  <option value="Vàng">Vàng</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Nhu cầu
            </h2>
          </div>
          <select value={mouseDetail.nhuCau} name="nhuCau" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Chơi game">Chơi game</option>
  <option value="Đồ họa">Đồ họa</option>
  <option value="Văn phòng">Văn phòng</option>
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu kết nối
            </h2>
          </div>
          <select value={mouseDetail.kieuKetNoi} name="kieuKetNoi" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Dây">Dây</option>
  <option value="Không dây">Không dây</option>
  <option value="Bluetooth">Bluetooth</option>
  <option value="USB">USB</option>
  <option value="Cổng Lightning">Cổng Lightning</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              LED
            </h2>
          </div>
          <select value={mouseDetail.LED} name="LED" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Có">Có</option>
  <option value="Không">Không</option>
  <option value="RGB">RGB</option>
  <option value="Đơn sắc">Đơn sắc</option>
  <option value="LED đa dạng">LED đa dạng</option>          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Loại kết nối{" "}
            </h2>
          </div>
          <select value={mouseDetail.loaiKetNoi} name="loaiKetNoi" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Bluetooth">Bluetooth</option>
  <option value="USB">USB</option>
  <option value="Cổng Lightning">Cổng Lightning</option>
  <option value="Wireless">Wireless</option>
  <option value="Infrared">Infrared</option>          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Dạng cảm biến{" "}
            </h2>
          </div>
          <select value={mouseDetail.dangCamBien} name="dangCamBien" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Quang học">Quang học</option>
  <option value="Laser">Laser</option>
  <option value="Cảm biến quang học + Laser">Cảm biến quang học + Laser</option>
  <option value="Cảm biến quang học đa chiều">Cảm biến quang học đa chiều</option>
  <option value="Cảm biến cảm ứng">Cảm biến cảm ứng</option>          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Thời gian phản hồi{" "}
            </h2>
          </div>
          <select value={mouseDetail.thoiGianPhanHoi} name="thoiGianPhanHoi" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="1ms">1ms</option>
  <option value="2ms">2ms</option>
  <option value="4ms">4ms</option>
  <option value="6ms">6ms</option>
  <option value="8ms">8ms</option>            {/* Add more options here */}
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
          <select value={mouseDetail.soNutBam} name="soNutBam" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="2 nút">2 nút</option>
  <option value="3 nút">3 nút</option>
  <option value="4 nút">4 nút</option>
  <option value="5 nút">5 nút</option>
  <option value="Nhiều nút">Nhiều nút</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu pin
            </h2>
          </div>
          <select value={mouseDetail.kieuPin} name="kieuPin" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="AA">AA</option>
  <option value="AAA">AAA</option>
  <option value="Lithium-ion">Lithium-ion</option>
  <option value="Nút cell">Nút cell</option>
  <option value="Khác">Khác</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước{" "}
            </h2>
          </div>
          <select value={mouseDetail.kichThuoc} name="kichThuoc" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Nhỏ">Nhỏ</option>
  <option value="Vừa">Vừa</option>
  <option value="Lớn">Lớn</option>
  <option value="Ergonomic">Ergonomic</option>
  <option value="Ambidextrous">Ambidextrous</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng{" "}
            </h2>
          </div>
          <select value={mouseDetail.khoiLuong} name="khoiLuong" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="Nhẹ">Nhẹ</option>
  <option value="Trung bình">Trung bình</option>
  <option value="Nặng">Nặng</option>            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Độ phân giải{" "}
            </h2>
          </div>
          <select value={mouseDetail.doPhanGiai} name="doPhanGiai" onChange={handleMouseChange} className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
          <option value="1000 DPI">1000 DPI</option>
  <option value="2000 DPI">2000 DPI</option>
  <option value="4000 DPI">4000 DPI</option>
  <option value="8000 DPI">8000 DPI</option>
  <option value="16000 DPI">16000 DPI</option>          </select>
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
  <div className=" flex items-center justify-center w-10/12 mb-5">
  {id == "add" ? (
                    <Button
                      className=" mt-3 w-44"
                      type="submit"
                      id="addSProduct"
                      onClick={handleAddProduct}
                    >
                      Thêm sản phẩm
                    </Button>
                  ) : (
                    <Button
                      className=" mt-3  w-44"
                      type="submit"
                      id="updateProduct"
                      onClick={handleUpdateProduct}
                    >
                      Cập nhật
                    </Button>
                  )}

  </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateProduct;