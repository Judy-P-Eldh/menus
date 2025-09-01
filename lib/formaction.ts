'use server';
import { promises as fs } from 'fs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/data/menu.json');

export async function getMenuItems() {
    try {
        const json = await fs.readFile(filePath, 'utf8');
        return json ? JSON.parse(json) : [];
    } catch {
        return [];
    }
}

export async function addMenuItem(formData: FormData) {
 
    const item = formData.get('addItem')?.toString() ?? '';
    const parentId = formData.get('parentId');
    const parentIdNumber = parentId ? Number(parentId) : undefined;

    let data = await getMenuItems();

    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push({ id: newId, title: item, parentId: parentIdNumber });

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    redirect("/");
}
