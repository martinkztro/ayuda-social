import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const { data: clients } = await supabase.from('clients').select('*');

  if (session === null) {
    redirect('/login');
  } else if (session !== null) {
    redirect('/');
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-green-700">Home Page</h1>
      <pre>
        <ul>
          {clients.map((client) => (
            <div className="mx-auto">
              <div className="mx- auto p-6 text-center" key={client.id}>
                <h1 className="text-purple-800 font-black">{client.name}</h1>
                <h2 className="text-blue-600 font-semibold">{client.city}</h2>
                <h3 className="text-yellow-500 font-bold">{client.status}</h3>
              </div>
            </div>
          ))}
        </ul>
      </pre>
    </div>
  );
}