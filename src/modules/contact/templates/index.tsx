import React from 'react';
import Link from "next/link";
import Button from "../../common/components/button";
import { Map } from '../components/map';

export default function ContactTemplate() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <section className="w-70% py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-regular">Address</h3>
                  <p className="text-slate-700 dark:text-slate-700">
                    APPLIED BUSINESS LTD
                    Company number 12815106

                    7 Bell Yard, London, 
                    <br />
                    England, WC2A 2JR
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-regular">Email</h3>
                  <div className="flex items-center space-x-2">
                    <Link className="text-slate-700 hover:text-teal-900 underline-offset-2" href="mailto:info@Printinc.com">
                        support@printinc.shop
                    </Link>
                    <Link href={`mailto:support@printinc.shop`}>
                     <Button variant="primary">Get in touch</Button>
                  </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-regular">Phone</h3>
                  <Link className="text-slate-700 hover:text-teal-900 underline-offset-2" href="tel:+370234567890">
                      01767 677071
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
              <Map />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
