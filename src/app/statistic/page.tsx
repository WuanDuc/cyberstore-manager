"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

export default function Statistic() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row">
              <label className=" font-semibold text-2xl text-black p-7 pt-11">
                Quan ly cai gi do
              </label>
              <div className=" flex-row fixed right-24 pl-96 pt-1">
                <SearchInput></SearchInput>
              </div>
              <div className=" flex-row fixed right-1 pt-1">
                <Button>Get started</Button>
              </div>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
              <Tabs.Item active title="Profile">
                <Button onClick={() => console.log("hihi")}>Help me</Button>
              </Tabs.Item>
              <Tabs.Item title="Dashboard">
                <ProductCard product={sampleProduct}></ProductCard>
              </Tabs.Item>
              <Tabs.Item title="Settings">
                <div className=" overflow-auto relative">
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
