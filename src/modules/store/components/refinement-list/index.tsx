import { StoreGetProductsParams } from "@medusajs/medusa";
import { useCollections, useProductCategories } from "medusa-react";
import { ChangeEvent } from "react";
import Link from "next/link";

type RefinementListProps = {
  refinementList: StoreGetProductsParams;
  setRefinementList: (refinementList: StoreGetProductsParams) => void;
};

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections } = useCollections();
  const { product_categories } = useProductCategories();

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target;

    const collectionIds = refinementList.collection_id || [];

    const exists = collectionIds.includes(id);

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      });
    } else if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      });
    }
  };

  const handleCategoryChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target;

    const categoryIds = refinementList.category_id || [];

    const exists = categoryIds.includes(id);

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        category_id: [...categoryIds, id],
      });
    } else if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        category_id: categoryIds.filter((c) => c !== id),
      });
    }
  };

  return (
    <div className="p-4 sm:p-0 sm:pl-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <span className="text-base-semi">Collections</span>
          <ul className="text-base-regular flex flex-wrap gap-2">
            {collections?.map((c) => (
              <li key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={refinementList.collection_id?.includes(c.id)}
                  onChange={(e) => handleCollectionChange(e, c.id)}
                  className="accent-amber-200 mr-2"
                />
                <label>{c.title}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-base-semi">Categories</span>
          <ul className="text-base-regular flex flex-wrap gap-2">
            {product_categories?.map((c) => (
              <li key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={refinementList.category_id?.includes(c.id)}
                  onChange={(e) => handleCategoryChange(e, c.id)}
                  className="accent-amber-200 mr-2"
                />
                <Link href={`/${c.handle}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefinementList;
