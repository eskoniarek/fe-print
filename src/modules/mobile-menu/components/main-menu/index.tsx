import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
import Search from "@modules/common/icons/search"
import X from "@modules/common/icons/x"
import clsx from "clsx"
import { useCollections, useProductCategories, useMeCustomer } from "medusa-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"

const MainMenu = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()
  const { customer } = useMeCustomer()
  const { countryCode } = useStore()

  const countries = useCountryOptions()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 py-4 px-6">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            <ReactCountryFlag countryCode={countryCode || "us"} svg />
            <ChevronDown />
          </button>
        </div>
        <div>
          <h1 className="text-xl-semi uppercase">Printinc</h1>
        </div>
        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        {process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-gray-500"
            onClick={setScreenSearch}
          >
            <Search size={24} />
            <span placeholder="Search products" className="text-base-regular">
              Search products
            </span>
          </button>
        )}

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4">
              <Link href="/store">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Go to Showcase</span>
                  <span>Showcase</span>
                  <ChevronDown className="-rotate-90" />
                </button>
              </Link>
            </li>
            <li className="bg-gray-50 p-4">
    <Link href="/about">
      <button
        className="flex items-center justify-between w-full"
        onClick={close}
      >
        <span className="sr-only">Go to About Us</span>
        <span>About Us</span>
        <ChevronDown className="-rotate-90" />
      </button>
    </Link>
  </li>
  <li className="bg-gray-50 p-4">
    <Link href="/contact">
      <button
        className="flex items-center justify-between w-full"
        onClick={close}
      >
        <span className="sr-only">Go to Contact</span>
        <span>Contact Us</span>
        <ChevronDown className="-rotate-90" />
      </button>
    </Link>
  </li>
  <ul className="flex flex-col gap-y-2 grid-cols-1 md:grid-cols-2">
      {collections ? (
              <>
                {collections.map((collection) => (
                  <li key={collection.id} className="bg-gray-50 p-4">
                    <Link href={`/collections/${collection.handle}`}>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={close}
                      >
                        <span className="sr-only">
                          Go to {collection.title} collection
                        </span>
                        <span>{collection.title}</span>
                        <ChevronDown className="-rotate-90" />
                      </button>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
            </ul>
          </ul>
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
        <ul className="flex flex-col gap-y-2 grid-cols-1 md:grid-cols-2">

         {product_categories && (
         <div className="flex flex-col gap-y-2">
       <span className="text-base-semi">Categories</span>
       <ul className="grid grid-cols-2 gap-4">
         {product_categories?.slice(0, 6).map((c) => {
           if (c.parent_category) {
             return
           }
           const children =
             c.category_children?.map((child) => ({
               name: child.name,
               handle: child.handle,
               id: child.id,
             })) || null
           return (
             <li className="flex flex-col gap-2" key={c.id}>
               <Link
                 className={clsx(children && "text-small-semi")}
                 href={`/${c.handle}`}
               >
                 {c.name}
               </Link>
               {children && (
                 <ul className="grid grid-cols-1 ml-3 gap-2">
                   {children &&
                     children.map((child) => (
                       <li key={child.id}>
                         <Link href={`/${child.handle}`}>
                           {child.name}
                         </Link>
                       </li>
                     ))}
                 </ul>
               )}
             </li>
           )
         })}
       </ul>
     </div>
    
   )}
   </ul>
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {!customer ? (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to sign in page</span>
                    <span className="normal-case">Sign in</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to account page</span>
                    <span className="normal-case">{customer.email}</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Delivery</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">
                  Click to select shipping country
                </span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={countryCode || "us"} svg />
                  <span className="normal-case">
                    Shipping to{" "}
                    {countries?.find((c) => c.country === countryCode)?.label}
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainMenu
