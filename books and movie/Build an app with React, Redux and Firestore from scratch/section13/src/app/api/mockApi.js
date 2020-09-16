import { delay } from "../common/util/util";
import { sampleData } from "./sampleData";

export async function fetchSampleData() {
  await delay(1000);
  return Promise.resolve(sampleData);
}
