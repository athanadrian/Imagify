import {
  MdDashboard,
  MdDarkMode,
  MdFavorite,
  MdSubscriptions,
  MdOutlineAdd,
} from 'react-icons/md';
import { PiUserCirclePlusBold, PiUsersThree } from 'react-icons/pi';
import { TfiUser } from 'react-icons/tfi';
import { HiPower } from 'react-icons/hi2';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';
import { RiUserReceived2Line } from 'react-icons/ri';
import { BiSolidShoppingBag } from 'react-icons/bi';
import { PiImageDuotone } from 'react-icons/pi';
import { LuScanLine } from 'react-icons/lu';
import { AiOutlineBgColors } from 'react-icons/ai';
import { HiCamera } from 'react-icons/hi2';
import { GoHomeFill } from 'react-icons/go';

export const appIcons = {
  dashboard: MdDashboard,
  darkMode: MdDarkMode,
  favorite: MdFavorite,

  home: GoHomeFill,
  users: PiUsersThree,
  profile: TfiUser,
  subscriptions: MdSubscriptions,
  'image-restore': PiImageDuotone,
  'generative-fill': BsStars,
  'object-remove': LuScanLine,
  'object-recolor': AiOutlineBgColors,
  'remove-bg': HiCamera,
  credits: BiSolidShoppingBag,
  menu: HiMenuAlt3,

  logout: HiPower,
  sign_in: RiUserReceived2Line,
  sign_up: PiUserCirclePlusBold,
  add: MdOutlineAdd,
};
