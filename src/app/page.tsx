import { Terminal } from "@/components/Terminal";
import { Background } from "@/components/Background";

export default function Home() {
  return (
    <>
      <Background />
      <main className="container mx-auto p-4 pt-8 relative z-10">
        <Terminal />
      </main>
    </>
  );
}
