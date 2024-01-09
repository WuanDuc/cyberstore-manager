"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme,Card, TextInput,Label, Tabs, Checkbox, Datepicker, FileInput, Radio, Select } from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { MdOutlineAttachMoney } from "react-icons/md";
import AddressSelect from "@/components/addressselect";

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

export default function UpdateCustomer() {

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
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin khách hàng</label>
                    </div>

            <div className=" w-10/12 pr-12 pl-12 overflow-scroll h-screen flow-root ">
                <div className=" float-left w-5/12 h-fit justify-between object-center pl-12">
                    
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-2 mt-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Họ và tên</label>
                    </div>
                    <div className=" mb-2 flow-root">
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                        }}
                         id="conver1" placeholder="Họ và tên" required className=" float-left"/></div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver1" > Số điện thoại</label>
                        </div>
                        <div className=" mb-2 flow-root">
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                            paddingRight: 30,
                            }}
                            id="phone" placeholder="Số điện thoại" required className=" float-left"/></div>
                    </div>
                    <div>
                    <div className="mb-2 block">
                            <label className=" text-black font-semibold w-max" htmlFor="conver4" > Địa chỉ</label>
                        </div>
                        <div className=" mb-2  flex flex-col">
                            <AddressSelect></AddressSelect>
                        </div>
                    </div>
                </form>
            
                </div>
                <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12">
                    
                    <form className="flex flex-col gap-4">
                        <div className="mb-2 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Hạng thành viên</label>
                    </div>
                    <div className=" mb-2 flow-root">
                        <Select style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                        }}
                         id="conver1" required className=" float-left"/>
                      </div>


                        <Button className=" mt-20" type="submit">Cập nhật khách hàng</Button>
                    </form>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
