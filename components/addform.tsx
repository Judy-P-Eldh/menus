"use client";
import { AddFormProps } from "@/lib/interfaces";
import { addMenuItem } from "@/lib/formaction";


export default function AddForm({ menuItems }: AddFormProps) {
    return (
        <form className="mt-8 p-8 mx-auto flex justify-items-center align-items-center gap-2 sm:flex-col md:flex-row"
            action={addMenuItem}
        >
            <select name="parentId" defaultValue="" className="p-2 rounded border border-gray-300">
                <option value="">Välj övermeny</option> 
                {(menuItems ?? []).map(item => (
                    <option className="bg-amber-800" key={item.id} value={item.id}>{item.title}</option>
                ))}
            </select>
            <input
                className="p-2 mr-2 rounded border border-gray-300 flex-grow"
                id="additem"
                name="addItem"
                type="text"
                placeholder="Lägg till t.ex: Produkter"
                required
            />
            <button type="submit" className="p-2 mx-2 bg-amber-800 hover:bg-amber-950 text-white rounded">
                Lägg till
            </button>
        </form>
    );
}
