"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Tabs,
  Table,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import {
  Circle,
  Edit,
  Eye,
  FileText,
  Gift,
  Monitor,
  Trash2,
  X,
} from "react-feather";
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GoodReceipt = ({ title, action }) => {
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8 font-mono">
              <label className=" font-semibold text-2xl text-black p-7 pt-24">
                {"Quản lý phiếu nhập > " + title}
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoodReceipt;
