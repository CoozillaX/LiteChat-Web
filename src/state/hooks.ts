import { useSyncExternalStore } from "react";
import { type RootState, store } from "./store";

export function useStore<T>(getter: (state: RootState) => T) {
  return useSyncExternalStore(store.subscribe, () => getter(store.getState()));
}
