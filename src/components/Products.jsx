import { useEffect, useState } from 'react'
import { Trash2, Edit, ShoppingBasket } from "lucide-react";

const Products = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState('')
    const [allProducts, setAllProducts] = useState([])
    const [editedIndex, setEditedIndex] = useState(null)

    const addOrUpdateProduct = () => {
        let newProduct = { productName, productPrice, productDescription, productImage };

        if (editedIndex !== null) {
            // Update existing product
            let updatedProducts = [...allProducts];
            updatedProducts[editedIndex] = newProduct;
            setAllProducts(updatedProducts);
            localStorage.setItem("products", JSON.stringify(updatedProducts));
        } else {
            // Add new product
            setAllProducts([...allProducts, newProduct]);
            localStorage.setItem("products", JSON.stringify([...allProducts, newProduct]));
        }
        // Clear input fields
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductImage('');
        setEditedIndex(null);
    };




    const deleteProduct = (index) => {
        let newAllProducts = [...allProducts];
        newAllProducts.splice(index, 1);
        setAllProducts(newAllProducts);
        localStorage.setItem("products", JSON.stringify(newAllProducts));
    };

    const editProduct = (index) => {
        let product = allProducts[index];
        setProductName(product.productName);
        setProductPrice(product.productPrice);
        setProductDescription(product.productDescription);
        setProductImage(product.productImage);
        setEditedIndex(index);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg" style={{ padding: "20px" }}>
                <div className="flex items-center justify-center gap-2 mb-6">
                    <ShoppingBasket className='text-blue-600 fw-bold' />
                    <h1 className="text-2xl font-bold text-blue-700">Mini Mart</h1>
                </div>

                <div className="space-y-4">
                    <input autoFocus
                        type="text"
                        placeholder="Product Name"
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        style={{ margin: "15px 0px", padding: "10px" }} />

                    <input
                        type="number"
                        placeholder="Product Price"
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        style={{ margin: "15px 0px", padding: "10px" }} />

                    <textarea
                        placeholder="Product Description"
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="w-full h-24 resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        style={{ margin: "15px 0px", padding: "10px" }} />

                    <input
                        type="text"
                        placeholder="Product Image URL"
                        onChange={(e) => setProductImage(e.target.value)}
                        className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        style={{ margin: "15px 0px", padding: "10px" }} />
                </div>

                <div className="mt-6 flex justify-end items-center">
                    <button
                        onClick={addOrUpdateProduct}
                        className="flex items-center justify-center gap-2 px-10 py-24 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                        style={{ padding: "10px 17px" }}>
                        {editedIndex !== null ? "✏️ Update Product" : "➕ Add Product"}
                    </button>
                </div>





                {allProducts.length === 0 ? (
                    <p className="text-center mt-5 text-gray-500">No products added yet.</p>
                ) : (
                    <div>

                        <h1 className="text-2xl font-bold text-center mt-5">All Products</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {allProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xl transition"
                                    style={{ marginTop: "20px", padding: "10px 0px" }}>
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="w-32 h-32 object-cover rounded-md mb-4"
                                    />
                                    <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
                                    <p className="text-gray-600 mb-1">₦{product.productPrice}</p>
                                    <p className="text-sm text-gray-500 mb-4">{product.productDescription}</p>

                                    <div className="flex gap-3">
                                        <button className="p-2 text-red-500 rounded-lg hover:bg-red-600" onClick={() => deleteProduct(index)}>
                                            <Trash2 size={20} />
                                        </button>
                                        <button className="p-2 text-blue-500 rounded-lg hover:bg-blue-600" onClick={() => editProduct(index)}>
                                            <Edit size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Products;

