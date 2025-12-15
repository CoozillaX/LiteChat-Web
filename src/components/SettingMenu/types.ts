import type { JSX } from "react";

// Setting menu item types
export const SettingMenuItemType = {
  Custom: "custom",
  Link: "link",
  Switch: "switch",
  Select: "select"
} as const;

interface BaseMenuItem {
  label?: string;
  icon?: React.ReactNode;
}

export interface CustomMenuItem extends BaseMenuItem {
  type: typeof SettingMenuItemType.Custom;
  component: JSX.Element;
}

export interface LinkMenuItem extends BaseMenuItem {
  type: typeof SettingMenuItemType.Link;
  path: string;
  component?: JSX.Element;
}

export interface SwitchMenuItem extends BaseMenuItem {
  type: typeof SettingMenuItemType.Switch;
  value: boolean;
  onChange: (value: boolean) => void;
}

export interface SelectMenuItem extends BaseMenuItem {
  type: typeof SettingMenuItemType.Select;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

// Union type for all menu items
export type SettingMenuItem =
  | CustomMenuItem
  | LinkMenuItem
  | SwitchMenuItem
  | SelectMenuItem;

// Setting menu group type
export interface SettingMenuGroup {
  header?: string;
  items: SettingMenuItem[];
}
