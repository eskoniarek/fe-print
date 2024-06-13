import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Checkout",
}

export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-gry-900">Page not found. Store coming soon</h1>
      <p className="text-small-regular text-gray-700">
        The page you tried to access does not exist.
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
        Go to frontpage
      </Link>
    </div>
  )
}
