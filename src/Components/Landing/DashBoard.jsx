import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap'
import LineChart from '../LineChart/LineChart'
import PieChart from '../LineChart/PieChart'
import DynamicTable from '../../assets/Custom/DynamicTable'
import DynamicList from '../../assets/Custom/DynamicList'
import { FaClipboardCheck, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'
import Widget from '../../assets/Custom/Widget'

import CashIcon from "../../assets/Images/Widget/cash-svgrepo-com.svg"
import DeliveryIcon from "../../assets/Images/Widget/delivery-movement-svgrepo-com.svg"
import ManIcon from "../../assets/Images/Widget/man-svgrepo-com.svg"
import DynamicAntTable from '../../assets/Custom/DynamicAntTable'

const DashBoard = () => {

    /*
    let graph = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Line 1',
                data: [33, 59, 80, 81, 56],
                borderColor: 'rgb(181, 194, 252)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Line 2',
                data: [48, 40, 55, 60, 70],
                borderColor: 'rgb(78, 83, 111)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    }

    let BarGraphs = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Case',
                data: [100, 20, 40, 81, 56, 33, 72, 60, 45, 88, 55, 90],
                borderColor: '#3d4461',
                backgroundColor: '#59679c',
            }
        ],
    }
                */

    let [option, setOption] = useState("Poultry Farm");

    let [widgets, setWidgets] = useState([
        {
            Name: 'Cash Sale',
            value: 1,
            symbol: '#',
            symbolLocation: 'prefix',
            icon: CashIcon,
            version: 2,
            extra: "themeGreen"
        },
        {
            Name: 'Delivery',
            value: 11000,
            symbol: 'Rs',
            symbolLocation: 'prefix',
            icon: DeliveryIcon,
            version: 2,
            extra: "themeOrange"
        },
        {
            Name: 'IKRAM',
            value: 10,
            symbol: '#',
            symbolLocation: 'prefix',
            icon: ManIcon,
            version: 2,
            extra: "DefaultTheme"
        },
        {
            Name: 'ISLAM',
            value: 23,
            symbol: '#',
            symbolLocation: 'prefix',
            icon: ManIcon,
            version: 2,
            extra: "DefaultTheme"
        }
    ])

    let headings = [
        { label: "No#", attribute: "index", },
        { label: "Date", attribute: "date", },
        { label: "House Number", attribute: "houseNumber", },
        { label: "Phone Number", attribute: "phoneNumber", },
        { label: "Time", attribute: "time", },
        { label: "Status", attribute: "status", },

        {
            label: "Operations", attribute: "Operations", options: [
                {
                    action: "edit",
                    label: "Edit",
                    icon: <FaEdit />

                },
                {
                    action: "update",
                    label: "Update",
                    icon: <FaClipboardCheck />
                },
            ]
        },
    ];

    let data = [
        {
            index: 1,
            date: "2024-12-01",
            houseNumber: "1234-D",
            phoneNumber: "0300-1234567",
            time: "10:00 AM",
            status: "Delivered",
        },
        {
            index: 2,
            date: "2024-12-02",
            houseNumber: "5678",
            phoneNumber: "0300-7654321",
            time: "12:30 PM",
            status: "Pending",
        },
        {
            index: 3,
            date: "2024-12-03",
            houseNumber: "91011",
            phoneNumber: "0300-9876543",
            time: "3:15 PM",
            status: "In Progress",
        },
        {
            index: 4,
            date: "2024-12-04",
            houseNumber: "1213",
            phoneNumber: "0300-1122334",
            time: "9:00 AM",
            status: "Cancelled",
        }
    ];

    let NewAppointmentHandling = (Heading, row, action) => {
    }

    let TodaysAppointmentHandling = (Heading, row, action) => {
    }

    const menuItems = [
        {
            action: "edit",
            label: "Edit",
            icon: <FaEdit />,
            onClick: (heading, row) => CallBack(heading, row, "Edit")
        },
        {
            action: "markDone",
            label: "Mark Done",
            icon: <IoIosCheckmarkCircle />,
            onClick: (heading, row) => CallBack(heading, row, "MarkDone")
        },
        {
            action: "cancel",
            label: "Cancel",
            icon: <MdCancel />,
            onClick: (heading, row) => CallBack(heading, row, "Cancel")
        },
        {
            action: "delete",
            label: "Delete",
            icon: <FaTrashAlt />,
            onClick: (heading, row) => CallBack(heading, row, "Delete")
        }
    ];

    let CallBack = (elem) => {
        alert(elem)
        setOption(elem);

        switch (elem) {
            case "Cash Sale":
                //Function to store Data for Walk-In-Customer
                break;
            case "Delivery":
                // Function to Open Delivery Details Module
                break;
            case "IKRAM":
                // Function to store 1 Bottle of IKRAM
                break;
            case "ISLAM":
                // Function to store 1 Bottle of ISLAM
                break;

            default:
                console.log("kuch Nahi chala");
                break;
        }
    }


    return (
        <div className='container-fluid p-0'>

            <Row className='align-items-stretch mb-3'>
                <div className='col-md-12'>
                    <Widget allWidget={widgets} setOption={CallBack} />
                </div>
            </Row>
            <Row className='align-items-stretch'>
                {/*
                    <div className='col-md-7'>
                    <Card className={"shadow"}>
                    <LineChart lineChartData={graph} />
                    </Card>
                    </div>
                    <div className='col-md-5'>
                    <Card className={"shadow"}>
                    <PieChart lineChartData={BarGraphs} />
                    </Card>
                    </div>
                    */}

                <div className='col-md-8'>
                    <Card className={"shadow p-3"} style={{ maxHeight: "80vh" }}>
                        <h4 className='Head1 mb-4'>All Orders</h4>
                        {/*
                            <DynamicAntTable
                            CallBack={NewAppointmentHandling} menuItems={menuItems} headings={headings} data={data}
                            />
                            */}
                        <DynamicTable CallBack={NewAppointmentHandling} menuItems={menuItems} headings={headings} data={data} />
                    </Card>
                </div>

                <div className='col-md-4' >
                    <Card className={"shadow p-3"} style={{ maxHeight: "80vh" }}>
                        <h4 className='Head1 mb-4'>Account Details</h4>
                        <div className='table-responsive'>
                            <DynamicList skipUpTill={4} CallBack={TodaysAppointmentHandling} headings={headings} data={data} listConcatenationArray={["houseNumber"]} />
                        </div>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

export default DashBoard
