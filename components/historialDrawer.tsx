'use client'
import React, {FC, useState} from 'react'
import {Drawer, Table} from "antd";

interface HistorialDrawer {
      data:Array<any>;
      id: number;
}

// interface innerData {
//     nombre: string;
//     edad: number;
// }

const columns = [
    {
        title: 'Ayuda Solicitada',
        dataIndex: 'ayuda_solicitada',
        key: 'ayuda_solicitada'
    },
    {
        title: 'Discapacidad',
        dataIndex: 'discapacidad',
        key: 'discapacidad'
    },{
        title: 'Descripcion Discapacidad',
        dataIndex: 'descipcion_discapacidad',
        key: 'descipcion_discapacidad'
    },{
        title: 'Nombre Solicitante',
        dataIndex: 'nombre_solicitante',
        key: 'nombre_solicitante'
    },{
        title: 'Edad Solicitante',
        dataIndex: 'edad_solicitante',
        key: 'edad_solicitante'
    },{
        title: 'Fecha Solicitud',
        dataIndex: 'fecha',
        key: 'fecha'
    },{
        title: 'Estado Solicitud',
        dataIndex: 'status',
        key: 'status'
    }
]

const HistorialDrawer: FC<HistorialDrawer> = ({id, data }) => {

    // const directus
    // console.log(data)

    const filteredObject = data.filter(item => item.id_solicitante === id);

    // console.log(filteredObject);


    return (
      <>
          <Table dataSource={filteredObject} columns={columns} />
      </>
    )
}

export default HistorialDrawer