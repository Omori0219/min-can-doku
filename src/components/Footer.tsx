import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-4 mt-8 border-t">
      <div className="container mx-auto max-w-2xl px-4">
        <nav className="flex justify-center">
          <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
            利用規約
          </Link>
        </nav>
      </div>
    </footer>
  );
}
