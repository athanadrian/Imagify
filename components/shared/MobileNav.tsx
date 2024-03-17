'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import AppIcon from './app-ui/AppIcon';
import { appIcons } from '@/constants/appIcons';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { userMenu } from '@/constants/lookup-data';
import { IconType } from 'react-icons';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '../ui/button';

const MobileNav = () => {
  const { pathname } = useNavigation();

  return (
    <header className='header'>
      <Link href='/' className='sidebar-logo flex items-center gap-2'>
        <AppIcon
          icon={appIcons['generative-fill']}
          size={30}
          tooltipText='IMAGIFY'
          className='text-purple-500'
        />
        <p className='p-20-semibold text-purple-500'>IMAGIFY</p>
      </Link>
      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <Sheet>
            <SheetTrigger>
              <AppIcon
                icon={appIcons.menu}
                size={30}
                tooltipText='IMAGIFY'
                className='text-purple-500'
              />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <>
                <Link href='/' className='sidebar-logo flex items-center gap-2'>
                  <AppIcon
                    icon={appIcons['generative-fill']}
                    size={30}
                    className='text-purple-500'
                  />
                  <p className='p-20-semibold text-purple-500'>IMAGIFY</p>
                </Link>
                <ul className='header-nav_elements'>
                  {userMenu.map((menuItem) => {
                    const isActive = pathname === menuItem.path;
                    return (
                      <li
                        className={`${
                          isActive && 'gradient-text group'
                        } flex whitespace-nowrap p-1 text-dark-700`}
                        key={menuItem.path}
                      >
                        <Link
                          href={menuItem.path!}
                          className='mobile-nav_element cursor-pointer items-center'
                        >
                          <AppIcon
                            icon={menuItem.icon as IconType}
                            className={`${isActive && 'text-purple-500'} `}
                          />
                          <p>{menuItem.title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className='button bg-purple-500 bg-cover'>
            <Link href='/sign-in'>Sign in</Link>
          </Button>
          <Button asChild className='button bg-purple-300 bg-cover'>
            <Link href='/sign-up'>Sign up</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
