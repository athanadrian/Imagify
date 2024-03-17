import {
  MdDashboard,
  MdDarkMode,
  MdFavorite,
  MdSubscriptions,
  MdOutlineAdd,
} from 'react-icons/md';
import {
  PiUserCirclePlusBold,
  PiUsersThree,
  PiImageDuotone,
} from 'react-icons/pi';
import { TfiUser } from 'react-icons/tfi';
import { HiPower, HiCamera } from 'react-icons/hi2';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';
import { RiUserReceived2Line } from 'react-icons/ri';
import { BiSolidShoppingBag } from 'react-icons/bi';
import { LuScanLine } from 'react-icons/lu';
import { AiOutlineBgColors } from 'react-icons/ai';
import { FiZap } from 'react-icons/fi';
import { GoHomeFill } from 'react-icons/go';
// import { IoDownloadSharp } from 'react-icons/io5';
// import { ImSpinner8 } from 'react-icons/im';

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
  'free-plan': FiZap,
  // download: IoDownloadSharp,
  // spinner: ImSpinner8,

  logout: HiPower,
  sign_in: RiUserReceived2Line,
  sign_up: PiUserCirclePlusBold,
  add: MdOutlineAdd,
};
