import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Data } from "../../../data";
import {
  removeLike,
  addProduct,
  deleteProduct,
  setLike,
  toggleAnmount,
} from "../../redux/reducer/product-reducer";
import { Facebook, Twitter, Email, LinkedIn } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Heart } from "../../assets/icons/heart";
import { loadState } from "../../lib/storage";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import { CardMain } from "../../component/card-main";

export const DetailPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [number, setNumber] = React.useState(1);
  const { id } = useParams();
  const data = Data?.find((item) => item.id === Number(id));

  const newData = Data.slice(1, 15);
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
  const navigate=useNavigate()

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
  const increment = () => {
    dispatch(toggleAnmount({ ...data, type: "add" }));
    setNumber((p) => p + 1);
  };
  const decrement = () => {
    if (counter >= 1) {
      dispatch(toggleAnmount({ ...data, type: "delete" }));
      setNumber((p) => p - 1);
    }
  };
  React.useEffect(() => {
    setToCard(datas[0]?.product?.some((item) => item?.id === data?.id));
    setLikeData(datas[0]?.like?.some((item) => item?.id === data?.id));
  }, [data, datas, like, addToCard]);
  return (
    <>
      <section className="pt-9">
        <div className="container">
          <p className="text-base text-secondary font-bold mb-11">
            Home/ <span className="font-normal"> Shop</span>
          </p>
          <div className="grid grid-cols-2 gap-13">
            <div className="w-full ">
              <img
                className="w-[80%] h-[80%] "
                src={data?.image_url}
                alt={data?.common_name}
              />
            </div>
            <div>
              <h2 className="text-secondary font-bold text-3xl mb-5">
                {data?.common_name}
              </h2>
              <p className="text-primary font-bold text-xl mb-7">
                $ {data?.price}
              </p>
              <p className="font-medium text-base text-secondary mb-[10px]">
                Short Description:
              </p>
              <div className="flex items-center flex-wrap mb-6">
                {data?.synonyms?.map((item) => (
                  <p key={nanoid()} className="text-dull font-normal text-sm ">
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={increment}
                    className={`${
                      addToCard && "cursor-no-drop"
                    } w-[40px] h-[40px] text-center text-lg font-semibold bg-primary rounded-full text-white`}
                  >
                    +
                  </button>
                  <p>{number}</p>
                  <button
                    onClick={decrement}
                    className={`${
                      addToCard && "cursor-no-drop"
                    } w-[40px] h-[40px] text-center text-lg font-semibold bg-primary rounded-full text-white`}
                  >
                    -
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to={"/shop"}
                    className="font-bold no-underline text-sm text-white py-[11px] px-8 bg-primary rounded-md"
                  >
                    BUY NOW
                  </Link>
                  <button
                    onClick={()=>navigate('/checkout') }
                    className={`
                  } font-bold text-sm text-primary py-[11px] px-8 border border-primary rounded-md`}
                  >
                    {addToCard ? "REMOVE TO CARD" : "ADD TO CARD"}
                  </button>
                  <button>
                    <button
                      onClick={like ? removeLikeProduct : addLike}
                      className={`${
                        like
                          ? "text-primary border border-primary"
                          : "text-secondary border border-secondary"
                      } p-3 rounded-md`}
                    >
                      <Heart />
                    </button>
                  </button>
                </div>
              </div>
              <p className="text-base font-normal text-grey flex items-center gap-1 mb-[10px]">
                Bibliography:{" "}
                <span className="text-dull">{data?.bibliography}</span>
              </p>
              <p className="text-base font-normal text-grey flex items-center gap-1 mb-[18px]">
                Categories: <span className="text-dull">{data?.family}</span>
              </p>
              <div className="flex items-center gap-4">
                <p className="text-secondary text-base font-medium">
                  Share this products:
                </p>
                <div className="flex items-center gap-5 text-secondary">
                  <Facebook />
                  <Twitter />
                  <LinkedIn />
                  <Email />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[100px] pb-[40px]">
        <div className="container">
          <h2 className="text-lg font-bold text-primary mb-[11px]">
            Releted Products
          </h2>
          <span className="block h-[1px] bg-primary mb-10 w-full"></span>
          <Slider {...settings} className="gap-5">
            {newData.map((item) => (
              <div key={nanoid()} className="pr-4 mb-6">
                <CardMain {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
