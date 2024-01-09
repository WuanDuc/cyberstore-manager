"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme,Card, TextInput,Label, Tabs, Checkbox, Datepicker, FileInput, Radio } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
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

export default function Setting() {

  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-9 ">
                Cài đặt
              </label>
            </div>
            <div className=" w-10/12  overflow-scroll h-screen flow-root pl-6 pr-6">
                <div className=" float-left w-5/12 h-fit justify-between object-center pl-12 pt-3">
                    
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-1 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin cá nhân</label>
                    </div>
                    <div className="mb-1 mt-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Họ và tên</label>
                    </div>
                    <div className=" mb-1 flow-root">
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
                        <div className="mb-1 block">
                            <label className=" text-black font-semibold" htmlFor="conver1" > CCCD</label>
                        </div>
                        <div className=" mb-1 flow-root">
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                            paddingRight: 30,
                            }}
                            id="conver2" placeholder="CCCD" required className=" float-left"/></div>
                    </div>
                    <div>
                        <div className="mb-1 block">
                            <label className=" text-black font-semibold" htmlFor="conver1" > Số điện thoại</label>
                        </div>
                        <div className=" mb-1 flow-root">
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
                    <div className="mb-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver2" > Giới tính</label>
                    </div>
                    <fieldset className="flex max-w-md flex-row gap-4 mb-2">
                        <div className="flex items-center gap-2">
                            <Radio id="united-state" name="countries" value="USA" defaultChecked />
                            <label className=" text-black font-light" htmlFor="male">Nam</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="germany" name="countries" value="Germany" />
                            <label className=" text-black font-light" htmlFor="female">Nữ</label>
                        </div>
                    </fieldset>              
                    <div className="mb-1 block">
                            <label className=" text-black font-semibold w-max" htmlFor="conver4" > Địa chỉ</label>
                        </div>
                        <div className=" mb-1  flex flex-col">
                            <AddressSelect></AddressSelect>
                        </div>
                        <div className="mb-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Tên đăng nhập</label>
                    </div>
                    <div className=" mb-1 flow-root">
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                        }}
                         id="conver1" placeholder="Tên đăng nhập" required className=" float-left"/></div>
                    <div className="mb-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Mật khẩu</label>
                    </div>
                    <div className=" mb-1 flow-root">
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                        }}
                         id="conver1" type="password" required className=" float-left"/></div>
                    </div>
                </form>
            
                </div>
                <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12 pt-3">
                    
                    <form className="flex flex-col gap-4">
                        <div>
                        <div className="mb-2 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Cài đặt thông số</label>
                    </div>

                        <div className="mb-2 block">
                            <label className=" text-black font-semibold w-max" htmlFor="conver4" > Hạn mức thành viên thường</label>
                        </div>
                        <div className=" mb-2 block">
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            }}
                             id="conver4" type="email" placeholder="Hạn mức"  />
                        </div>
                        </div>
                        <div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver5" > Hạn mức thành viên bạc</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                          }} id="conver5" required placeholder="Hạn mức"/>
                        </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver6" > Hạn mức thành viên kim cương</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                          }} id="conver6" required placeholder="Hạn mức"/>
                    </form>
                
                    
                    </div>
    
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
