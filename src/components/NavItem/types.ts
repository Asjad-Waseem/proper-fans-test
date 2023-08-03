export interface NavItemI {
  classes: any;
  index?: number;
  hrefLink: string;
  iconDiv?: string;
  itemType: "mainNavItem" | "regularNavItem";
  itemName: "properChat" | "accountCenter" | "other";
  handleToggle?: () => void;
  icon: JSX.Element;
  icon2?: JSX.Element;
  toggleCollapse: boolean;
  label?: string;
}
