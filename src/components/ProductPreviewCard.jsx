import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-full p-4 m-2 text-center text-white rounded bg-gradient-to-b from-slate-600 to-transparent">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="h-20 mb-2 line-clamp-4">{product.description}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}