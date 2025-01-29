import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Cwclogo from '../../img/cwc_logo-removebg-preview.png'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'About us', href: '#', current: false },
  { name: 'Events', href: '#', current: false },
  { name: 'Ministries', href: '#', current: false , dropdown:[
    { name: 'Children ministry', href: '#' },
    { name: 'Youth ministry', href: '#' },
    { name: 'WWK ministry', href: '#' },
    { name: 'Men ministry', href: '#' },
    { name: 'Teens ministry', href: '#' },

    

  ] },
  { name: 'Hired-Product', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                alt="CHURCH LOGO"
                src={Cwclogo}
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex m-20 space-x-4">
                {navigation.map((item) => (
                    item.dropdown ? (
                        <Menu as="div" className="relative inline-block text-left" key={item.name}>
                          <div>
                            <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              {item.name}
                              <ChevronDownIcon className="ml-4 h-5 w-5" />
                            </MenuButton>
                          </div>
                          <MenuItems className="absolute mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                            {item.dropdown.map((subItem) => (
                              <MenuItem key={subItem.name}>
                                {({ active }) => (
                                  <a
                                    href={subItem.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {subItem.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                )))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* 
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <button type="button" class="btn btn-warning">Give</button>
                </MenuButton>
              </div>
              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems> */}
            </Menu>
          </div> 
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            item.dropdown ? (
              <Disclosure key={item.name} as="div">
                {({ open }) => (
                  <>
                    <DisclosureButton className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                      {item.name}
                      <ChevronDownIcon className="ml-4 h-5 w-5" />
                    </DisclosureButton>
                    <DisclosurePanel className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">
                          {subItem.name}
                        </a>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ) : (
              <a key={item.name} href={item.href} className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                {item.name}
              </a>
            )
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
