"use client"
import Link from 'next/link';
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie('consent')) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When the user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie('consent', 'true');

    // Trigger GTM script load
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('updateGTMConsent'));
    }
  };

  const declineConsent = () => {
    // When the user declines consent, simply hide the popup
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-teal-900 text-white flex items-center justify-between">
      <div className="max-w-screen-lg mx-auto flex items-center">
        <p className="flex-grow">
          We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.
        </p>
        <div className="ml-4 flex space-x-4">
          <button
            onClick={acceptConsent}
            className="bg-white text-teal-900 px-4 py-2 rounded"
          >
            Accept
          </button>
          <Link href="/cookies-policy">
            <a className="text-white underline">Learn more</a>
          </Link>
        </div>
      </div>
      <button
        onClick={declineConsent}
        className="ml-4 text-white"
        aria-label="Close"
      >
        &#10005;
      </button>
    </div>
  );
};
