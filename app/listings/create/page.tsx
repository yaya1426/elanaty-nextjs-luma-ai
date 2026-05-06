import Link from "next/link";
import { fakeCategories } from "@/data/fakeCategories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createListing } from "./actions";

export default function CreateListingPage() {
  return (
    <main className="flex flex-1 bg-zinc-50">
      <section className="mx-auto w-full max-w-3xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-950">أضف إعلان جديد</h1>
          <p className="mt-2 text-zinc-600">
            سنبدأ بفورم بسيط، ولاحقاً سنربطه بقاعدة البيانات ورفع الصور.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>بيانات الإعلان</CardTitle>
          </CardHeader>

          <CardContent>
            <form action={createListing} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">عنوان الإعلان</label>
                <Input
                  name="title"
                  placeholder="مثال: آيفون 15 برو بحالة ممتازة"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">السعر</label>
                  <Input name="price" type="number" placeholder="مثال: 3200" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">التصنيف</label>

                  <Select name="category">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="اختر التصنيف" />
                    </SelectTrigger>

                    <SelectContent>
                      {fakeCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">الموقع</label>
                <Input name="location" placeholder="مثال: القاهرة" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">الوصف</label>
                <Textarea
                  name="description"
                  placeholder="اكتب وصفاً مختصراً عن حالة المنتج وأهم التفاصيل..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">صورة المنتج</label>

                <div className="rounded-2xl border border-dashed bg-zinc-50 p-6 text-center">
                  <Input name="image" type="file" accept="image/*" />
                  <p className="mt-3 text-sm text-zinc-500">
                    اختر صورة المنتج الأصلية. لاحقاً سنستخدم هذه الصورة كمصدر
                    لتحسينها باستخدام Luma AI.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" className="sm:flex-1">
                  نشر الإعلان
                </Button>

                <Button asChild type="button" variant="outline">
                  <Link href="/listings">إلغاء</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
