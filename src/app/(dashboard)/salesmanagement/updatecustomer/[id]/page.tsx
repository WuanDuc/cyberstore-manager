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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import api from "@/apis/Api";

const UpdateCustomer = ({ params }) => {
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
  const [badgeCus, setBadgeCus] = useState([
    {
      badge: "Khách hàng thành viên",
      pointThreshold: 100,
    },
    {
      badge: "Khách hàng thân thiết",
      pointThreshold: 500,
    },
    { badge: "Khách hàng VIP", pointThreshold: 1000 },
  ]);
  const [customer, setCustomer] = useState({
    customerId: "",
    name: "",
    gender: "Nam",
    phone: "",
    badge: "",
    point: 0,
    address: [],
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
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const setAddress = () => {
    const tempSoNha = document.getElementById("soNha")?.value;
    let temp = customer;
    const ad = {
      tinh: selectedCityName,
      quan: selectedDistrictName,
      phuong: selectedWardname,
      soNha: tempSoNha,
    };
    temp.address[0] = ad;
    setCustomer(temp);
  };

  const isValidData = () => {
    setAddress();
    const matchName = customer.name != "";
    const matchPhone = customer.phone.length == 10;
    const matchAddress =
      selectedCityName != "" &&
      selectedDistrictName != "" &&
      selectedWardname != "";
    const tempSoNha = document.getElementById("soNha")?.value;
    const matchSoNha = tempSoNha != "";
    const matchBadge = customer.badge != "";
    return matchAddress && matchName && matchPhone && matchSoNha && matchBadge;
  };

  const handleUpdateCustomer = async () => {
    if (isValidData()) {
      await api.updateCustomer(customer, customer.customerId);
      alert("Cập nhật thành công");
      router.back();
    } else {
      alert("Vui lòng điền đầy đủ thông tin và đúng định dạng!");
    }
  };

  const getCustomer = async () => {
    const recentCustomer = await api.getCustomerById(id);
    await axios.get(`${host}p?depth=2`).then((response) => {
      setCities(response.data);
      const ct = response.data;
      let city = ct.findLast(
        (city) => city.name == recentCustomer.address[0].tinh
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
            (dt) => dt.name == recentCustomer.address[0].quan
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
                (w) => w.name == recentCustomer.address[0].phuong
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
    setCustomer(recentCustomer);
  };

  useEffect(() => {
    getCustomer();
    callAPI(`${host}p?depth=2`);
  }, []);
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-4 w-screen">
          <div className="flex-col">
            <div className=" flex-row">
              <label className=" font-semibold text-2xl text-black p-11 pt-11">
                Quản lý bán hàng&gt;Cập nhật khách hàng
              </label>
            </div>
            <div className="mb-2 block ml-20 mt-4">
              <label
                className=" text-black font-semibold text-lg"
                htmlFor="conver1"
              >
                Thông tin khách hàng
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
                        id="name"
                        name="name"
                        defaultValue={customer.name || ""}
                        onChange={handleChange}
                        placeholder="Họ và tên"
                        required
                        className=" float-left"
                      />
                    </div>
                  </div>
                  <div></div>
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
                        id="phone"
                        name="phone"
                        type="phone"
                        defaultValue={customer.phone || ""}
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

                    {customer?.gender == "Nam" ? (
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
                            <option key={city.code} value={city.code} id="tinh">
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
                        defaultValue={customer?.address[0]?.soNha}
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
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <label
                        className=" text-black font-semibold"
                        htmlFor="conver1"
                      >
                        {" "}
                        Điểm thành viên
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
                        disabled
                        id="point"
                        name="point"
                        type="point"
                        defaultValue={customer.point || ""}
                        onChange={handleChange}
                        placeholder="Điểm thành viên"
                        required
                        className=" float-left"
                      />
                    </div>
                  </div>
                  <div className="mb-2 block">
                    <label
                      className=" text-black font-semibold"
                      htmlFor="conver1"
                    >
                      {" "}
                      Hạng thành viên
                    </label>
                  </div>
                  <div className=" mb-2 flow-root">
                    <Select
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                      }}
                      id="badge"
                      name="badge"
                      required
                      disabled
                      className="float-left"
                      onChange={handleChange}
                    >
                      {badgeCus.map((badge, index) => (
                        <option
                          key={badge.badge}
                          value={badge.badge}
                          id="phuong"
                        >
                          {badge.badge}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <Button
                    className=" mt-20"
                    type="submit"
                    onClick={handleUpdateCustomer}
                  >
                    Cập nhật khách hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default UpdateCustomer;
