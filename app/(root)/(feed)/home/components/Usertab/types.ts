export interface UserTabLink {
  icon: string;
  label: string;
  href: string;
}

export interface UserTabProps {
  currentTab: string
  setCurrentTab(arg: string): void
}

export interface SidebarIconProps {
  feed: React.JSX.Element
  networking: React.JSX.Element
  video: React.JSX.Element
  photo: React.JSX.Element
  shop: React.JSX.Element
}
