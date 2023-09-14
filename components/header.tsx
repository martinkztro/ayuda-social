'use client'
import {Avatar, Button, Drawer, Input} from "antd";
import React, {useState} from "react";
import {MenuOutlined, UserOutlined, LogoutOutlined, PlusOutlined} from "@ant-design/icons";
import NuevoBeneficiario from '../components/nuevoBeneficiario'

const HeaderComponent: React.FC = () => {
    const [ open, setOpen ] = useState(false);
    const [ openBeneficiarioNuevo, setOpenBeneficiarioNuevo ] = useState(false)

    const showDrawer = () => {
        setOpen(true);
    };

    const logoutUser = () => {
        window.alert("Logged Out")
    };

    const onClose = () => {
        setOpen(false);
    };

    const setOpenBeneficiario = () => {
        setOpenBeneficiarioNuevo(true)
    };

    const setCloseBeneficiario = () => {
        setOpenBeneficiarioNuevo(false)
    };

    const user = "Teleton"

    return (
        <>
            <div className="">
                <Button
                    type="text"
                    onClick={showDrawer}><MenuOutlined /></Button>
                <Drawer
                    title={user}
                    placement='left'
                    onClose={onClose}
                    open={open}>
                    <div className="flex flex-col content-between h-full">
                        <div className="flex justify-center align-middle">
                            <div className="flex flex-col align-middle justify-center items-center">
                                <Avatar size={64} icon={<UserOutlined/>}/>
                                <h1 className="text-2xl text-gray-800">{user}</h1>
                            </div>
                        </div>
                        <div className="grow">
                            <ul>
                                <li>Solicitantes</li>
                                <li>Notificaciones</li>
                            </ul>
                        </div>
                        <div className="flex self-baseline">
                            <Button
                                type="text"
                                onClick={logoutUser}>
                                <LogoutOutlined />
                            </Button>
                        </div>
                    </div>
                </Drawer>
            </div>
            <div className="grow mr-4 ml-4">
                <Input
                    placeholder="Search"
                />
            </div>
            <div>
                <Button
                    size="middle"
                    className="bg-green-600 text-white"
                    shape="circle"
                    onClick={setOpenBeneficiario}
                >
                    <PlusOutlined  style={{ display:"block" }} />
                </Button>
            </div>
            <Drawer
                title="Nuevo Beneficiario"
                placement='left'
                maskClosable={false}
                closable={true}
                onClose={setCloseBeneficiario}
                open={openBeneficiarioNuevo}
                width={900}
            >
                <NuevoBeneficiario onClose={setCloseBeneficiario} />
            </Drawer>
        </>
    );
}

export default HeaderComponent