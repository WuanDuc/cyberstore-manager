"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Table,
  Tabs,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/saleProductCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { HiSearch } from "react-icons/hi";
import { Eye, File, Trash2, User, UserPlus } from "react-feather";
import { useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";
import { useRouter } from "next/navigation";
import PlaygroundPage from "@/components/main";
export default function Home() {
  const router = useRouter();
  return (
    <main className=" max-h-screen overflow-y-scroll">
          <PlaygroundPage></PlaygroundPage>
    </main>
  );
}
