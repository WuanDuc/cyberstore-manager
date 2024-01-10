"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme,Card, TextInput,Label, Tabs, Checkbox, Datepicker, FileInput } from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { MdOutlineAttachMoney } from "react-icons/md";


const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

export default function AddRepairManagement() {

  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-11 ">
                Quản lý sửa chữa máy&gt;Thêm phiếu
              </label>
            </div>
            <div className=" w-10/12  overflow-scroll h-screen flow-root p-6">
                <div className=" float-left w-5/12 h-fit justify-between object-center pl-12 pt-5">
                    
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-2 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin máy</label>
                    </div>

                    <div className="mb-2 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Mã phiếu bảo hành</label>
                    </div>
                    <div className=" mb-2 flow-root">
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 300,
                        paddingRight: 30,
                        }}
                         id="conver1" type="email" placeholder="Mã phiếu bảo hành" required className=" float-left"/>
                        <Button theme={THEME.buttonTheme} color="info" className=" float-right"
                         id="checkdtbbtn" type="button" size="md">Tra cứu</Button>
                    </div>
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <label className=" text-black font-semibold" htmlFor="conver2" > Tên máy</label>
                    </div>
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                      }} id="Tên máy" required placeholder="Tên máy"/>
                    </div>
                    <div className="mb-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver2" > Các lỗi</label>
                    </div>
                    <div className=" items-stretch flex flex-row grid-cols-1">
                        <div className=" mr-6 flex items-center gap-2">
                            <Checkbox id="bug1" />
                            <label className=" text-black font-normal" htmlFor="bug1">Khởi động</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug2" />
                            <label className=" text-black font-normal" htmlFor="bug2">Hoạt động</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug3" />
                            <label className=" text-black font-normal" htmlFor="bug3">Hiện thị</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug4" />
                            <label className=" text-black font-normal" htmlFor="bug4">Kết nối</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug5" />
                            <label className=" text-black font-normal" htmlFor="bug5">Lưu trữ</label>
                        </div>

                    </div>
                    <div className="flex flex-row ">
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug6" />
                            <label className=" text-black font-normal" htmlFor="bug6">Nguồn</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug7" />
                            <label className=" text-black font-normal" htmlFor="bug7">Hư phần cứng</label>
                        </div>
                        <div className="mr-6 flex items-center gap-2">
                            <Checkbox id="bug8" />
                            <label className=" text-black font-normal" htmlFor="bug8">Hư phần mềm</label>
                        </div>
                    </div>
                    <div className="mb-2 block">
                        <label className=" text-black font-semibold" htmlFor="conver3" > Chi tiết</label>
                    </div>
                    <TextInput id="conver3" required sizing="lg" style={{backgroundColor: "white", color: "black"}}></TextInput>
                    <div className=" mt-2 block">
                        <div>
                            <label className=" text-black font-semibold"  htmlFor="multiple-file-upload">Chọn ảnh</label>
                        </div>
                        <FileInput id="file-upload"  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                        </div>
                </form>
            
                </div>
                <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12 pt-5">
                    
                    <form className="flex flex-col gap-4">
                        <div>
                        <div className="mb-2 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin phiếu bảo hành</label>
                    </div>

                        <div className="mb-2 block">
                            <label className=" text-black font-semibold w-max" htmlFor="conver4" > Mã phiếu sửa chữa</label>
                        </div>
                        <div className=" mb-2 block">
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            }}
                             id="conver4" type="email" placeholder="HSDV" disabled readOnly/>
                        </div>
                        </div>
                        <div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver5" > Tên khách hàng</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                          }} id="conver5" required placeholder="Tên khách hàng"/>
                        </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver6" > Số điện thoại</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                          }} id="conver6" required placeholder="Số điện thoại"/>

                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="date" > Ngày hẹn</label>
                            <Datepicker  id="date" theme={THEME.datePickerTheme} minDate={new Date()} />
                        </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver7" > Thành tiền</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                          }} id="conver7" icon={MdOutlineAttachMoney} required placeholder="Số tiền"/>

                        <Button className=" " type="submit">Thêm phiếu sửa chữa</Button>
                    </form>
                
                    
                    </div>
    
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
