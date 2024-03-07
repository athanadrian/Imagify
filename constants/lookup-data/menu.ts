import { ILookUpData } from '@/interfaces/misc';
import { appIcons } from '../appIcons';

export const authMenu: ILookUpData[] = [
  {
    title: 'Sign in',
    icon: appIcons.sign_in,
    value: 'sign-in',
    tooltip: '',
    key: 'sign-in',
    path: '/sign-in',
  },
  {
    title: 'Sign up',
    icon: appIcons.sign_up,
    value: 'sign-up',
    tooltip: '',
    key: 'sign-up',
    path: '/sign-up',
  },
];

export const userMenu: ILookUpData[] = [
  {
    title: 'Home',
    icon: appIcons.home,
    value: 'home',
    tooltip: 'Home',
    key: 'home',
    path: '/',
  },
  {
    title: 'Image Restore',
    icon: appIcons['image-restore'],
    value: 'image-restore',
    tooltip: 'Restore',
    key: 'image-restore',
    path: '/transformations/add/restore',
  },
  {
    title: 'Generative Fill',
    icon: appIcons['generative-fill'],
    value: 'generative-fill',
    tooltip: 'Fill',
    key: 'generative-fill',
    path: '/transformations/add/fill',
  },
  {
    title: 'Object Remove',
    icon: appIcons['object-remove'],
    value: 'object-remove',
    tooltip: 'Remove',
    key: 'object-remove',
    path: '/transformations/add/remove',
  },
  {
    title: 'Object Recolor',
    icon: appIcons['object-recolor'],
    value: 'object-recolor',
    tooltip: 'Recolor',
    key: 'object-recolor',
    path: '/transformations/add/recolor',
  },
  {
    title: 'Background Remove',
    icon: appIcons['remove-bg'],
    value: 'remove-bg',
    tooltip: 'Remove Bg',
    key: 'remove-bg',
    path: '/transformations/add/removeBackground',
  },
  {
    title: 'Profile',
    icon: appIcons.profile,
    value: 'profile',
    tooltip: 'Profile',
    key: 'profile',
    path: '/user/profile',
  },
  {
    title: 'Buy Credits',
    icon: appIcons.credits,
    value: 'credits',
    tooltip: 'Credits',
    key: 'credits',
    path: '/credits',
  },
  {
    title: 'Subscriptions',
    icon: appIcons.subscriptions,
    value: 'subscriptions',
    tooltip: 'Subscriptions',
    key: 'subscriptions',
    path: '/subscriptions',
  },
];
