import { useMatches } from "react-router-dom";

interface RouteHandle {
  title?: string;
  isEmptyPage?: boolean;
}

// Hook to get route data from the nearest route with the specified key in its handle
export function useRouteData<T>(key: keyof RouteHandle): T | undefined {
  const matches = useMatches();

  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i];

    if (match.handle) {
      const handle = match.handle as RouteHandle;
      if (handle[key] !== undefined) {
        return handle[key] as T;
      }
    }
  }
  return undefined;
}
