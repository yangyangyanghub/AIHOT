import type { NavItem } from "@aihot/web/components/shell/nav";
import { defineWebModule } from "@aihot/web/modules";

function DeptIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-5h6v5" />
    </svg>
  );
}

const entry: NavItem = { to: "/departments", label: "部门导航", icon: DeptIcon };

export const deptNavWebModule = defineWebModule({
  name: "dept-nav",
  sidebar: { section: "部门", items: [entry] },
  tools: [{ to: "/departments", label: "部门导航", icon: <DeptIcon size={18} /> }],
});