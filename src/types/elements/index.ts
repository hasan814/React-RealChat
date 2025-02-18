import { JSX } from "react";


export interface NavLinksProps {
  extraLinks?: { path: string; label: string }[];
  onClick?: () => void;
}


export interface MobileMenuProps {
  closeMenu: () => void;
  extraLinks?: { path: string; label: string }[];
}


export interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
