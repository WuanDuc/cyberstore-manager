'use client'
import Image from 'next/image'
import { Button , CustomFlowbiteTheme,  Tabs} from 'flowbite-react'
import { Console } from 'console'
import {ProductCard} from '@/components/productCard'
import SearchInput from '@/components/searchinput'

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10
};

const RepairContainerLeft = () => (
  <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin phiếu bảo hành</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã phiếu</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Tên khách hàng</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Số điện thoại</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã hóa đơn</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Ngày lập phiếu - Ngày hết hạn</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3 mt-2" />
  </div>
);

const RepairContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin máy bảo hành</h1>
      <div className="w-full h-100 bg-gray-600 mb-2"></div>
      <div className="flex">
      {/* Hình ảnh bên trái */}
      <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />

      {/* Container chứa thông tin bên phải */}
      <div className="flex flex-col mt-5  ">
        <div className="mb-1">
          <h2 className="text-black font-semibold">Tên máy:</h2>
          <span className="text-black">MSI MEG Trident X 102D</span>
        </div>
        <div>
          <span className="font-semibold text-black">Giá: $3,799</span>
        </div>
      </div>
    </div>
  </div>
);

const DiscountContainerLeft = () => (
  <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin phiếu bảo hành</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã chương trình</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Tên chương trình</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Thời gian bắt đầu</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Thời gian kết thúc</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Điều kiện</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Chiết khấu</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
  </div>
);

const DiscountContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    

      {/* Container chứa thông tin bên phải */}
      <div className="flex flex-col mt-5  items-center justify-center">
          <h2 className="text-xl text-black font-bold mb-2 text-center">Hình ảnh</h2>
      <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />
    </div>
  </div>
);

export default function RepairManagement() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className='flex-col fixed top-0 w-screen'>
          <div className='flex-col'>
            <div className=' flex-row'>
              <label className=' font-semibold text-2xl text-black p-7 pt-11'>Quản lý phiếu bảo hành. Xem chi tiết</label>
              <div className=' flex-row fixed right-24 pl-96 pt-1'>
                <SearchInput></SearchInput>   
            </div>
            <div className=' flex-row fixed right-1 pt-1'>
                <Button>Get started</Button>
            </div>

            </div>
            <Tabs aria-label="Tabs with underline" style="underline" theme={customTabTheme}>

      <Tabs.Item active title="Phiếu sửa chữa máy">
        <Button onClick={()=>console.log("hihi")}>Help me 123</Button>
              </Tabs.Item>
              
      <Tabs.Item title="Phiếu bảo hành" >
        <ProductCard product={sampleProduct}></ProductCard>
              </Tabs.Item>
              
      <Tabs.Item title="Phiếu bảo hành chi tiết" >
      <div className="flex">
                    <RepairContainerLeft />
                    <RepairContainerRight />
                  </div>
      </Tabs.Item>
      <Tabs.Item title="Thêm khuyến mãi" >
      <div className="flex">
                    <DiscountContainerLeft />
                    <DiscountContainerRight />
                  </div>
      </Tabs.Item>
    </Tabs>
          </div>
        </div>

      </div>
    </main>
  )
}
const customTabTheme: CustomFlowbiteTheme['tabs'] ={
  "base": "flex flex-col gap-2",
  "tablist": {
    "base": "flex text-center",
    "styles": {
      "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
      "underline": "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
    },
    "tabitem": {
      "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
      "styles": {
        "default": {
          "base": "rounded-t-lg",
          "active": {
            "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
          }
        },
        "underline": {
          "base": "rounded-t-lg",
          "active": {
            "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        "pills": {
          "base": "",
          "active": {
            "on": "rounded-lg bg-cyan-600 text-white",
            "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        "fullWidth": {
          "base": "ml-0 first:ml-0 w-full rounded-none flex",
          "active": {
            "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
          }
        }
      },
      "icon": "mr-2 h-5 w-5"
    }
  },
  "tabitemcontainer": {
    "base": "",
    "styles": {
      "default": "",
      "underline": "",
      "pills": "",
      "fullWidth": ""
    }
  },
  "tabpanel": "py-3"
}
