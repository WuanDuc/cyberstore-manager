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
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { Eye, File } from "react-feather";
import { useRouter } from "next/navigation";

const goodsReceipts = [
  {
    goodsReceiptsId: "PN001",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
  {
    goodsReceiptsId: "PN002",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
  {
    goodsReceiptsId: "PN003",
    staffId: "NV002",
    entryDate: "2023-10-23",
    totalPrice: 100000000,
  },
];

export default function ProductManagement() {
  const router = useRouter();
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 w-screen">
        <div className="flex-col">
          <div className=" flex-row pt-8">
            <label className=" font-semibold text-2xl text-black p-7 pt-24">
              Quản lý sản phẩm
            </label>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
              <Tabs.Item active title="Quản lý kho">
                <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96"
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="storageProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Quản lý sản phẩm bán">
                <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="saleProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Quản lý phiếu nhập">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-40 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                      }}
                      id="email4"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                  <div className=" flex fixed right-1 pr-1">
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                      onClick={() =>
                        router.push("/productmanagement/goodsReceipt")
                      }
                    >
                      <File style={{ marginRight: 3 }} />
                      Thêm phiếu nhập
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    width: 1200,
                    alignSelf: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  <Table hoverable theme={THEME.tableTheme}>
                    <Table.Head>
                      <Table.HeadCell>STT</Table.HeadCell>
                      <Table.HeadCell>Mã phiếu nhập</Table.HeadCell>
                      <Table.HeadCell>Mã nhân viên</Table.HeadCell>
                      <Table.HeadCell>Ngày nhập</Table.HeadCell>
                      <Table.HeadCell>Thành tiền</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {goodsReceipts.map((goodsReceipt, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell>
                              {goodsReceipt.goodsReceiptsId}
                            </Table.Cell>
                            <Table.Cell>{goodsReceipt.staffId}</Table.Cell>
                            <Table.Cell>{goodsReceipt.entryDate}</Table.Cell>
                            <Table.Cell>{goodsReceipt.totalPrice}</Table.Cell>
                            <Table.Cell className="w-16">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    alert(goodsReceipt.goodsReceiptsId)
                                  }
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                  <Eye color="green" />
                                </button>
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      );
                    })}
                  </Table>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
