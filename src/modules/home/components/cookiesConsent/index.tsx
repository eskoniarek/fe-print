"use client"
import Link from 'next/link';
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!hasCookie('consent')) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    setShowConsent(false);
    setCookie('consent', 'true');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('updateGTMConsent'));
    }
  };

  const declineConsent = () => {
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-teal-900 text-white flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col sm:flex-row flex-grow mx-2 items-center">
        <p className="text-sm sm:text-base my-2 sm:my-0 text-center sm:text-left">
          We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button onClick={acceptConsent} className="bg-white text-teal-900 px-2 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base">
            Accept
          </button>
          <Link href={'/cc'}>
          <p>Learn more</p>
          </Link>
        </div>
      </div>
      <button onClick={declineConsent} className="text-white mt-2 sm:mt-0">
        &#10005;
      </button>
    </div>
  );
};
