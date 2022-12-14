import type { RouteT } from "@/types/types";

export const format_route_tree = (data: RouteT[]): RouteT[] => {
  const parents = data.filter((d) => d.pid === 0);
  const children = data.filter((d) => d.pid !== 0);

  data_to_tree(parents, children);

  return parents;
};
function data_to_tree(parents: RouteT[], children: RouteT[]) {
  parents.map((parent) => {
    children.map((child) => {
      if (parent.id === child.pid) {
        const _children: RouteT[] = JSON.parse(JSON.stringify(children));
        data_to_tree([child], _children);
        if (parent.children) {
          parent.children.push(child);
        } else {
          parent.children = [child];
        }
      }
    });
  });
}
