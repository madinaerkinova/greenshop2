import React from "react";
import { loadState } from "../lib/storage";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Heart } from "../assets/icons/heart";
import { CardIcon } from "../assets/icons/card-icon";
import {
  addProduct,
  deleteProduct,
  removeLike,
  setLike,
} from "../redux/reducer/product-reducer";
export const CardMain = (data) => {
  let datas = [];
  if (loadState("product") === undefined) {
    datas = { product: [], like: [] };
  } else {
    const { product, like } = loadState("product");
    datas.push({ product, like });
  }
  const [like, setLikeData] = React.useState(false);
  const [addToCard, setToCard] = React.useState(false);
  const dispatch = useDispatch();

  const addProductData = () => {
    dispatch(addProduct({ ...data }));
    setToCard(true);
  };
  const removeProduct = () => {
    dispatch(deleteProduct({ id: data?.id }));
    setToCard(false);
  };

  const addLike = () => {
    dispatch(setLike({ ...data }));
    setLikeData(true);
  };
  const removeLikeProduct = () => {
    dispatch(removeLike({ id: data?.id }));
    setLikeData(false);
  };
  React.useEffect(() => {
    setToCard(datas[0]?.product?.some((item) => item?.id === data?.id));
    setLikeData(datas[0]?.like?.some((item) => item?.id === data?.id));
  }, [data, datas, like, addToCard]);

  return (
    <div
      key={data?.id}
      className="group bg-white  p-4  overflow-hidden shadow-md rounded-lg flex flex-col items-center"
    >
      <div className="relative w-full h-64 mb-4 ">
        {data?.discount && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
            {data?.discount}
          </span>
        )}
        <Link to={`/shop/${data?.id}`}>
          <img
            src={data?.image_url}
            alt={data?.name}
            className="w-full h-full object-cover rounded-lg border-t-2 border-white group-hover:border-primary"
          />
        </Link>
        <div className="absolute bottom-0 right-[50%] translate-x-[50%] p-4 bg-white/80 gap-3 hidden group-hover:flex">
          <button
            onClick={addToCard ? removeProduct : addProductData}
            className={`${
              addToCard
                ? "text-primary stroke-primary fill-primary"
                : "text-secondary"
            }`}
          >
            <CardIcon />
          </button>
          <button
            onClick={like ? removeLikeProduct : addLike}
            className={`${
              like
                ? "text-primary stroke-primary fill-primary"
                : "text-secondary"
            }`}
          >
            <Heart />
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">{data?.name}</h2>
        <p className="text-green-600 font-bold mb-1">
          ${data?.price.toFixed(2)}
        </p>
        {data?.original_price && (
          <p className="text-gray-500 line-through">
            ${data?.original_price?.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};
