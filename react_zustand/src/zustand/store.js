import { create } from "zustand";

const CounterStore = {
  count: 0,
};

export const useCounterStore = create((set) => ({
  ...CounterStore,
  increment: () =>
    set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({ count: state.count - 1 })),
  reset: () => set(() => ({ count: 0 })),
  setCount: (newCount) => set(() => ({ count: newCount })),
  setCounterStore: (newStore) =>
    set(() => ({ ...newStore })),
}));
