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
import { THEME } from "@/constant/theme";
import { HiSearch } from "react-icons/hi";
import { Eye, File, Trash2, User, UserPlus } from "react-feather";
import { useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";

const staffs = [
  {
    staffId: "NV001",
    name: "Nhân viên A",
    phoneNumber: "0778889991",
    position: "Nhân viên",
    gender: true,
    email: "toilanhanvien@gmail.com",
    password: "123456789",
  },
  {
    staffId: "NV002",
    name: "Nhân viên A",
    phoneNumber: "0778889991",
    position: "Nhân viên",
    gender: true,
    email: "toilanhanvien@gmail.com",
    password: "123456789",
  },
  {
    staffId: "NV003",
    name: "Nhân viên A",
    phoneNumber: "0778889991",
    position: "Nhân viên",
    gender: true,
    email: "toilanhanvien@gmail.com",
    password: "123456789",
  },
  {
    staffId: "NV004",
    name: "Nhân viên A",
    phoneNumber: "0778889991",
    position: "Nhân viên",
    gender: false,
    email: "toilanhanvien@gmail.com",
    password: "123456789",
  },
];

export default function HRManagement() {
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-7 pt-11">
                Quản lý nhân sự
              </label>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
              <Tabs.Item title="Quản lý nhân viên">
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
                      onClick={() => alert("hihi")}
                    >
                      <UserPlus style={{ marginRight: 5 }} />
                      Thêm nhân viên
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
                      <Table.HeadCell>Mã nhân viên</Table.HeadCell>
                      <Table.HeadCell>Tên nhân viên</Table.HeadCell>
                      <Table.HeadCell>Email</Table.HeadCell>
                      <Table.HeadCell hidden>Mật khẩu</Table.HeadCell>
                      <Table.HeadCell>Giới tính</Table.HeadCell>
                      <Table.HeadCell>Số điện thoại</Table.HeadCell>
                      <Table.HeadCell>Chức vụ</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {staffs.map((staff, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200 px-3 py-2"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center px-3 py-2">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {staff.staffId}
                            </Table.Cell>
                            <Table.Cell className="w-1/4 px-3 py-2">
                              {staff.name}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2">
                              {staff.email}
                            </Table.Cell>
                            <Table.Cell hidden className="w-28 px-3 py-2">
                              {staff.password}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {staff.gender !== null
                                ? staff.gender
                                  ? "Nam"
                                  : "Nữ"
                                : ""}
                            </Table.Cell>
                            <Table.Cell className="w-28 text-right px-3 py-2">
                              {staff.phoneNumber}
                            </Table.Cell>
                            <Table.Cell className="w-28 text-right px-3 py-2">
                              {staff.position}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2 align-center">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() => alert(staff.staffId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() => alert(staff.staffId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                  <Trash2 color="green" />
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
              <Tabs.Item title="Quản lý lương"></Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
