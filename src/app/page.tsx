import { MemoGen } from "@/components/MemoGen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-2">
      <div className="text-xl font-bold">3BLD MEMO GENERATOR</div>
      <div className="text-lg">
        Fill in each sticker with your memo letter. If you want to swap edges
        during parity, add an underscore before the letter. For your buffer
        stickers, use a dash (-) instead of a letter. If you like to scramble
        with green-F and white-U, you can add an x2 cube rotation before your scramble.
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <MemoGen />
        </div>
      </div>
    </main>
  );
}
