import { FlatCube } from "@/components/FlatCube";
import { Generate } from "@/components/Generate";
import { SettingsProvider } from "@/hooks/useSettings";

export function MemoGen() {
  return (
    <SettingsProvider>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <FlatCube />
        <Generate />
      </div>
    </SettingsProvider>
  );
}
