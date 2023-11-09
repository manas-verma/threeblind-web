import { Face } from "@/components/Face";
import {
    BackFace,
    DownFace,
    FrontFace,
    LeftFace,
    RightFace,
    UpFace,
} from "@/faces";

export function FlatCube() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full space-x-1">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Face color="orange" values={LeftFace} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
        <Face color="yellow" values={UpFace} />
        <Face color="blue" values={FrontFace} />
        <Face color="white" values={DownFace} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Face color="red" values={RightFace} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Face color="green" values={BackFace} />
      </div>
    </div>
  );
}
