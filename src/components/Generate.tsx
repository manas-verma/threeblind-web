"use client";
import { client } from "@/client";
import { useSettings } from "@/hooks/useSettings";
import { Edge, Memo } from "@/types";
import { guard } from "radash";
import { useState } from "react";

function formatMemoString(memo: string[]): string {
  let result = "";

  for (let i = 0; i < memo.length; i += 2) {
    result += memo[i] + (memo[i + 1] ? memo[i + 1] : "");
    if (i < memo.length - 2) {
      result += " - ";
    }
  }

  return result;
}

export function Generate() {
  const { settings } = useSettings();
  const [scramble, setScramble] = useState<string>("scramble here...");
  const [isError, setIsError] = useState<boolean>(false);
  const [memo, setMemo] = useState<Memo>({
    edges: [],
    corners: [],
    parity: false,
  });

  const onChange = (scramble: string) => {
    setScramble(scramble);
  };

  const onClick = async () => {
    const parityEdges: Edge[] = [];
    Object.keys(localStorage).forEach((key) => {
      const value = localStorage.getItem(key);
      if (value === null || value === undefined || value === "") {
        return;
      }

      const { edge, corner } = guard(() => JSON.parse(key)) ?? {};
      const splitValues = value.split("_");
      const memoString = splitValues[splitValues.length - 1];
      if (
        value.startsWith("_") &&
        edge &&
        !parityEdges.find((parityEdge) => {
          (parityEdge[0] === edge[0] && parityEdge[1] === edge[1]) ||
            (parityEdge[0] === edge[1] && parityEdge[1] === edge[0]);
        })
      ) {
        console.log(value);
        console.log(edge);

        parityEdges.push(edge);
      }

      if (edge) {
        if (memoString === "-") {
          settings.edgeBuffer = edge;
        } else {
          settings.reverseEdgeMapping[memoString] = edge;
        }
      }
      if (corner) {
        if (memoString === "-") {
          settings.cornerBuffer = corner;
        } else {
          settings.reverseCornerMapping[memoString] = corner;
        }
      }
    });

    settings.parityEdges = parityEdges as [Edge, Edge];
    const { memo } =
      (await guard(async () =>
        client.memo.create({
          scramble,
          ...settings,
        })
      )) ?? {};
    setIsError(memo === undefined);
    if (memo) setMemo(memo);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 w-full">
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
        className="
    flex flex-col items-center justify-center
    w-1/3 h-full py-2 px-4 border border-transparent
    text-sm font-medium rounded-md text-white bg-blue-600
    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    transition duration-150 ease-in-out transform hover:scale-105
    shadow-lg"
        onClick={onClick}
      >
        Generate Memo
      </button>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-4 text-xl font-bold">
        Edges: {formatMemoString(memo.edges)}
        <br />
        Corner: {formatMemoString(memo.corners)}
        <br />
        Parity: {memo.parity ? "True" : "False"}
        <br />
        <div className="text-red-600">
          {isError ? "Invalid Scramble or Memo Letters!" : ""}
        </div>
      </div>
    </div>
  );
}
