export type Face = 1 | -1 | 2 | -2 | 3 | -3;
export const U: Face = 1;
export const D: Face = -1;
export const F: Face = 2;
export const B: Face = -2;
export const R: Face = 3;
export const L: Face = -3;

export type Center = [Face];
export type Edge = [Face, Face];
export type Corner = [Face, Face, Face];

export type Direction = -1 | 1 | 2 | 3;
export type Move = [Face, Direction];

export type FaceValues = [
  Corner,
  Edge,
  Corner,
  Edge,
  Center,
  Edge,
  Corner,
  Edge,
  Corner
];

export type Memo = {
  edges: string[];
  corners: string[];
  parity: boolean;
};

export type MemoCreate = {
  scramble: string;
  cornerBuffer: Corner;
  edgeBuffer: Edge;
  parityEdges: [Edge, Edge];
  reverseCornerMapping: Record<string, Corner>;
  reverseEdgeMapping: Record<string, Edge>;
};

export type MemoSettings = Omit<MemoCreate, "scramble">;
