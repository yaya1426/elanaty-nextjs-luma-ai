import Link from "next/link";
import { Button } from "../ui/button";

export default function TopBar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold text-zinc-950">
          إعلاناتي <span className="text-zinc-500">AI</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/listings"
            className="text-sm text-zinc-600 hover:text-zinc-950"
          >
            تصفح الإعلانات
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-zinc-600 hover:text-zinc-950"
          >
            لوحة التحكم
          </Link>
          <Button asChild size="sm">
            <Link href="/listings/create">أضف إعلانك</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
