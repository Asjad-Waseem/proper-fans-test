export interface MenuItemsI {
  id: number;
  itemName: "properChat" | "accountCenter" | "other";
  label: string;
  icon: JSX.Element;
  link: string;
}
