import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addItem, calculateTotals } from "../redux/cart/cartSlice";
import { useUser } from "@clerk/clerk-react";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    dispatch(calculateTotals());
    setAddedToCart(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-semibold">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={product?.images?.[0]}
              alt={product?.title}
              className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {product?.title}
            </h1>

            <div>
              <p className="text-gray-600 mb-2 font-semibold">Category:</p>
              <p className="text-lg text-gray-700">{product?.category?.name}</p>
            </div>

            <div>
              <p className="text-gray-600 mb-2 font-semibold">Description:</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product?.description}
              </p>
            </div>

            <div className="border-t-2 border-b-2 py-4">
              <p className="text-5xl font-bold">${product?.price}</p>
            </div>

            {user && (
              <button
                onClick={handleAddToCart}
                className={
                  "w-full font-bold py-3 px-6 rounded-lg transition text-lg bg-blue-600 hover:bg-blue-700 text-white"
                }
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
