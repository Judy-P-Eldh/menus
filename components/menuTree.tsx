import { MenuItemWithChildren } from "@/lib/interfaces";

export default function menuTree(items: MenuItemWithChildren[]) {
    return (
      <ul className="list list-disc pl-6 mb-8">
        {items.map(item => (
          <li key={item.id} className="mb-1 ml-4">{item.title}
            {item.children.length > 0 && menuTree(item.children)}
          </li>
        ))}
      </ul>
    );
  }