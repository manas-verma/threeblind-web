"use client";
import { Corner, Edge, MemoSettings } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { useSettings } from "../hooks/useSettings";

type Props = {
  color: string;
  edge?: Edge;
  corner?: Corner;
};

export function Sticker(props: Props) {
  const { color, edge, corner } = props;
  const { settings, setSettings } = useSettings();

  const [value, setValue] = useState("");
  const key = useCallback(
    () => JSON.stringify({ color, edge, corner }),
    [color, edge, corner]
  );

  const updateSettings = useCallback(
    (
      memoString: string,
      settings: MemoSettings,
      edge?: Edge,
      corner?: Corner
    ) => {
      setSettings({
        ...settings,
        ...(edge
          ? {
              reverseEdgeMapping: {
                ...settings.reverseEdgeMapping,
                [memoString]: edge,
              },
            }
          : corner
          ? {
              reverseCornerMapping: {
                ...settings.reverseCornerMapping,
                [memoString]: corner,
              },
            }
          : {}),
      });
    },
    [setSettings]
  );

  useEffect(() => {
    const newValue = localStorage.getItem(key()) ?? "";
    setValue(newValue);
    updateSettings(newValue, settings, edge, corner);
  }, [key, updateSettings, settings, edge, corner]);

  const onChange = (memoString: string) => {
    setValue(memoString);
    localStorage.setItem(key(), memoString);
    updateSettings(memoString, settings, edge, corner);
  };

  return (
    <div
      className="h-16 w-16"
      style={{
        backgroundColor: color,
      }}
    >
      <input
        className={`h-16 w-16 ${
          color == "white" || color == "yellow" ? "text-black" : "text-white"
        } bg-transparent text-center text-lg`}
        value={value}
        type="text"
        maxLength={2}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
