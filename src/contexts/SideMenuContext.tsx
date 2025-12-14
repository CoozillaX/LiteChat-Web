import { createContext, useContext, useMemo, useState } from "react";
import type { PageHeaderProps } from "@/components/PageHeader";

// Side menu header context
type SideMenuContextType = {
  headerProps: PageHeaderProps;
  setHeaderProps: (config: PageHeaderProps) => void;
};

const SideMenuContext = createContext<SideMenuContextType | null>(null);

export function useSideMenuContext() {
  const ctx = useContext(SideMenuContext);
  if (!ctx) {
    throw new Error(
      "useSideMenuContext must be used within a SideMenuContext.Provider"
    );
  }
  return ctx;
}

// Provider component to wrap the app with side menu context
export function SideMenuProvider({ children }: { children: React.ReactNode }) {
  const [headerProps, setHeaderProps] = useState<PageHeaderProps>({
    title: ""
  });

  const contextValue = useMemo(
    () => ({
      headerProps,
      setHeaderProps: (config: PageHeaderProps) => {
        setHeaderProps(config);
      }
    }),
    [headerProps]
  );

  return (
    <SideMenuContext.Provider value={contextValue}>
      {children}
    </SideMenuContext.Provider>
  );
}
