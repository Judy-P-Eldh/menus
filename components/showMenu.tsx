import { ShowMenuProps } from '@/lib/interfaces';
import { buildMenuTree } from '@/lib/utils';
import menuTree from './menuTree';

export default function ShowMenu({ menuItems }: ShowMenuProps) {
  const tree = buildMenuTree(menuItems);

  return (
    <div className="max-w-md mx-auto text-left">
      {menuTree(tree)}
    </div>
  );
}
