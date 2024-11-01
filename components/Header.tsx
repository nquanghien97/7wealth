'use client';

import MenuIcon from '@/assets/icons/MenuIcon'
import { ListHeader } from '@/config/ListHeader'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AppSidebar from './Sidebar';
import MenuDropdown from './common/MenuDropdown';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/assets/icons/SearchIcon';

function Header() {
  const pathname = usePathname();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <header className="w-full fixed top-0 right-0 left-0 z-[100] bg-white">
        <div className="flex justify-center bg-[#24652c] py-1">
          <p className="text-center text-white text-sm">Giao hàng miễn phí toàn quốc với hóa đơn từ 99.000 đơn</p>
        </div>
        <div className="h-[64px] shadow-sm shadow-black/20">
          <div className="h-full flex justify-between max-w-6xl m-auto">
            <Link href="/" className="flex md:justify-center items-center max-md:w-full">
              <Image src="/logo_7w_vuong.png" alt="logo" width={58} height={58} className="m-auto" />
            </Link>
            <div className="max-md:hidden flex items-center justify-center w-full">
              <ul className="flex items-center gap-4 text-[#24652c]">
                {ListHeader.map(item => (
                  <li key={item.id} className={`px-3 font-bold ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                    {item.children ? (
                      <MenuDropdown
                        title={item.title}
                        path={item.path}
                        key={item.id}
                      >
                        <ul className="bg-white flex flex-col min-w-[15rem] border border-[#ffffff12] text-black border-[#ccc] rounded-md">
                          {item.children.map(childItem => (
                            <li key={childItem.id} className="border-b-[1px] text-sm text-black relative">
                              {childItem.children ? (
                                <MenuDropdown
                                  title={childItem.title}
                                  path={childItem.path}
                                  key={childItem.id}
                                  position='right'
                                >
                                  <ul className="border border-[#ccc] rounded-md bg-white">
                                    {childItem.children?.map(innetItem => (
                                      <li key={innetItem.id} className="border-b-[1px] text-sm text-black">
                                        <Link className={`cursor-pointer hover:text-[#f18017] p-4 w-full flex items-center duration-300`} href={innetItem.path}>
                                          {innetItem.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </MenuDropdown>
                              ) : (
                                <Link className={`cursor-pointer hover:text-[#f18017] p-4 w-full flex items-center duration-300`} href={childItem.path}>
                                  {childItem.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </MenuDropdown>
                    ) : (
                      <Link key={item.id} href={item.path} className={`hover:text-[#f18017] relative duration-300 p-4`}>
                        {item.title}
                      </Link>
                    )}
                  </li>
                )
                )}
              </ul>
            </div>
            <div>
              <div className='h-full flex items-center'>
                <div className="cursor-pointer">
                  <SearchIcon fill='#f18017' width={24} height={24} />
                </div>
                <Link href="/" className="hover:text-[#f18017] p-4 w-full flex items-center duration-300 text-[#24652c] font-bold">
                  VN/EN
                </Link>
              </div>
            </div>
            <div className="flex items-center mr-8 md:hidden">
              <div className="cursor-pointer p-1 hover:bg-[#e0e0e0] rounded-full duration-300" onClick={() => setIsOpenSidebar(true)}>
                <MenuIcon fill='black' />
              </div>
            </div>
          </div>
        </div>
        <AppSidebar
          open={isOpenSidebar}
          setOpen={setIsOpenSidebar}
          start="-24rem"
          end="0"
          exit="-24rem"
        >
          <div className="py-7">
            <ul className="flex max-md:flex-col text-black">
              {ListHeader.map(item => (
                <li key={item.path} className="px-3 md:py-1 py-2 max-md:border-b-2">
                  {item.children ? (
                    <MenuDropdown
                      title={item.title}
                      path={item.path}
                    >
                      <ul className="bg-white flex flex-col min-w-[15rem] border border-[#ccc] rounded-md md:py-2">
                        {item.children.map(childItem => (
                          <li key={childItem.id}>
                            <Link className={`cursor-pointer hover:text-[#f18017] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                              {childItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </MenuDropdown>
                  ) : (
                    <div className='flex h-full items-center'>
                      <Link href={item.path} className={`hover:text-[#f18017] duration-300 ${pathname === item.path ? 'text-[#f18017]' : ''} px-3 pb-4`}>
                        {item.title}
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AppSidebar>
      </header>
      <div className="h-[92px]" />
    </>
  )
}

export default Header