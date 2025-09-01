export interface MenuItem {
    id: number;
    title: string;
    parentId?: number;
}
export type AddFormProps = {
  menuItems: MenuItem[];
  addMenuItem: (formData: FormData) => Promise<void>;
};

export type ShowMenuProps = {
  menuItems: MenuItemWithChildren[];
};

export type MenuItemWithChildren = MenuItem & { 
  children: MenuItemWithChildren[] 
};

