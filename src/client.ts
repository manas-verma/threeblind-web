import { Memo, MemoCreate } from "@/types";
import { objectToCamel } from "ts-case-convert";

const BASE_URL = "https://threeblind-api.fly.dev";

async function clientFetch<T = {}>(url: string, body?: any): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  return objectToCamel(json) as T;
}

export const makeClient = () => {
  return {
    memo: {
      create: async (memoCreate: MemoCreate) => {
        return await clientFetch<{ memo: Memo }>(`${BASE_URL}/memo/create`, {
          scramble: memoCreate.scramble,
          corner_buffer: memoCreate.cornerBuffer,
          edge_buffer: memoCreate.edgeBuffer,
          parity_edges: memoCreate.parityEdges,
          reverse_corner_mapping: memoCreate.reverseCornerMapping,
          reverse_edge_mapping: memoCreate.reverseEdgeMapping,
        });
      },
    },
  };
};

export const client = makeClient();
