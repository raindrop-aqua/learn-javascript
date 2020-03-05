export const ADD = "COUNTER/ADD";
export const DECREMENT = "COUNTER/DECREMENT";
export const INCREMENT = "COUNTER/INCREMENT";

export const add = (amount: number) => ({
  type: ADD as typeof ADD,
  payload: { amount }
});

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT
});

export const increment = () => ({
  type: INCREMENT as typeof INCREMENT
});

export type CounterAction =
  | ReturnType<typeof add>
  | ReturnType<typeof decrement>
  | ReturnType<typeof increment>;
