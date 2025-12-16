import {
  createContext,
  useContext,
  useMemo,
  useState,
  type SetStateAction
} from "react";
import type { PageHeaderProps } from "@/components/PageHeader";

// Setting menu header context
type SettingMenuContextType = {
  headerProps: PageHeaderProps;
  setHeaderProps: (config: SetStateAction<PageHeaderProps>) => void;
};

const SettingMenuContext = createContext<SettingMenuContextType | null>(null);

export function useSettingMenuContext() {
  const ctx = useContext(SettingMenuContext);
  if (!ctx) {
    throw new Error(
      "useSettingMenuContext must be used within a SettingMenuContext.Provider"
    );
  }
  return ctx;
}

// Provider component to wrap the app with side menu context
export function SettingMenuProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [headerProps, setHeaderProps] = useState<PageHeaderProps>({
    titleI18nKey: ""
  });

  const contextValue = useMemo(
    () => ({
      headerProps,
      setHeaderProps: setHeaderProps
    }),
    [headerProps]
  );

  return (
    <SettingMenuContext.Provider value={contextValue}>
      {children}
    </SettingMenuContext.Provider>
  );
}
