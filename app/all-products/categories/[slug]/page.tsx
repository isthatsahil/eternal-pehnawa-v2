import CategroyTabs from "@/components/CategroyTabs";
import commerce from "@/lib/commerce";

export default async function Category() {
  const categories = await commerce.categories.list();
  return (
    <div className="mx-auto  max-w-screen-xl px-4 md:px-8 overflow-hidden">
      <div className="flex w-full justify-center">
        <CategroyTabs categories={categories} />
      </div>
    </div>
  );
}
