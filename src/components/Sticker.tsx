"use client";
import { Corner, Edge } from "@/types";
import { useCallback, useEffect, useState } from "react";

type Props = {
  color: string;
  edge?: Edge;
  corner?: Corner;
};

export function Sticker(props: Props) {
  const { color, edge, corner } = props;

  const [value, setValue] = useState("");
  const key = useCallback(
    () => JSON.stringify({ color, edge, corner }),
    [color, edge, corner]
  );

  useEffect(() => {
    const key = JSON.stringify({ color, edge, corner });
    const newValue = localStorage.getItem(key) ?? "";
    setValue(newValue);
  }, [color, edge, corner]);

  const onChange = (memoString: string) => {
    setValue(memoString);
    localStorage.setItem(key(), memoString);
  };

  return (
    <div
      className="h-12 w-12"
      style={{
        backgroundColor: color,
      }}
    >
      <input
        className={`h-12 w-12 ${
          color == "white" || color == "yellow" ? "text-black" : "text-white"
        } bg-transparent text-center text-lg`}
        value={value}
        type="text"
        disabled={edge === undefined && corner === undefined}
        maxLength={2}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
