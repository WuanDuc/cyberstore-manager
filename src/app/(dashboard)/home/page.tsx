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
import { Suspense, useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";
import { useRouter } from "next/navigation";
import PlaygroundPage from "@/components/main";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  const router = useRouter();
  return (
    <main className=" max-h-screen overflow-y-scroll">
      <Suspense>
      </Suspense>
          <PlaygroundPage></PlaygroundPage>
          <Analytics></Analytics>
    </main>
  );
}
