import { useState, useEffect } from "react";
import "../../css/hero.css"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import men from "../../img/men1.jpg";
import children from "../../img/children1.jpg";
import youth from "../../img/youthday with blue.jpg";
import Logo from "../../img/cwc_logo-removebg-preview.png"

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About us', href: '#', current: false },
  { name: 'Events', href: '#', current: false },
  { name: 'Hired Products', href: '#', current: false },
  {
    name: 'More',
    dropdown: true, // Indicate it's a dropdown
    items: [
      { name: 'Children Ministry', href: '#' },
      { name: 'Men Ministry', href: '#' },
      { name: 'WWK Ministry', href: '#' },
      { name: 'Teen Ministry', href: '#' },
      { name: 'Youth Ministry', href: '#' },
    ],
  },
];

const images = [
  {
    src: men,
    title: "Welcome to Our <span class='text-yellow-400'>Sunday Services</span>",
    services: [
      { time: "9.00 AM to 11:00 AM", desc: "First Service - In-person & Livestream", color: "border-green-400" },
      { time: "11.00 AM to 1:00 PM", desc: "Second Service - In-person Only", color: "border-yellow-400" },
    ],
    button: true, // Show button only on first image
  },
  {
    src: children,
    title: "Welcome to Our <span class='text-yellow-400'>Covenant Hour</span>",
    services: [
      { time: "10:00 PM to 11:00 PM", desc: "Every Tuesday", color: "border-green-400" },
      { time: "10.00 PM to 11:00 PM", desc: "Every Thursday", color: "border-yellow-400" },
    ],
    button: false, // Don't show the "WATCH LIVE" button here
    link: "https://meet.google.com/nye-nguk-uaq", // Link for the children image button
  },
  {
    src: youth,
    title: "Welcome to Our <span class='text-yellow-400'>Sunday Services</span>",
    services: [
      { time: "9.00 AM", desc: "First Service - In-person & Livestream", color: "border-green-400" },
      { time: "12.00 PM", desc: "Second Service - In-person Only", color: "border-yellow-400" },
    ],
    button: true, // Show button only on first image
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [darken, setDarken] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setDarken(false);

    // Delay for the text to appear after 2 seconds
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const darkenTimeout = setTimeout(() => {
      setDarken(true);
    }, 2000);

    const imageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowText(false); // Reset text visibility when the image changes
    }, 5000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(darkenTimeout);
      clearInterval(imageInterval);
    };
  }, [index]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-500">
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
                        <MenuButton className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          {item.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden">
                          {item.items.map((dropdownItem) => (
                            <MenuItem key={dropdownItem.name}>
                              <a
                                href={dropdownItem.href}
                                className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {dropdownItem.name}
                              </a>
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
                          'rounded-md px-3 py-2 text-sm font-medium navs mt-3 decoration-0',
                        )}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* GIVE */}
              <Menu as="div" className="relative ml-3">
                <div>
                 <button  type="button" class="btn btn-success">GIVE</button>
                </div>
                
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) =>
              item.dropdown ? (
                <DisclosureButton
                  key={item.name}
                  as="button"
                  className="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                >
                  {item.name } 
                </DisclosureButton>
              ) : (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              )
            )}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${darken ? "brightness-50" : "brightness-100"}`}
            style={{ backgroundImage: `url(${images[index].src})` }}
          />

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content - Flex Layout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            {/* Dynamic Title with Styling */}
            {showText && (
              <h1
                className="text-4xl font-bold"
                dangerouslySetInnerHTML={{ __html: images[index].title }}
              />
            )}

            {/* Service Timings for All Services */}
            {showText && (
              <div className="mt-6 flex flex-col gap-6">
                {images[index].services.map((service, i) => (
                  <div
                    key={i}
                    className={`p-6 border-4 rounded-full text-xl font-bold ${service.color}`}
                  >
                    <p>{service.time}</p>
                    <p className="text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* WATCH LIVE Button (Only on Men & Youth images) */}
            {images[index].button && images[index].src !== children && showText && (
              <a
                href="https://www.youtube.com/@cwc_churches_of_Kenya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
                  WATCH LIVE ▶
                </button>
              </a>
            )}

            {/* JOIN US Button (Only on Children image) */}
            {images[index].src === children && showText && (
              <a href={images[index].link} target="_blank" rel="noopener noreferrer">
                <button className="mt-6 px-6 py-3 bg-blue-500 text-black font-bold rounded-lg shadow-lg hover:bg-blue-600 transition">
                  JOIN US ▶
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
