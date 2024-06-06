import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import img from "../../assets/images/thank-you.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/reducer/product-reducer";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
  const dispatch = useDispatch();
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    differentAddress: "",
  });
  const [errors, setErrors] = useState({});
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const handleCheckboxChange = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { product, price } = useSelector((store) => store?.product);
  const validateForm = () => {
    let newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.zip) newErrors.zip = "Zip code is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email address is invalid";
    if (!form.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", form);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
    dispatch(removeAll());
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 items-center">
              <div className="mb-4">
                <label className="block text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="mb-4">
                <label className="block text-gray-700">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={form.country}
                  onChange={handleChange}
                  required
                >
                  <option>Select a country / region</option>
                  {/* Add country options here */}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Street Address <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="streetAddress"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={form.streetAddress}
                  onChange={handleChange}
                  required
                  placeholder="House number and street name"
                />
                <div className="">
                  <h1></h1>
                  <input
                    type="text"
                    name="additionalAddress"
                    className="w-full border border-gray-300 p-2 rounded mt-2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                className="w-full border border-gray-300 p-2 rounded"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option>Select a state</option>
                {/* Add state options here */}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Zip <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="zip"
                className="w-full border border-gray-300 p-2 rounded"
                value={form.zip}
                onChange={handleChange}
                required
              />
              {errors.zip && (
                <p className="text-red-500 text-sm">{errors.zip}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select
                  name="phoneCode"
                  className="border border-gray-300 p-2 rounded-l"
                  onChange={handleChange}
                >
                  <option>+966</option>
                  {/* Add other country codes here */}
                </select>
                <input
                  type="text"
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded-r"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={handleCheckboxChange}
                />
                Ship to a different address?
              </label>
            </div>
            {shipToDifferentAddress && (
              <div className="mb-4">
                {/* Add different shipping address fields here */}
                <label className="block text-gray-700">Different Address</label>
                <input
                  type="text"
                  name="differentAddress"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Address"
                  value={form.differentAddress}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">
                Order notes (optional)
              </label>
              <textarea
                name="orderNotes"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[green] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div className="bg-white shadow-md rounded p-4">
            <div className="border-b pb-4 mb-4 h-[160px] overflow-y-scroll">
              {product.map((product, index) => (
                <div key={index} className="flex items-center mb-4 mr-4">
                  <img
                    src={product?.image_url}
                    alt={product?.scientific_name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {product?.scientific_name}
                    </h3>
                    <p className="text-sm text-gray-500">SKU: {product.rank}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">x{product.userCount}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Coupon Discount</span>
                <span className="text-red-500">-${0}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${0}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${price}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  className="mr-2"
                />
                <label
                  htmlFor="paypal"
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/paypal.png"
                    alt="PayPal"
                    className="w-8 h-8 mr-2"
                  />
                  PayPal
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  className="mr-2"
                />
                <label
                  htmlFor="credit-card"
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/mastercard.png"
                    alt="MasterCard"
                    className="w-8 h-8 mr-1"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                    className="w-8 h-8 mr-1"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/amex.png"
                    alt="Amex"
                    className="w-8 h-8 mr-1"
                  />
                  Credit Card
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment"
                  className="mr-2"
                />
                <label htmlFor="bank-transfer" className="cursor-pointer">
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="payment"
                  className="mr-2"
                />
                <label htmlFor="cash-on-delivery" className="cursor-pointer">
                  Cash on Delivery
                </label>
              </div>
            </div>
            <button
              onClick={handleOpen}
              className="w-full bg-[green] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="border-b-[10px] border-primary">
            <div className="pt-[20px] pb-[10px] bg-spinach">
              <div className="mx-auto h-[80px] mb-3 w-[65px]">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center px-10 gap-4 mb-4 py-4 border-b border-secondary">
              <div className="flex flex-col border-r border-secondary">
                <p className="font-normal text-sm text-secondary mb-1">
                  Order Number
                </p>
                <p className="font-bold text-base text-secondary">19586687</p>
              </div>
              <div className="flex flex-col border-r border-secondary">
                <p className="font-normal text-sm text-secondary mb-1">Date</p>
                <p className="font-bold text-base text-secondary">
                  {month + "/" + date + "/" + year}
                </p>
              </div>

              <div className="flex flex-col border-r border-secondary">
                <p className="font-normal text-sm text-secondary mb-1">Total</p>
                <p className="font-bold text-base text-secondary">${price}</p>
              </div>
              <div>
                <p className="font-normal text-sm text-secondary mb-1">
                  Payment Method
                </p>
                <p className="font-bold text-nowrap text-base text-secondary">
                  Cash on delivery
                </p>
              </div>
            </div>

            <div className="px-10">
              <p className="text-base text-reven-black font-bold mb-1">
                Order Details
              </p>
              <div className="grid grid-cols-2 w-full mb-[10px] pb-[10px] border-b border-secondary">
                <p className="text-base text-reven-black font-medium">
                  Products
                </p>
                <div className="grid grid-cols-2 grow gap-8">
                  <p className="text-base text-reven-black font-medium">Qty</p>
                  <p className="text-base text-reven-black font-medium">
                    Subtotal
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 overflow-y-scroll h-[150px] mb-3">
                  {product?.map((item) => (
                    <div
                      key={item?.id}
                      className="grid grid-cols-2 gap-4 items-center"
                    >
                      <div className="flex items-center gap-[11px]">
                        <div className="w-[70px] h-[70px] overflow-hidden">
                          <img
                            className="w-full h-full object-contain"
                            src={item?.image_url}
                            alt={item?.common_name}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium text-secondary text-base mb-[6px]">
                            {item?.common_name}
                          </p>
                          <p className="text-grey text-sm font-normal">
                            SKU:{" "}
                            <span className="text-secondary">{item?.slug}</span>
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <p>(x{item?.userCount})</p>
                        <p className="text-primary pl-6 text-lg font-bold">
                          ${item?.userPrice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 items-center pb-5 border-b border-secondary mb-[8px]">
                  <div></div>
                  <div className="ml-[-120px]">
                    {" "}
                    <div className="grid  grid-cols-2 items-center">
                      <p className="text-secondary font-normal text-base">
                        Shiping
                      </p>
                      <p className="font-medium text-lg">$0</p>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <p className="text-secondary font-normal text-base">
                        Total
                      </p>
                      <p className="font-medium text-lg">${price}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm font-normal text-dull text-center mb-[20px]">
                    Your order is currently being processed. You will receive an
                    order confirmation email shortly with the expected delivery
                    date for your items.
                  </p>
                  <Button variant="contained" onClick={handleClose}>
                    Track your order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Checkout;
