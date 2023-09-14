// import {createDirectus} from "@directus/sdk";
//
// type Beneficiario = {
//     id: number;
//     user_created: string;
//     date_created: string;
//     user_updated: string;
//     date_updated: string;
//     nombre: string;
//     apellido: string;
//     edad: number;
//     domicilio: string;
//     colornia: string;
//     sexo: string;
//     edo_civil: string;
//     fecha_nacimiento: string;
//     lugar_nacimiento: string;
//     telefono: number;
//     servicios_medicos: string;
//     lugar_trabajo: string;
//     escolaridad: string;
//     ingresos: number;
//     nombre_familiar: string;
//     edad_familiar: number;
//     sexo_familiar: string;
//     parentesco: string;
//     escolaridad_familiar: string;
//     ocupacion: string;
//     sueldo: number;
//     apoyo_recibido: string;
//     edo_vulnerabilidad: string;
//     observaciones: string;
// }
//
// export const getSolicitante = async (data: Array<any>) => {
//     const directus = createDirectus()
//
//     console.log(directus.auth.token);
//
//     // AUTHENTICATION
//
//     let authenticated = directus.auth;
//
//     // Try to authenticate with token if exists
//     await directus.auth
//         .refresh()
//         .then(() => {
//             authenticated = true;
//         })
//         .catch(() => {});
//
//     // Let's login in case we don't have token or it is invalid / expired
//     while (!authenticated) {
//         const email = window.prompt('Email:');
//         const password = window.prompt('Password:');
//
//         await directus.auth
//             .login({ email, password })
//             .then(() => {
//                 authenticated = true;
//             })
//             .catch(() => {
//                 window.alert('Invalid credentials');
//             });
//     }
//
//     // GET DATA
//
//     // After authentication, we can fetch data from any collections that the user has permissions to.
//     // const privateData = await directus.items('beneficiario').readByQuery({ sort: ['id'] });
//
//     // console.log(privateData.data);
// }