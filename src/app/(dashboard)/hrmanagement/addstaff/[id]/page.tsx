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
  Select,
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
import axios from "axios";

const AddStaffManagement = ({ params }) => {
  const { id } = params;
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedWardname, setSelectedWardName] = useState("");
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
    dateOfEmployment: moment().format("YYYY-MM-DD"),
  });
  const router = useRouter();

  const host = "https://provinces.open-api.vn/api/";
  const callAPI = (api: string) => {
    axios.get(api).then((response) => {
      setCities(response.data);
    });
  };
  const callApiDistrict = (api: string) => {
    axios.get(api).then((response) => {
      setDistricts(response.data.districts);
      setSelectedCityName(response.data.name);
    });
  };
  const callApiWard = (api: string) => {
    axios.get(api).then((response) => {
      setWards(response.data.wards);
      setSelectedDistrictName(response.data.name);
    });
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityCode = event.target.value;
    setSelectedCity(cityCode);
    setSelectedDistrict("");
    setSelectedWard("");
    setSelectedDistrictName("");
    setSelectedWardName("");
    if (cityCode) {
      callApiDistrict(`${host}p/${cityCode}?depth=2`);
    }
  };
  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtCode = event.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard("");
    setSelectedWardName("");
    if (districtCode) {
      callApiWard(`${host}d/${districtCode}?depth=2`);
    }
  };
  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWard(event.target.value);
    let wName = wards.findLast((w) => w.code == event.target.value);
    wName = wName.name;
    setSelectedWardName(wName || "");
    // console.log({
    //   citycode: selectedCityName,
    //   dtcode: selectedDistrictName,
    //   wcode: wName,
    // });
  };

  const handleChange = (e) => {
    if (e.target.name == "cccd")
      setStaff({ ...staff, [e.target.name]: e.target.value.toString() });
    else setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const setAddress = () => {
    const tempSoNha = document.getElementById("soNha")?.value;
    let temp = staff;
    const ad = {
      tinh: selectedCityName,
      quan: selectedDistrictName,
      phuong: selectedWardname,
      soNha: tempSoNha,
    };
    temp.address[0] = ad;
    setStaff(temp);
  };

  const checkEmail = (email) => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const isValidData = () => {
    setAddress();
    const matchName = staff.name != "";
    const matchCCCD = staff.cccd.length == 12;
    const matchPhone = staff.phoneNumber.length == 10;
    const matchAddress =
      selectedCityName != "" &&
      selectedDistrictName != "" &&
      selectedWardname != "";
    const tempSoNha = document.getElementById("soNha")?.value;
    const matchSoNha = tempSoNha != "";
    const matchEmail = checkEmail(staff.email);
    const matchPassword = staff.password != "";
    const matchPosition = staff.position != "";
    const matchSalary = staff.salary > 1000000;
    return (
      matchAddress &&
      matchName &&
      matchCCCD &&
      matchPhone &&
      matchPassword &&
      matchSoNha &&
      matchEmail &&
      matchPosition &&
      matchSalary
    );
  };

  const handleAddStaff = async () => {
    if (isValidData()) {
      const newStaff = staff;
      let Id = "";
      await api.addStaff(newStaff).then((docId) => {
        Id = docId;
        console.log(docId);
      });
      newStaff.staffId = Id;
      await api.updateStaff(newStaff, Id);
      console.log(newStaff.staffId);
      alert("Thêm thành công");
      router.back();
    } else {
      alert("Vui lòng điền đầy đủ thông tin và đúng định dạng!");
    }
  };

  const handleUpdateStaff = async () => {
    if (isValidData()) {
      await api.updateStaff(staff, staff.staffId);
      alert("Cập nhật thành công");
      router.back();
    } else {
      alert("Vui lòng điền đầy đủ thông tin và đúng định dạng!");
    }
  };

  const getStaff = async () => {
    const recentStaff = await api.getStaffById(id);
    // document.getElementById("name").innerHTML = recentStaff.name || "";
    await axios.get(`${host}p?depth=2`).then((response) => {
      setCities(response.data);
      const ct = response.data;
      let city = ct.findLast(
        (city) => city.name == recentStaff.address[0].tinh
      );
      const cityName = city.name;
      const cityCode = city.code;
      setSelectedCity(cityCode);
      setSelectedDistrict("");
      setSelectedWard("");
      setSelectedCityName(cityName);
      setSelectedDistrictName("");
      setSelectedWardName("");
      if (cityCode) {
        axios.get(`${host}p/${cityCode}?depth=2`).then((response) => {
          const dt = response.data.districts;
          setDistricts(response.data.districts);
          let district = dt.findLast(
            (dt) => dt.name == recentStaff.address[0].quan
          );
          const dtCode = district.code;
          const dtName = district.name;
          setSelectedDistrict(dtCode);
          setSelectedWard("");
          setSelectedDistrictName(dtName);
          setSelectedWardName("");
          if (dtCode) {
            axios.get(`${host}d/${dtCode}?depth=2`).then((response) => {
              setWards(response.data.wards);
              const w = response.data.wards;
              let ward = w.findLast(
                (w) => w.name == recentStaff.address[0].phuong
              );
              const wCode = ward.code;
              const wName = ward.name;
              setSelectedWard(wCode);
              setSelectedWardName(wName);
              // console.log({
              //   citycode: cityName,
              //   dtcode: dtName,
              //   wcode: wName,
              // });
            });
          }
        });
      }
    });
    setStaff(recentStaff);
  };

  useEffect(() => {
    if (id !== "add") {
      getStaff();
      callAPI(`${host}p?depth=2`);
    }
    callAPI(`${host}p?depth=2`);
  }, []);

  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-4 w-screen">
          <div className="flex-col">
            <div className=" flex-row">
              {id == "add" ? (
                <label className=" font-semibold text-2xl text-black p-11 pt-11">
                  Quản lý nhân sự &gt; Thêm nhân viên
                </label>
              ) : (
                <label className=" font-semibold text-2xl text-black p-11 pt-11">
                  Quản lý nhân sự &gt; Cập nhật nhân viên
                </label>
              )}
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
                <div className="flex flex-col gap-4">
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
                        value={staff?.name || ""}
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
                        value={staff?.cccd || ""}
                        onChange={handleChange}
                        placeholder="CCCD"
                        required
                        type="number"
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
                        value={staff?.phoneNumber || ""}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        required
                        type="tel"
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

                    {staff?.gender == "Nam" ? (
                      <fieldset
                        className="flex max-w-md flex-row gap-4 mb-2"
                        id="gender"
                      >
                        {" "}
                        <div className="flex items-center gap-2">
                          <Radio
                            id="gender"
                            name="gender"
                            value="Nam"
                            onChange={handleChange}
                            checked={true}
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
                    ) : (
                      <fieldset
                        className="flex max-w-md flex-row gap-4 mb-2"
                        id="gender"
                      >
                        {" "}
                        <div className="flex items-center gap-2">
                          <Radio
                            id="gender"
                            name="gender"
                            value="Nam"
                            onChange={handleChange}
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
                            checked={true}
                          />
                          <label
                            className=" text-black font-light"
                            htmlFor="female"
                          >
                            Nữ
                          </label>
                        </div>
                      </fieldset>
                    )}

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
                      <div className=" flex flex-col">
                        <Select
                          style={{ backgroundColor: "white", color: "black" }}
                          className=" my-1 w-60"
                          id="tinh"
                          name="tinh"
                          value={selectedCity}
                          onChange={handleCityChange}
                        >
                          <option value="" disabled>
                            Chọn tỉnh thành
                          </option>
                          {cities.map((city: any) => (
                            <option
                              key={city.code}
                              value={city.code}
                              id="tinh"
                              name="tinh"
                            >
                              {city.name}
                            </option>
                          ))}
                        </Select>

                        <Select
                          style={{ backgroundColor: "white", color: "black" }}
                          className=" my-1 w-60"
                          id="quan"
                          name="quan"
                          value={selectedDistrict}
                          onChange={handleDistrictChange}
                        >
                          <option value="" disabled>
                            Chọn quận huyện
                          </option>
                          {districts.map((district: any) => (
                            <option
                              key={district.code}
                              value={district.code}
                              id="quan"
                              name="quan"
                            >
                              {district.name}
                            </option>
                          ))}
                        </Select>

                        <Select
                          style={{ backgroundColor: "white", color: "black" }}
                          className=" my-1 w-60"
                          id="phuong"
                          name="phuong"
                          value={selectedWard}
                          onChange={handleWardChange}
                        >
                          <option value="" disabled>
                            Chọn phường xã
                          </option>
                          {wards.map((ward: any) => (
                            <option
                              key={ward.code}
                              value={ward.code}
                              id="phuong"
                              name="phuong"
                            >
                              {ward.name}
                            </option>
                          ))}
                        </Select>
                      </div>
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
                        defaultValue={staff?.address[0]?.soNha}
                        onChange={handleChange}
                        placeholder="Số nhà"
                        required
                        className="float-left"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {"Email (ex: abc@gmail.com)"}
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
                        value={staff?.email}
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
                        value={staff?.password}
                        onChange={handleChange}
                        type="text"
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
                      value={staff.position}
                      required
                      placeholder="Chức vụ"
                    />
                  </div>
                  <div className="mb-2 flex flex-col">
                    <label className=" text-black font-semibold" htmlFor="date">
                      {" "}
                      Ngày bắt đầu làm
                    </label>
                    {id == "add" ? (
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
                        value={moment(staff?.dateOfEmployment).format(
                          "YYYY-MM-DD"
                        )}
                        onChange={handleChange}
                        type="date"
                        min={moment().format("YYYY-MM-DD")}
                      />
                    ) : (
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
                        disabled
                        name="dateOfEmployment"
                        value={moment(staff?.dateOfEmployment).format(
                          "YYYY-MM-DD"
                        )}
                        onChange={handleChange}
                        type="date"
                        min={moment().format("YYYY-MM-DD")}
                      />
                    )}
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
                    type="number"
                    // min={0}
                    value={staff?.salary || 0}
                    // value={(value) =>
                    //   new Intl.NumberFormat("en-DE").format(value)
                    // }
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
                      onClick={handleUpdateStaff}
                    >
                      Cập nhật
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AddStaffManagement;
