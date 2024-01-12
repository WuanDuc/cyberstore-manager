"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme,Card, TextInput,Label, Tabs, Checkbox, Datepicker, FileInput } from "flowbite-react";
import { Console, error } from "console";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import moment from "moment";
import api from "@/apis/Api";

export default function AddRepairManagement( {params}) {
    const router = useRouter();
    const {id } = params;
    const [sale, setSale] = useState(0);
    const [repairOrder, setRepairOrder] = useState({
        appointmentDate: moment().format("YYYY-MM-DD"),
        bugDetail:"",   
        customerId:"", 
        customerName:"",
        customerNumber:"",       
        productName:""   ,  
        receiptDateL:moment().format("YYYY-MM-DD") ,    
        repair:"",       
        repairOrderId:"",       
        staffId:"",
        warrantyId:"",
        price:"",
    });
    const handleChange = (e) => {
        console.log(e.target.name);
        setRepairOrder({ ...repairOrder, [e.target.name]: e.target.value });
      };
      const handleAddRepairOrdert = async () => {
        const newRepairOrder = repairOrder;

        let Id = "";
        await api.addRepairOrder(newRepairOrder).then((docId) => {
          Id = docId;
        });
        newRepairOrder.repairOrderId = Id;
        await api.updateRepairOrder(newRepairOrder, Id);
        console.log(newRepairOrder);
        setRepairOrder(newRepairOrder);
        alert("Thêm thành công");
        router.back();
      };
      const handleOnClick =async () => {
        const w = await api.getWarrantyCertificateById(repairOrder.warrantyId)
        .then((value) => {
            setSale(100);
        }).catch((error) => alert("Không có thẻ bảo hành!"));
        
    }
      const handleUpdateRepairOrder = async () => {
        const newRepairOrder = repairOrder;
        console.log(newRepairOrder);
          await api.updateRepairOrder(repairOrder, repairOrder.repairOrderId);
          setRepairOrder(newRepairOrder);
          alert("Cập nhật thành công");
          router.back();
      };
      const getRepairOrder = async () => {
        console.log(id);
        const recentRepairOrder = await api.getRepairOrderById(id);
        console.log(recentRepairOrder);
        // document.getElementById("name").innerHTML = recentProduct.name || "";;
        setRepairOrder(recentRepairOrder);
      };
      useEffect(()=> {
        if (id !== "add"){
            getRepairOrder();
        }
      }, []);
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-11 ">
                Quản lý sửa chữa máy{ " "}
                <span className="text-2xl text-black font-bold">
                    {">"} {id == "add"} Phiếu sửa chữa
                </span>
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
                         value={repairOrder.warrantyId} onChange={handleChange} name="warrantyId" placeholder="Mã phiếu bảo hành" required className=" float-left">

                         </TextInput>
                        <Button theme={THEME.buttonTheme} color="info" className=" float-right"
                         id="checkdtbbtn" type="button" size="md" onClick={handleOnClick}>Tra cứu</Button>
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
                      }} value={repairOrder.productName} id="Tên máy" name="productName" onChange={handleChange} required placeholder="Tên máy"/>
                    </div>

                    <div className="mb-2 block">
                        <label className=" text-black font-semibold" htmlFor="conver3" > Chi tiết</label>
                    </div>
                    <TextInput value={repairOrder.bugDetail} name="bugDetail" onChange={handleChange} id="conver3" required sizing="lg" style={{backgroundColor: "white", color: "black"}}></TextInput>
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
                            value={repairOrder.repairOrderId} id="conver4" name="repairOrderId" onChange={handleChange} placeholder="HSDV" disabled readOnly/>
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
                          }} id="conver5" value={repairOrder.customerName} name="customerName" onChange={handleChange} required placeholder="Tên khách hàng"/>
                        </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver6" > Số điện thoại</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                            width: 450,
                          }} value={repairOrder.customerNumber} type="number" id="conver6" name="customerNumber" onChange={handleChange} required placeholder="Số điện thoại"/>

                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="date" > Ngày hẹn</label>
                            <input
                        style={{
                          backgroundColor: "white",
                          borderColor: "gray",
                          borderWidth: 1,
                          marginTop: 5,
                          height: 45,
                          borderRadius: 10,
                          color: "black",
                        }}
                        disabled
                        name="receiptDateL"
                        value={moment(repairOrder?.receiptDateL).format(
                          "YYYY-MM-DD"
                        )}
                        onChange={handleChange}
                        type="date"
                        min={moment().format("YYYY-MM-DD")}
                      />
                        </div>
                        <div className="mb-2 block">
                            <label className=" text-black font-semibold" htmlFor="conver7" > Thành tiền</label>
                        </div>
                            <TextInput style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: "black",
                          }} value={sale === 0 ? repairOrder.price : 0} type="number" id="conver7" name="price" onChange={handleChange} icon={MdOutlineAttachMoney} disabled={sale === 100? true:false} required placeholder="0" defaultValue={0}/>

{id == "add" ? (
                    <Button
                      className=" mt-3 w-44"
                      type="submit"
                      id="addSProduct"
                      onClick={handleAddRepairOrdert}
                    >
                      Thêm phiếu
                    </Button>
                  ) : (
                    <Button
                      className=" mt-3  w-44"
                      type="submit"
                      id="updateProduct"
                      onClick={handleUpdateRepairOrder}
                    >
                      Cập nhật
                    </Button>
                  )}                    </form>
                
                    
                    </div>
    
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
