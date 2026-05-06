"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";

type EnhanceImageButtonProps = {
  listingId: string;
  enhanceAction: (listingId: string) => Promise<void>;
};

export default function EnhanceImageButton({
  listingId,
  enhanceAction,
}: EnhanceImageButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant="secondary"
      className="w-full"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await enhanceAction(listingId);
        });
      }}
    >
      {isPending ? "جاري تحسين الصورة..." : "حوّلها لصورة احترافية"}
    </Button>
  );
}