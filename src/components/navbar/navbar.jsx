import React from 'react';
import "../../css/hero.css"
import Logo from "../../img/cwc_logo-removebg-preview.png"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';



const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Events', href: '/events',  },
  { name: 'Hired Products', href: '/hired-products', },
  {
    name: 'Ministries',
    dropdown: true, // Indicate it's a dropdown
    items: [
      { name: 'Children Ministry', href: '/children' },
      { name: 'Teen Ministry', href: '/teen' },
      { name: 'Men Ministry', href: '/men' },
      { name: 'WWK Ministry', href: '/women' },
      { name: 'Youth Ministry', href: '/youths' },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function NavBar(){
  return(
    <div>
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-20">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src={Logo}
                  className="h-20 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4 ">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <Menu as="div" key={item.name} className="relative mt-3">
                        <MenuButton className="flex items-center text-gray-300 navs hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          {item.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden">
                          {item.items.map((dropdownItem) => (
                            <MenuItem key={dropdownItem.name}>
                              <a
                                href={dropdownItem.href}
                                className="block px-4 py-2 drop-down  text-sm text-gray-700 hover:bg-green-700  "
                              >
                                {dropdownItem.name}
                              </a>
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Menu>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        // aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-green-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium navs mt-3 decoration-0',
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* GIVE */}
              <Menu as="div" className="relative ml-3">
                <div>
                 <button  type="button" class="btn direction  btn-warning">GIVE</button>
                </div>
                
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pt-2 pb-3">
    {navigation.map((item) =>
      item.dropdown ? (
        <Disclosure key={item.name} as="div" className="space-y-1">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700">
                {item.name}
                <ChevronDownIcon
                  className={`ml-2 h-5 w-5 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="pl-5 space-y-1">
                {item.items.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    to={dropdownItem.href}
                    className="block px-4 py-2 navs text-sm text-gray-300 hover:bg-gray-700"
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ) : (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 navs py-2 text-base font-medium',
          )}
        >
          {item.name}
        </DisclosureButton>
      )
    )}
  </div>
</DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default NavBar;