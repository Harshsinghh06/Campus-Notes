import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="mt-5 relative overflow-hidden py-10 bg-gray-600 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm">
                  &copy; Copyright 2025. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-zinc-800">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="inline-block text-base font-medium text-gray-900 hover:text-gray-700 "
                    to="/"
                  >
                    Instagram
                    
                  </Link>
                  <SocialIcon
                      network="instagram"
                      url="www.instagram.com"
                      className="ml-2"
                      style={{ width: 24, height: 24 }}
                    />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-zinc-800">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 inline-block"
                    to="/"
                  >
                    Linkedin
                    
                  </Link>
                  <SocialIcon
                      network="linkedin"
                      url="www.linkedin.com"
                      className="ml-2"
                      style={{ width: 24, height: 24 }}
                    />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-zinc-800">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 inline-block"
                    to="/"
                  >
                    FaceBook
                    
                  </Link>
                  <SocialIcon
                      network="facebook"
                      url="www.facebook.com"
                      className="ml-2"
                      style={{ width: 24, height: 24 }}
                    />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
