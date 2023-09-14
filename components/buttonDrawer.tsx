'use client'

import {Avatar, Button, Drawer, Input} from "antd";
import {LogoutOutlined, MenuOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";

const buttonDrawer = ({}) => {

    const [ open, setOpen ] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const logoutUser = () => {
        window.alert("Logged Out")
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSearch = (value: string) => console.log(value);

    const user = "Teleton"
    const Search = Input

    return (
        <>
            <div>
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

        </>
    )
}

export default buttonDrawer