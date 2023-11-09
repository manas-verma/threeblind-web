import { B, D, F, FaceValues, L, R, U } from "@/types";

export const UpFace: FaceValues = [
  [U, B, L],
  [U, B],
  [U, B, R],
  [U, L],
  [U],
  [U, R],
  [U, F, L],
  [U, F],
  [U, F, R],
];

export const DownFace: FaceValues = [
  [D, F, L],
  [D, F],
  [D, F, R],
  [D, L],
  [D],
  [D, R],
  [D, B, L],
  [D, B],
  [D, B, R],
];

export const FrontFace: FaceValues = [
  [F, U, L],
  [F, U],
  [F, U, R],
  [F, L],
  [F],
  [F, R],
  [F, D, L],
  [F, D],
  [F, D, R],
];

export const BackFace: FaceValues = [
  [B, U, R],
  [B, U],
  [B, U, L],
  [B, R],
  [B],
  [B, L],
  [B, D, R],
  [B, D],
  [B, D, L],
];

export const RightFace: FaceValues = [
  [R, U, F],
  [R, U],
  [R, U, B],
  [R, F],
  [R],
  [R, B],
  [R, D, F],
  [R, D],
  [R, D, B],
];

export const LeftFace: FaceValues = [
  [L, U, B],
  [L, U],
  [L, U, F],
  [L, B],
  [L],
  [L, F],
  [L, D, B],
  [L, D],
  [L, D, F],
];
