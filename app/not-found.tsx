import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-sm-off-white px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="text-7xl font-extrabold text-sm-teal-dark">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-sm-gray-900">Page not found</h1>
        <p className="mt-3 text-sm text-sm-gray-700 md:text-base">
          Looks like this page took a wrong turn. Here are some places you might want to go:
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            className="rounded-full bg-sm-orange px-5 py-3 text-sm font-semibold text-white hover:bg-sm-orange-dark"
            href="/"
          >
            Home
          </Link>
          <Link
            className="rounded-full border border-sm-gray-200 bg-white px-5 py-3 text-sm font-semibold text-sm-gray-900 hover:border-sm-teal"
            href="/international"
          >
            Study in Canada
          </Link>
          <Link
            className="rounded-full border border-sm-gray-200 bg-white px-5 py-3 text-sm font-semibold text-sm-gray-900 hover:border-sm-teal"
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
