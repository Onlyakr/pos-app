import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard({ className }: { className?: string }) {
  const items = new Array(12).fill(0);
  return items.map((item, index) => (
    <Skeleton key={index} className={className} />
  ));
}
