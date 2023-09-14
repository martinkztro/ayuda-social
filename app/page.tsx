import { Directus } from '@directus/sdk';
import directus from '../lib/directus';

export default async function HomePage(){
  //   const data = directus.use(rest()).use(graphql());
  // // @ts-ignore
  //   const global = await data.request(readItems<Schema>('Globals'));
    const client = await directus.auth.login({
        email:'ricardo.estrada.leon@gmail.com',
        password:'Chacaman2'
    });
    if(client){
        console.log(client);
        return (
            <>
                <h1>{ client.email }</h1>
                <p>{ client.password }</p>
                {/*<p>{ client.access_token }</p>*/}
            </>
        );
    } else {
        console.log('Not Logged');
        return(
            <>
                <h1>Not Logged In</h1>
            </>
        );
    }

}