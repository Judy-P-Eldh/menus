import AddForm from "@/components/addform";
import ShowMenu from "@/components/showMenu";
import { addMenuItem, getMenuItems } from "@/lib/formaction";

export default async function Home() {
  const menuItems = await getMenuItems() ?? [];

  return (
    <div className="w-full min-h-screen p-8 bg-cyan-950">
      <header className="fixed top-0 z-90 left-0 w-full">
        <nav className="flex items-center justify-center gap-4 h-16">
           <h1 className="justify-self-center text-xl mt-8">Välkommen till Menus</h1>
        </nav>
      </header>
      <main className="w-full mt-40 px-20">
        <p>Skapa övermeny och undermenyer. Du ser resultatet nedanför.</p>
       
       <AddForm menuItems={menuItems} addMenuItem={addMenuItem} />

        <section id="hierarki" className="justify-self-center my-16">
          <h2 className="text-lg py-4 font-semibold">Detta är din menystruktur</h2>
          <ul>
           <ShowMenu menuItems={menuItems} />
          </ul>
        </section>
      </main>
    </div>
  );
}
