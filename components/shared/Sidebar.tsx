'use client';

import Link from 'next/link';
import React from 'react';
import AppIcon from './app-ui/AppIcon';
import { appIcons } from '@/constants/appIcons';
import { authMenu, userMenu } from '@/constants/lookup-data/menu';
import { IconType } from 'react-icons';
import { useNavigation } from '@/hooks/useNavigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Button } from '../ui/button';

const Sidebar = () => {
  const { pathname } = useNavigation();
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/' className='sidebar-logo flex items-center gap-2'>
          <AppIcon
            icon={appIcons['generative-fill']}
            size={30}
            tooltipText='IMAGIFY'
            className='text-purple-500'
          />{' '}
          <p className='p-20-semibold text-purple-500'>IMAGIFY</p>
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {userMenu.slice(0, 6).map((menuItem) => {
                const isActive = pathname === menuItem.path;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                    key={menuItem.path}
                  >
                    <Link href={menuItem.path!} className='sidebar-link'>
                      <AppIcon
                        icon={menuItem.icon as IconType}
                        tooltipText={menuItem.tooltip}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      <p>{menuItem.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {userMenu.slice(6).map((menuItem) => {
                const isActive = pathname === menuItem.path;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                    key={menuItem.path}
                  >
                    <Link href={menuItem.path!} className='sidebar-link'>
                      <AppIcon
                        icon={menuItem.icon as IconType}
                        tooltipText={menuItem.tooltip}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      <p>{menuItem.title}</p>
                    </Link>
                  </li>
                );
              })}
              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
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
      </div>
    </aside>
  );
};

export default Sidebar;
