"use client";
import { useSettings } from "@/hooks/useSettings";
import { useEffect, useState } from "react";

export default function Preferences() {
  const { settings, setSettings } = useSettings();
  const [edgePreference, setEdgePreference] = useState<string[] | null>(
    settings.edgePreference
  );
  const [cornerPreference, setCornerPreference] = useState<string[] | null>(
    settings.cornerPreference
  );

  // Pick values from localStorage
  useEffect(() => {
    const edgePreference = localStorage.getItem("edgePreference");
    const cornerPreference = localStorage.getItem("cornerPreference");
    if (edgePreference) {
      setEdgePreference(edgePreference.split(" "));
      setSettings({ ...settings, edgePreference: edgePreference.split(" ") });
    }
    if (cornerPreference) {
      setCornerPreference(cornerPreference.split(" "));
      setSettings({
        ...settings,
        cornerPreference: cornerPreference.split(" "),
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const _setEdgePreference = (edgePreference: string[] | null) => {
    setEdgePreference(edgePreference);
    setSettings({ ...settings, edgePreference });
    localStorage.setItem("edgePreference", edgePreference?.join(" ") ?? "");
  };

  const _setCornerPreference = (cornerPreference: string[] | null) => {
    setCornerPreference(cornerPreference);
    setSettings({ ...settings, cornerPreference });
    localStorage.setItem("cornerPreference", cornerPreference?.join(" ") ?? "");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full border-white">
        Edge Preferences (space separated memo letters)
      </div>
      <input
        className={`w-full bg-transparent text-center text-lg text-[var(--text-color)]`}
        value={edgePreference?.join(" ") ?? ""}
        type="text"
        onChange={(e) => _setEdgePreference(e.target.value.split(" "))}
      />
      <div className="flex flex-col items-center justify-center w-full h-full border-white">
        Corner Preferences (space separated memo letters)
      </div>
      <input
        className={`w-full bg-transparent text-center text-lg`}
        value={cornerPreference?.join(" ") ?? ""}
        type="text"
        onChange={(e) => _setCornerPreference(e.target.value.split(" "))}
      />
    </>
  );
}
