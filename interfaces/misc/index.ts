import { appIcons } from '@/constants/appIcons';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ILookUpData {
  key: string;
  icon?: IconType | JSX.Element | keyof typeof appIcons;
  value: string;
  title: string;
  tooltip?: string;
  color?: string;
  path?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}
