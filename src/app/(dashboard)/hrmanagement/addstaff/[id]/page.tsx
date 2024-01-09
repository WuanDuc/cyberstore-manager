"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Card,
  TextInput,
  Label,
  Tabs,
  Checkbox,
  Datepicker,
  FileInput,
  Radio,
} from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { MdOutlineAttachMoney } from "react-icons/md";
import AddressSelect from "@/components/addressselect";
import moment from "moment";
import { useEffect, useState } from "react";
import api from "../../../../../apis/Api";
import { useRouter } from "next/navigation";

const AddStaffManagement = ({ params }) => {
  const { id } = params;
  const [staff, setStaff] = useState({
    staffId: "",
    email: "",
    password: "",
    cccd: "",
    name: "",
    gender: "Nam",
    phoneNumber: "",
    position: "",
    salary: 0,
    address: [],
    dateOfEmployment: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    alert(e.target.value);
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const isValidData = () => {};

  const handleAddStaff = async () => {
    const newStaff = staff;
    await api.addStaff(newStaff);
    alert("Thêm thành công");
    router.back();
  };

  const getStaff = async () => {
    const recentStaff = await api.getStaffById(id);
    console.log(recentStaff);
    setStaff(recentStaff);
  };

  useEffect(() => {
    if (id !== "add") {
      getStaff();
    }
  }, []);

  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-4 w-screen">
          <div className="flex-col">
            <div className=" flex-row">
              <label className=" font-semibold text-2xl text-black p-11 pt-11">
                Quản lý nhân sự &gt; Thêm nhân viên
              </label>
            </div>
            <div className="mb-2 block ml-20 mt-4">
              <label
                className=" text-black font-semibold text-lg"
                htmlFor="conver1"
              >
                Thông tin nhân viên
              </label>
            </div>

            <div className=" w-10/12 pr-12 pl-12 overflow-scroll h-screen flow-root ">
              <div className=" float-left w-5/12 h-fit justify-between object-center pl-12">
                <form className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2 mt-1 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {" "}
                        Họ và tên
                      </label>
                    </div>
                    <div className=" mb-2 flow-root">
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        onChange={handleChange}
                        id="name"
                        name="name"
                        placeholder="Họ và tên"
                        required
                        className="float-left"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {" "}
                        CCCD
                      </label>
                    </div>
                    <div className=" mb-2 flow-root">
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        id="cccd"
                        name="cccd"
                        onChange={handleChange}
                        placeholder="CCCD"
                        required
                        className=" float-left"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {" "}
                        Số điện thoại
                      </label>
                    </div>
                    <div className=" mb-2 flow-root">
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        required
                        className=" float-left"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver2"
                      >
                        {" "}
                        Giới tính
                      </label>
                    </div>
                    <fieldset
                      className="flex max-w-md flex-row gap-4 mb-2"
                      id="gender"
                    >
                      <div className="flex items-center gap-2">
                        <Radio
                          id="gender"
                          name="gender"
                          value="Nam"
                          onChange={handleChange}
                          defaultChecked
                        />
                        <label
                          className=" text-black font-light"
                          htmlFor="male"
                        >
                          Nam
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio
                          id="gender"
                          name="gender"
                          value="Nữ"
                          onChange={handleChange}
                        />
                        <label
                          className=" text-black font-light"
                          htmlFor="female"
                        >
                          Nữ
                        </label>
                      </div>
                    </fieldset>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold w-max"
                        htmlFor="conver4"
                      >
                        {" "}
                        Địa chỉ
                      </label>
                    </div>
                    <div className=" mb-2 flex flex-col">
                      <AddressSelect></AddressSelect>
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        id="soNha"
                        name="soNha"
                        onChange={handleChange}
                        placeholder="Số nhà"
                        required
                        className="float-left"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12">
                <form className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {" "}
                        Email
                      </label>
                    </div>
                    <div className=" mb-2 flow-root">
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        type="email"
                        className="float-left"
                      />
                    </div>
                    <div className="mb-2 block">
                      <label
                        className="text-black font-semibold"
                        htmlFor="password"
                      >
                        {" "}
                        Mật khẩu
                      </label>
                    </div>
                    <div className=" mb-2 flow-root">
                      <TextInput
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          color: "black",
                          width: 450,
                          paddingRight: 30,
                        }}
                        id="password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        required
                        className=" float-left"
                      />
                    </div>

                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver5"
                      >
                        {" "}
                        Chức vụ
                      </label>
                    </div>
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                      }}
                      id="position"
                      name="position"
                      onChange={handleChange}
                      required
                      placeholder="Chức vụ"
                    />
                  </div>
                  <div className="mb-2 flex flex-col">
                    <label className=" text-black font-semibold" htmlFor="date">
                      {" "}
                      Ngày bắt đầu làm
                    </label>
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
                      name="dateOfEmployment"
                      onChange={handleChange}
                      // onChange={handleChange}
                      type="date"
                      min={moment().format("YYYY-MM-DD")}
                      // value={formState.TGBatDau}
                    />
                  </div>
                  <div className="mb-2 block">
                    <label
                      className="text-black font-semibold"
                      htmlFor="conver7"
                    >
                      {" "}
                      Lương cơ bản
                    </label>
                  </div>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      borderRadius: 10,
                      color: "black",
                    }}
                    id="salary"
                    name="salary"
                    onChange={handleChange}
                    icon={MdOutlineAttachMoney}
                    required
                    placeholder="Số tiền (VND)"
                  />

                  {id == "add" ? (
                    <Button
                      className=" mt-20"
                      type="submit"
                      id="addStaff"
                      onClick={handleAddStaff}
                    >
                      Thêm nhân viên
                    </Button>
                  ) : (
                    <Button
                      className=" mt-20"
                      type="submit"
                      id="updateStaff"
                      onClick={handleAddStaff}
                    >
                      Cập nhật
                    </Button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AddStaffManagement;
