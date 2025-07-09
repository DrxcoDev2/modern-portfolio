
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="bg-black relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: 'string'}
        ]} />
        <Grid />
      </div>
    </main>
  );
}
