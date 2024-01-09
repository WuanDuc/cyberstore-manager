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
import { SaleProductCard } from "@/components/saleProductCard";
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
import api from "@/apis/Api";

const sampleBills = [
  {
    saleBilId: "HD001",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD002",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD003",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD004",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
];

const sampleCustomer = [
  {
    customerId: "KH001",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH002",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH003",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH004",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
];

const SalesManagement = () => {
  const [discounts, setDiscounts] = useState([
    // {
    //   discountId: "NEWYEAR",
    //   name: "Mừng năm mới",
    //   discountPercent: 10,
    //   description:
    //     "Nhân dịp năm mới, WYH cyber store cho ra mắt chương trình khuyến mãi cực sốc dành cho hóa đơn trên 50 triệu đồng",
    //   startDate: "2023-01-01",
    //   endDate: "2023-01-31",
    //   minimumBillValue: 50000,
    //   conditionStr: " ",
    // },
    // {
    //   discountId: "NEWYEAR2024",
    //   name: "Mừng năm mới 2024",
    //   discountPercent: 5,
    //   description:
    //     "Nhân dịp năm mới, WYH cyber store cho ra mắt chương trình khuyến mãi cực sốc dành cho hóa đơn trên 500 nghìn đồng",
    //   startDate: "2023-01-01",
    //   endDate: "2023-01-31",
    //   minimumBillValue: 500,
    //   conditionStr: " ",
    // },
    // {
    //   discountId: "NEWSTORE",
    //   name: "Mừng năm mới",
    //   discountPercent: 15,
    //   description:
    //     "Nhân dịp khai trương, WYH cyber store cho ra mắt chương trình khuyến mãi cực sốc dành cho hóa đơn trên 100 triệu đồng",
    //   startDate: "2023-01-01",
    //   endDate: "2023-01-31",
    //   minimumBillValue: 100000,
    //   conditionStr: " ",
    // },
  ]);

  const [customers, setCustomer] = useState([]);

  const getCustomers = async () => {
    const temp = await api.getAllCustomers();
    setCustomer(temp);
  };
  const getDiscounts = async () => {
    const temp = await api.getAllDiscounts();
    // let temp3 = temp.map((discount, index) => {
    //   let temp2 = { ...discount, conditionStr: " " };

    //   return temp2;
    // });
    setDiscounts(temp);
  };

  const handleDeleteCustomer = async (id) => {
    await api.deleteCustomer(id);
    const temp = await api.getAllCustomers();
    alert("Xóa thành công");
    setCustomer(temp);
  };

  const handleDeleteDiscount = async (id) => {
    await api.deleteDiscount(id);
    const temp = await api.getAllDiscounts();
    alert("Xóa thành công");
    setDiscounts(temp);
  };

  useEffect(() => {
    getDiscounts();
    getCustomers();
  }, []);

  const router = useRouter();

  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8 font-mono">
              <label className=" font-semibold text-2xl text-black p-7 pt-24">
                Quản lý mua bán
              </label>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
              <Tabs.Item active title="Quản lý đơn hàng" className="bg-red-300">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-36 pl-96 "
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
                      onClick={() => router.push("/salesmanagement/billCreate")}
                    >
                      <FileText style={{ marginRight: 3 }} />
                      Tạo hóa đơn
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
                      <Table.HeadCell>Mã đơn hàng</Table.HeadCell>
                      <Table.HeadCell>Tên khách hàng</Table.HeadCell>
                      <Table.HeadCell>Tên nhân viên</Table.HeadCell>
                      <Table.HeadCell>Ngày thanh toán</Table.HeadCell>
                      <Table.HeadCell>Tổng tiền</Table.HeadCell>
                      <Table.HeadCell>Ghi chú</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {sampleBills.map((bill, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-100">
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-2.5 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="w-1/10">
                              {bill.saleBilId}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {bill.customerName}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {bill.staffName}
                            </Table.Cell>
                            <Table.Cell className="text-right">
                              {bill.paymentDate}
                            </Table.Cell>
                            <Table.Cell className="text-right">
                              {bill.billPrice}
                            </Table.Cell>
                            <Table.Cell className="w-1/5">
                              {bill.note}
                            </Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
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
              <Tabs.Item title="Quản lý khách hàng">
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
                      id="email4"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                  {/* <div className=" flex fixed right-1 pr-1">
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                      onClick={() => alert("hihi")}
                    >
                      <FileText style={{ marginRight: 3 }} />
                      Tạo hóa đơn
                    </Button>
                  </div> */}
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
                      <Table.HeadCell>Mã khách hàng</Table.HeadCell>
                      <Table.HeadCell>Tên khách hàng</Table.HeadCell>
                      <Table.HeadCell>Số điện thoại</Table.HeadCell>
                      <Table.HeadCell>Địa chỉ</Table.HeadCell>
                      <Table.HeadCell>Hạng thành viên</Table.HeadCell>
                      <Table.HeadCell>Điểm thành viên</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {customers.map((customer, index) => {
                      const adddr =
                        customer.address[0]?.soNha +
                        ", " +
                        customer.address[0]?.phuong +
                        ", " +
                        customer.address[0]?.quan +
                        ", " +
                        customer.address[0]?.tinh;
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-100">
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1/16 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="w-1/16">
                              {customer.customerId}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {customer.name}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {customer.phone}
                            </Table.Cell>
                            <Table.Cell>{adddr}</Table.Cell>
                            <Table.Cell className="w-1/10">
                              {customer.badge}
                            </Table.Cell>
                            <Table.Cell className="w-1/8 text-right">
                              {customer.point}
                            </Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/salesmanagement/updatecustomer/${customer.customerId}`
                                    )
                                  }
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteCustomer(customer.customerId)
                                  }
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
              <Tabs.Item title="Quản lý chương trình khuyến mãi">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-44 pl-96 "
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
                        router.push("/salesmanagement/discountEventDetail/add")
                      }
                    >
                      <Gift style={{ marginRight: 3 }} />
                      Thêm khuyến mãi
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
                      <Table.HeadCell>Mã giảm giá</Table.HeadCell>
                      <Table.HeadCell>Tên chương trình</Table.HeadCell>
                      <Table.HeadCell>Chiết khấu</Table.HeadCell>
                      <Table.HeadCell>Ngày bắt đầu</Table.HeadCell>
                      <Table.HeadCell>Ngày kết thúc</Table.HeadCell>
                      <Table.HeadCell>Điều kiện</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {discounts.map((discount, index) => {
                      let conditionStr = "";
                      if (
                        discount.minimumBillValue !== null &&
                        discount.minimumBillValue / 1000000 > 1
                      ) {
                        conditionStr =
                          "Hóa đơn trên " +
                          discount.minimumBillValue / 1000000 +
                          " triệu";
                      } else if (
                        discount.minimumBillValue !== null &&
                        discount.minimumBillValue / 1000 > 1
                      ) {
                        conditionStr =
                          "Hóa đơn trên " +
                          discount.minimumBillValue / 100000 +
                          " trăm nghìn";
                      } else {
                        conditionStr =
                          "Hóa đơn trên " +
                          discount.minimumBillValue / 1000 +
                          " nghìn";
                      }
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-100">
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="w-1/16 px-3 py-2">
                              {discount.discountId}
                            </Table.Cell>
                            <Table.Cell className="w-1/6 px-3 py-2">
                              {discount.discountName}
                            </Table.Cell>
                            <Table.Cell className="w-1/8 px-3 py-2 text-right">
                              {discount.discountPercent + "%"}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2 text-right">
                              {discount.startDate}
                            </Table.Cell>
                            <Table.Cell className="w-1/10 px-3 py-2 text-right">
                              {discount.endDate}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2">
                              {conditionStr}
                            </Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/salesmanagement/discountEventDetail/${discount.discountId}`
                                    )
                                  }
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteDiscount(discount.discountId)
                                  }
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
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SalesManagement;
