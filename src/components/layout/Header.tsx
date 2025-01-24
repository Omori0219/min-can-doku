import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr,min(598px,100%),1fr] gap-4">
        <div className="hidden lg:block" />
        <div className="flex h-14 items-center px-4 lg:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">皆can読</span>
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-700 ml-4">
            規約
          </Link>
        </div>
        <div className="hidden lg:block" />
      </div>
    </header>
  );
};
