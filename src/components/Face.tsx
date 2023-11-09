import { Sticker } from "@/components/Sticker";
import { FaceValues } from "@/types";

type Props = {
  color: string;
  values: FaceValues;
};

export function Face(props: Props) {
  const { color, values } = props;
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {values.map((value, index) => {
        const edge = value.length === 2 ? value : undefined;
        const corner = value.length === 3 ? value : undefined;
        return (
          <Sticker key={index} color={color} edge={edge} corner={corner} />
        );
      })}
    </div>
  );
}
