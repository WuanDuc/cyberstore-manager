"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme,Card, TextInput,Label, Tabs, Checkbox, Datepicker, FileInput } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useState } from "react";


const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

export default function AddSaleProduct() {
  const [numberOfAddOnProduct, setNumberOfAddOnProduct] = useState(0);
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-11 ">
                Quản lý sản phẩm&gt;Thêm sản phẩm bán
              </label>
            </div>
            <div className=" w-10/12  overflow-scroll h-screen flow-root p-6">
                <div className=" float-left w-5/12 h-fit justify-between object-center pl-12 pt-5">
                    
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-2 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin sản phẩm </label>
                    </div>
                    <div>
                  
                    <div className="mb-2 mt-1 block">
                        <label className=" text-black font-semibold" htmlFor="conver1" > Tên sản phẩm</label>
                    </div>
                    <div className=" mb-2 flow-root">
                        <TextInput style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        color: "black",
                        width: 450,
                        paddingRight: 30,
                        }}
                         id="prname" placeholder="Tên sản phẩm" required className=" float-left"/></div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver1" > Tên loại sản phẩm chính</label>
                        </div>
                        <div className=" mb-2 flow-root">
                        <select id="productMain" className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
                          <option value="laptop">Laptop</option>
                          <option value="pc">PC</option>
                        </select>
                      </div>
                      </div>
                    <div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver1" > Giá bán</label>
                        </div>
                        <div className=" mb-2 flow-root">
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                            paddingRight: 30,
                            }}
                            id="price" placeholder="$" required className=" float-left"/></div>
                              <div className=" mt-2 block">
                        <div>
                            <label className=" text-black font-semibold"  htmlFor="multiple-file-upload">Chọn ảnh</label>
                        </div>
                        <FileInput id="file-upload"  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                        </div>
                    </div>

                    </div>
                </form>
            
                </div>
                <div className=" float-right w-5/12 h-fit justify-between flex flex-row object-center pr-12 pt-5">
                    
                    <div className="flex flex-col gap-4">
                        <div>
                        <div className="mb-2 block">
                        <label className=" text-black font-semibold text-lg" htmlFor="conver1" >Thông tin sản phẩm đính kèm</label>
                    </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold w-max" htmlFor="conver4" > Tên sản phẩm đính kèm</label>
                        </div>
                        <div className=" mb-2 block grid grid-flow-row">
                        {Array(numberOfAddOnProduct).fill().map((_, i) => (
                            <select key={i} style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            }}
                             id="conver4" >
                              {/* {chỗ này để đống tên phụ kiện đi kèm} */}
                             </select>
                             ))}
                        </div>
                        </div>
                        <button onClick={()=>setNumberOfAddOnProduct(numberOfAddOnProduct+1)} id="add" style={{borderColor:"black", borderRadius:10, width:200,color: "black", backgroundColor: "white", margin:10}} >Thêm phụ kiện...</button>
                        <Button id="submit" type="submit">Thêm phiếu sửa chữa</Button>
                    </div>
                
                    
                    </div>
    
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
