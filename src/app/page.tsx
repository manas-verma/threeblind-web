import { MemoGen } from "@/components/MemoGen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <MemoGen />
        </div>
      </div>
    </main>
  );
}
