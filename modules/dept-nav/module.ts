import { defineModule } from "@aihot/contracts/modules";

export const deptNavModule = defineModule({
  name: "dept-nav",
  pages: [{ path: "departments", file: "web/departments.tsx", id: "departments" }],
});