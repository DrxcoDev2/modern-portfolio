"use client";



import { navItems } from "@/data";


import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const FloatingNav = dynamic(() =>
  import("@/components/ui/FloatingNav").then((mod) => mod.FloatingNav)
);
const CoomingSoon = dynamic(() =>
  import("@/components/CoomingSoon").then((mod) => mod.BackgroundBeamsWithCollisionDemo)
);
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Country = dynamic(() => import("@/components/Country"), {
  ssr: false,
});




export default function Home() {
  return (
    <main className="bg-black relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <DynamicHero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects></RecentProjects>
        <Country></Country>
        <CoomingSoon></CoomingSoon>
      </div>
    </main>
  );
}
