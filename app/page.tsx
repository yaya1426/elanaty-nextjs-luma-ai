import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <section className="mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border bg-white px-4 py-2 text-sm text-zinc-600">
          منصة إعلانات مدعومة بالذكاء الاصطناعي
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
          حوّل صور منتجاتك العادية إلى إعلانات احترافية
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          إعلاناتي AI هو سوق بسيط لعرض المنتجات وبيعها، ومع الوقت سنضيف ميزة
          تحسين الصور باستخدام Luma AI حتى تظهر منتجاتك بشكل أجمل وأكثر
          احترافية.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/listings">تصفح الإعلانات</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/listings/create">أضف إعلانك</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
