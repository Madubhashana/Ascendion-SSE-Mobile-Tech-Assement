import {DrawerContentComponentProps} from '@react-navigation/drawer';

export interface NavItemType {
  name: string;
  route?: string;
}

export type DrawerNavItemType =
  DrawerContentComponentProps['state']['routes'][number];
