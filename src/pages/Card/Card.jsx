import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  toggleAnmount,
} from "../../redux/reducer/product-reducer";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { product, price } = useSelector((store) => store.product);
  const navigate = useNavigate();
  useEffect(() => {
    if (price === 0 && product?.length === 0) {
      navigate("/");
    }
  }, [product, price]);

  const subtotal = 1847.0;
  const couponDiscount = 0.0;
  const shipping = 16.0;
  const total = subtotal - couponDiscount + shipping;
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(deleteProduct(id));
  };
  const changeCount = (text, id) => {
    dispatch(toggleAnmount({ type: text, id: id }));
  };
  return (
    <div>
      <div className="flex">
        <div className="w-2/3 max-w-4xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="bg-white h-[400px] overflow-y-scroll ">
            {product.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b last:border-none"
              >
                <div className="flex items-center">
                  <img
                    src={item.image_url}
                    alt={item.common_name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.common_name}</h3>
                    <p className="text-sm text-gray-500">
                      SKU: {item.genus_id}
                    </p>
                  </div>
                </div>
                <div className="text-center">${item.price}</div>
                <div className="flex items-center">
                  <button
                    onClick={() => changeCount("delete", item?.id)}
                    className={`${
                      item.userCount === 1 && "cursor-not-allowed"
                    } bg-[green] rounded-full text-white w-8 h-8 flex items-center justify-center`}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.userCount}</span>
                  <button
                    onClick={() => changeCount("add", item?.id)}
                    className="bg-[green] text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <div className="text-center">${item.userPrice}</div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="mb-4">
              <label htmlFor="coupon" className="block mb-2 text-gray-700">
                Coupon Apply
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="coupon"
                  className="flex-grow p-2 border rounded-l"
                  placeholder="Enter coupon code here..."
                />
                <button className="px-4 py-2 bg-[green] text-white rounded-r">
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-[gray]">Subtotal</span>
                <span className="font-bold">${price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[gray]">Coupon Discount</span>
                <span className="font-bold">-${0}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[gray]">Shipping</span>
                <span className="font-bold">${0}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${price}</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full py-2 bg-[green] text-white font-bold rounded"
            >
              Proceed To Checkout
            </button>
            <button className="mt-4 w-full py-2 text-green-500 font-bold rounded border border-green-500">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
