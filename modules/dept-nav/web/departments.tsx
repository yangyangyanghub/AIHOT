import { Link } from "react-router";
import { SITE } from "@aihot/site";
import type { Screen } from "@aihot/web/components/shell/screens";

export const handle: Screen = { tab: "me", name: "部门导航" };

const LEVELS = ["国家", "河北省", "邯郸市"] as const;

const DEPARTMENTS: Array<{ slug: string; label: string; tag: string; group: string }> = [
  { slug: "natural-resources", label: "自然资源", tag: "自然资源", group: "资源环境" },
  { slug: "forestry-grassland", label: "林业", tag: "林业", group: "资源环境" },
  { slug: "ecology-environment", label: "生态环境", tag: "生态环境", group: "资源环境" },
  { slug: "water-resources", label: "水利", tag: "水利", group: "资源环境" },
  { slug: "housing-urban-rural", label: "住建", tag: "住建", group: "城乡建设" },
  { slug: "transport", label: "交通运输", tag: "交通运输", group: "城乡建设" },
  { slug: "development-reform", label: "发改", tag: "发改", group: "经济产业" },
  { slug: "industry-information", label: "工业和信息化", tag: "工信", group: "经济产业" },
  { slug: "science-technology", label: "科学技术", tag: "科学技术", group: "经济产业" },
  { slug: "agriculture-rural", label: "农业农村", tag: "农业农村", group: "经济产业" },
  { slug: "data-government-service", label: "数据和政务服务", tag: "数据和政务服务", group: "民生与政务" },
  { slug: "human-resources", label: "人社", tag: "人社", group: "民生与政务" },
  { slug: "general-government", label: "综合政务", tag: "综合", group: "民生与政务" },
];

const GROUPS = ["资源环境", "城乡建设", "经济产业", "民生与政务"] as const;

export function meta() {
  return [
    { title: `部门导航 · ${SITE.name}` },
    { name: "description", content: "按部门与国家/省/市层级浏览最新政策、新闻与培训考试。" },
    { property: "og:title", content: `部门导航 · ${SITE.name}` },
    { property: "og:type", content: "website" },
  ];
}

const chipBase = "rounded-control px-3 py-1.5 text-[13px] font-semibold transition-colors";
const chipIdle = "border border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink";

export default function DepartmentsPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] px-4 pb-20 pt-6 xl:px-6">
      <header className="border-b border-line pb-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-4">DEPARTMENTS × LEVELS</div>
        <h1 data-page-title="" className="mt-2 text-[30px] font-black leading-[1.2] tracking-[-0.02em] text-ink sm:text-[38px]">
          部门导航
        </h1>
        <p className="mt-3 max-w-[48em] text-[14.5px] leading-[1.8] text-ink-3">
          按部门浏览国家、河北省、邯郸市三级的最新政策、新闻与培训考试。点击部门进入该部门全部动态，或用下方层级快捷筛选。
        </p>
      </header>

      <section className="mt-6" aria-label="按层级浏览">
        <div className="mb-2 text-[13px] font-semibold text-ink-2">按层级看全部部门</div>
        <div className="flex flex-wrap items-center gap-2">
          {LEVELS.map((level) => (
            <Link key={level} to={`/all?tag=${encodeURIComponent(level)}`} className={`${chipBase} ${chipIdle}`}>
              {level}
            </Link>
          ))}
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = DEPARTMENTS.filter((d) => d.group === group);
        if (!items.length) return null;
        return (
          <section key={group} className="mt-8">
            <h2 className="mb-3 text-[15px] font-bold text-ink">{group}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((d) => (
                <div key={d.slug} className="rounded-card border border-line bg-surface p-4">
                  <Link to={`/topics/${d.slug}`} className="text-[16px] font-bold text-ink transition-colors hover:text-accent">
                    {d.label}
                  </Link>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
                    {LEVELS.map((level) => (
                      <Link
                        key={level}
                        to={`/all?tag=${encodeURIComponent(d.tag)}`}
                        className="rounded-mark bg-accent-softer px-1.5 py-0.5 font-semibold text-accent hover:underline"
                        title={`${d.label} · 按部门查看（再用层级筛选 ${level}）`}
                      >
                        {level}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <footer className="mt-10 border-t border-line pt-4 text-[12px] leading-[1.8] text-ink-4">
        层级筛选与部门页均基于已采集的部门信源；暂无信源的部门/层级会显示“征集中”。内容版权归原发布单位，本站仅展示标题与摘要索引并保留原文链接。
      </footer>
    </div>
  );
}