"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/apis/Api";
import moment from "moment";
import { SHARE_FUNCTIONS } from "@/constant/function";

const DiscountEventDetail = ({ params }) => {
  const { id } = params;

  const [discount, setDiscount] = useState({
    discountId: "",
    discountName: "",
    discountPercent: 0,
    description: "",
    startDate: moment().format("YYYY-MM-DD").toString(),
    endDate: moment().add(1, "day").format("YYYY-MM-DD").toString(),
    minimumBillValue: 0,
  });
  const router = useRouter();
  const handleChange = (e) => {
    setDiscount({ ...discount, [e.target.name]: e.target.value });
  };
  const getDiscount = async () => {
    const dc = await api.getDiscountById(id);
    console.log(dc);
    setDiscount(dc);
  };

  const isValidData = () => {
    const matchName = discount.discountName != "";
    const matchDate =
      SHARE_FUNCTIONS.compareDate(discount.startDate, discount.endDate) == -1;
    const matchPercent =
      discount.discountPercent > 0 && discount.discountPercent <= 100;
    const matchMinimum = discount.minimumBillValue > 0;
    return matchDate && matchName && matchPercent && matchMinimum;
  };

  const handleUpdateDiscount = async () => {
    if (isValidData()) {
      await api.updateDiscount(discount, discount.discountId);
      alert("Cập nhật thành công");
      router.back();
    } else {
      alert("Vui lòng điền đầy đủ thông tin và đúng định dạng!");
    }
  };

  const handleAddDiscount = async () => {
    if (isValidData()) {
      const newDiscount = discount;
      let Id = "";
      await api.addDiscount(newDiscount).then((docId) => {
        Id = docId;
      });
      newDiscount.discountId = Id;
      await api.updateDiscount(newDiscount, Id);
      alert("Thêm thành công");
      router.back();
    } else {
      alert("Vui lòng điền đầy đủ thông tin và đúng định dạng!");
    }
  };

  useEffect(() => {
    if (id !== "add") {
      getDiscount();
    }
  }, []);
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 w-screen">
        <div className="flex-col">
          <h1 className="text-3xl text-black font-bold mb-10 ml-10 mt-10">
            Thêm khuyến mãi
          </h1>
          <div className="flex">
            <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
              <h1 className="text-xl text-black font-bold mb-2">
                Thông tin chương trình
              </h1>
              <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                Tên chương trình
              </h2>
              <input
                type="text"
                name="discountName"
                defaultValue={discount.discountName}
                onChange={handleChange}
                placeholder="Tên chương trình"
                className="w-full text-black h-10 border border-gray-700 rounded px-3"
              />
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                Mô tả
              </h2>
              <input
                type="text"
                name="description"
                defaultValue={discount.description}
                onChange={handleChange}
                placeholder="Mô tả"
                className="w-full text-black h-10 border border-gray-700 rounded px-3"
              />
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                Thời gian bắt đầu
              </h2>
              <input
                style={{
                  backgroundColor: "white",
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 5,
                  height: 45,
                  borderRadius: 10,
                  color: "black",
                }}
                name="startDate"
                defaultValue={moment(discount?.startDate).format("YYYY-MM-DD")}
                onChange={handleChange}
                type="date"
                min={moment().format("YYYY-MM-DD")}
                className="w-full h-10 border border-gray-700 rounded px-3"
              />
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                Thời gian kết thúc
              </h2>
              <input
                style={{
                  backgroundColor: "white",
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 5,
                  height: 45,
                  borderRadius: 10,
                  color: "black",
                }}
                className="w-full h-10 border border-gray-700 rounded px-3"
                name="endDate"
                defaultValue={moment(discount?.endDate).format("YYYY-MM-DD")}
                onChange={handleChange}
                type="date"
                min={moment().add(1, "day").format("YYYY-MM-DD")}
              />
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                {"Điều kiện (Hóa đơn trên <value> đồng)"}
              </h2>
              <input
                type="text"
                name="minimumBillValue"
                value={discount.minimumBillValue}
                onChange={handleChange}
                className="w-full text-black h-10 border border-gray-700 rounded px-3"
                placeholder="Hóa đơn trên <value> (đồng)"
              />

              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                {"Chiết khấu (%)"}
              </h2>

              <div className="flex flex-row">
                <input
                  type="text"
                  name="discountPercent"
                  value={discount?.discountPercent}
                  onChange={handleChange}
                  placeholder="Chiết khấu (%)"
                  className="w-full h-10 text-black border border-gray-700 rounded px-3"
                />
                {id == "add" ? (
                  <Button
                    className="h-10 ml-3 w-44"
                    type="submit"
                    id="addStaff"
                    onClick={handleAddDiscount}
                  >
                    Thêm chương trình
                  </Button>
                ) : (
                  <Button
                    className="h-10 ml-3 w-24"
                    type="submit"
                    id="updateStaff"
                    onClick={handleUpdateDiscount}
                  >
                    Cập nhật
                  </Button>
                )}
              </div>
            </div>
            {/* <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 mt-12"></div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscountEventDetail;
