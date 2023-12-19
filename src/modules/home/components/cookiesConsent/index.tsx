"use client"
import Link from 'next/link';
import UnderlineLink from "@modules/common/components/underline-link"
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
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row flex-grow items-center justify-between">
        <p className="text-sm sm:text-base my-2 sm:my-0 text-center sm:text-left flex-grow">
          We use cookies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 my-2 sm:my-0">
          <UnderlineLink href='/cc'>Learn more</UnderlineLink>
          <button onClick={acceptConsent} className="bg-white text-slate-950 px-4 py-2 rounded text-sm sm:text-base font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            Accept
          </button>
          <button onClick={declineConsent} className="bg-transparent border-2 border-white text-white px-4 py-2 rounded text-sm sm:text-base font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
