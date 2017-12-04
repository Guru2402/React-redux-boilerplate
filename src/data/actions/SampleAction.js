import { TEST } from "../constant";

export const SampleAction = params => {
  return {
    type: TEST,
    payload: params
  };
};
