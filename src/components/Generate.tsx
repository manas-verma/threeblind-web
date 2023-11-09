"use client";
import { client } from "@/client";
import { useSettings } from "@/hooks/useSettings";
import { Memo } from "@/types";
import { useState } from "react";

export function Generate() {
  const { settings } = useSettings();
  const [scramble, setScramble] = useState<string>("");
  const [memo, setMemo] = useState<Memo>({
    edges: [],
    corners: [],
    parity: false,
  });

  const onChange = (scramble: string) => {
    setScramble(scramble);
  };

  const onClick = async () => {
    const { memo } = await client.memo.create({
      scramble,
      ...settings,
    });
    setMemo(memo);
  };

  return (
    <div className="border-white p-5 space-y-4 w-full">
      <div className="flex flex-col items-center justify-center w-full h-full border-white">
        Scramble
      </div>
      <input
        className={`w-full bg-transparent text-center text-lg text-white`}
        value={scramble}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="flex flex-col items-center justify-center w-full h-full border-white"
        onClick={onClick}
      >
        Generate Memo
      </button>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {memo.edges.join(" ")}
        <br/>
        {memo.corners.join(" ")}
      </div>
    </div>
  );
}
