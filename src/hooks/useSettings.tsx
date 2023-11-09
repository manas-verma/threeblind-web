"use client";
import { B, D, F, L, MemoSettings, U } from "@/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface SettingsContextData {
  settings: MemoSettings;
  setSettings: (newSettings: MemoSettings) => void;
}

const SettingsContext = createContext<SettingsContextData | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<MemoSettings>({
    cornerBuffer: [U, B, L],
    edgeBuffer: [D, F],
    parityEdges: [
      [U, F],
      [U, B],
    ],
    reverseCornerMapping: {},
    reverseEdgeMapping: {},
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextData => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
