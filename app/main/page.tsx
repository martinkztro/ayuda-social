import React from 'react';
import Cards from "@/components/cards";
import { Directus } from "@directus/sdk";

export default async function Home()  {
    const client = new Directus(process.env.DIRECTUS_URL as string);
    const directus = await client.auth.login({
            email:'ricardo.estrada.leon@gmail.com',
            password:'Chacaman2'
        });
    const itemsSolicitante = await directus.items('beneficiario').readByQuery({limit:-1});
    const dataSolicitante = itemsSolicitante.data;

    const itemsHistorialTemp = await directus.items('solicitud').readByQuery({limit:-1});
    const dataHistorialTemp = itemsHistorialTemp.data;

    // console.log(dataSolicitante);

    const renderedElements = [];
    dataSolicitante.forEach((item) => {
        renderedElements.push(
            <Cards key={item.id} id={item.id} nombre={item.nombre} apellido={item.apellido} colonia={item.colonia} edad={item.edad} directusData={dataSolicitante} directusHistorial={dataHistorialTemp}/>
        );
    });

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-5/6 w-4/5 mx-auto">
                {renderedElements}
            </div>
        </div>
    );
}