import { getCategoryByHandle } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { category: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err: any) => {
    console.error("Error during getCategoryByHandle in generateMetadata:", err);
    notFound()
  })

  const category = product_categories[0]
  console.log("Category object:", category);

  return {
    title: `${category?.name} | Printinc`,
    description: `${category?.name} category`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err: any) => {
    console.error("Error during getCategoryByHandle in CategoryPage:", err);
    notFound()
  })

  return <CategoryTemplate categories={product_categories} />
}
