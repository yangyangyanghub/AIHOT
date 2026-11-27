// What the site's modules add to the web pages (site/modules/index.ts).
import type { WebModule } from "@aihot/web/modules";
import { aiNewsWebModule } from "@aihot/ai-news/web";
import { deptNavWebModule } from "@aihot/dept-nav/web";

export const WEB_MODULES: readonly WebModule[] = [aiNewsWebModule, deptNavWebModule];
