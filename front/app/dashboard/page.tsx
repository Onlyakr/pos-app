import { SkeletonCard } from "@/components/SkeletonCard";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-5 w-full h-full md:grid-cols-2 lg:grid-cols-3">
      <SkeletonCard className="w-full min-w max-w-100 h-64 rounded-2xl mx-auto" />
    </div>
  );
};
export default Page;
