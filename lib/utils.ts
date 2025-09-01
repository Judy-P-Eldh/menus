import { MenuItem, MenuItemWithChildren } from "./interfaces";

export function findParentTitle(item: MenuItem, items: MenuItem[]) {
  if (!item.parentId) return null;
  const parent = items.find(i => i.id === item.parentId);
  return parent ? parent.title : null;
}

export function buildMenuTree(menuItems: MenuItem[], parentId: number | null = null): MenuItemWithChildren[] {
  return menuItems
    .filter(item => (parentId === null ? !item.parentId : item.parentId === parentId))
    .map(item => ({
      ...item,
      children: buildMenuTree(menuItems, item.id),
    }));
}



