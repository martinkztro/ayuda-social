'use client'
import React, {FC, useState} from 'react'
import {Button, Drawer, Dropdown, MenuProps} from "antd";
import {SmallDashOutlined} from "@ant-design/icons";
import HistorialDrawer from "@/components/historialDrawer";
import NuevaSolicitud from "@/components/nuevaSolicitud";
import {Directus} from "@directus/sdk";

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">Editar</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">Borrar</a>,
        key: '1',
    }
];

interface CardsProps {
    id: number;
    nombre: string;
    apellido: string;
    colonia: string;
    edad: number;
    directusData: Array<any>;
    directusHistorial: Array<any>;
}

const Cards: React.FC<CardsProps> = ({ id, nombre, apellido, colonia, edad, directusData, directusHistorial }) => {

    const [historialD, setHistorialD] = useState(false);
    const [nuevaSolicitud, setNuevaSolicitud] = useState(false);

    const directusInner = directusData;
    const directusHistorialInner = directusHistorial;
    // console.log(directusHistorialInner);

    const setOpenHistorialD = () => {
        setHistorialD(true)
    };

    const setCloseHistorialD = () => {
        setHistorialD(false)
    };

    const setOpenSolicitud = () => {
        setNuevaSolicitud(true)
    };

    const setCloseSolicitud = () => {
        setNuevaSolicitud(false)
    };

    // export const setExternalCloseSolicitud = () => {
    //     setNuevaSolicitud(false)
    // }

    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Button type="text">
                                <SmallDashOutlined />
                            </Button>
                        </a>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{nombre} {apellido}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{colonia}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{edad}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Button
                            onClick={setOpenSolicitud}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Nueva Solicitud
                        </Button>
                        <Button
                            onClick={setOpenHistorialD}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        >
                            Historial
                        </Button>
                    </div>
                </div>
            </div>
            <Drawer
                title="Historial"
                placement="right"
                width={1000}
                closable={true}
                // maskClosable={false}
                open={historialD}
                onClose={setCloseHistorialD}
                footer={
                    <Button
                        className="bg-blue-800"
                        type="primary"
                        onClick={setCloseHistorialD}
                    >Cerrar</Button>
                }
            >
                <HistorialDrawer id={id} data={directusHistorialInner}/>
            </Drawer>
            <Drawer
                title="Nueva Solicitud"
                placement="right"
                width={900}
                closable={true}
                maskClosable={false}
                open={nuevaSolicitud}
                onClose={setCloseSolicitud}
                footer={
                    <Button
                        className="bg-blue-800"
                        type="primary"
                        onClick={setCloseSolicitud}
                    >Cerrar</Button>
                }
            >
                <NuevaSolicitud id={id} data={directusInner} onClose={setCloseSolicitud}/>
            </Drawer>
        </>
    );
};



export default Cards;