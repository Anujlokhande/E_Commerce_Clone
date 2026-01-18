import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/products/productsSlice";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [searchTitle, setSearchTitle] = useState("");
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);
  // console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      dispatch(setProducts(res.data));

      setLoading(false);
    };
    fetchData();
  }, []);

  const searchedProducts = products.filter((p) => {
    const matchSearch = p.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchCategory =
      category === "All" ||
      p.category?.name.toLowerCase() === category.toLowerCase();
    return matchSearch && matchCategory;
  });

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-4 bg-white ">
      <div className="flex flex-col justify-center items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>
        <input
          type="text"
          ref={searchRef}
          onChange={() => {
            setSearchTitle(searchRef.current.value);
          }}
          placeholder="Search products..."
          className="w-full max-w-md p-3 border-2 border-gray-300 rounded-lg "
        />
      </div>

      <div className="w-2/3 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max ">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {searchedProducts.length == 0 ? (
                <p>No Item Found</p>
              ) : (
                searchedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
