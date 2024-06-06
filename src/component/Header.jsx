import React, { useState } from "react";
import { FaSearch, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/icons/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { validationLogin } from "../lib/login-validotion";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUser } from "../redux/reducer/user-reducer";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const { handleSubmit, reset, register, formState: { errors } } = useForm({ resolver: zodResolver(validationLogin) });
  const { product } = useSelector((store) => store.product);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearchOpen = () => setSearchOpen(true); 
  const handleSearchClose = () => setSearchOpen(false); 


  const [bool, setBool] = useState(false);
  const submit = (text) => {
    dispatch(setUser(text));
    setCookie("user", text);
    handleClose(false);
    reset();
    navigate("/");
  };

  const registerUser = (text) => {
    if (user?.name === text?.name && user?.password === text?.password) {
      setCookie("user", text);
      handleClose(false);
      navigate("/");
      reset();
    } else {
      toast("Error !");
    }
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container">
          <div className="flex justify-between items-center py-4 px-6">
            <Link to="/" className="flex items-center w-auto">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 animate-spinSlow"
              />
              <span className="text-xl font-bold text-primary ml-2">
                GREENSHOP
              </span>
            </Link>
            <nav className="flex items-center gap-10 w-auto">
              <Link to="/" className="text-gray-800 hover:text-primary">
                Home
              </Link>
              <Link to="/shop" className="text-gray-800 hover:text-primary">
                Shop
              </Link>
              <a href="#" className="text-gray-800 hover:text-primary">
                Plant Care
              </a>
              <a href="#" className="text-gray-800 hover:text-primary">
                Blogs
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-primary">
                {open ? (
                  <FaTimes onClick={handleClose} />
                ) : (
                  <FaSearch onClick={handleOpen} />
                )}
              </button>
              <Link
                to="/cart"
                className="text-gray-800 hover:text-primary relative"
              >
                <FaShoppingCart />
                <p className="absolute -top-3 -right-2 bg-[#fff] ">
                  {product.length}
                </p>
              </Link>
              <button
                onClick={handleOpen}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                {user === undefined ? "Login" : "Profile"}
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="py-[52px] px-[100px]">
                    <div className="grid grid-cols-2 mb-10 items-center gap-3 max-w-[70%] w-full mx-auto">
                      <button
                        onClick={() => setBool(false)}
                        className={`text-xl font-medium border-r  ${
                          !bool
                            ? "text-primary border-primary"
                            : "text-secondary border-secondary"
                        }`}
                      >
                        Login
                      </button>
                      <button
                        onClick={() => setBool(true)}
                        className={`text-xl font-medium  ${
                          bool ? "text-primary " : "text-secondary "
                        }`}
                      >
                        Register
                      </button>
                    </div>
                    {!bool && (
                      <>
                        <p className="text-sm text-secondary font-normal mb-[14px]">
                          Enter your email and password to register.
                        </p>
                        <form
                          className="flex flex-col gap-3"
                          onSubmit={handleSubmit(submit)}
                        >
                          <TextField
                            {...register("name", { required: true })}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            placeholder="name"
                            label="name"
                          />
                          <TextField
                            placeholder="password"
                            {...register("password", { required: true })}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            // placeholder="password"
                            label="password"
                            type="password"
                          />
                          <Button type="submit" variant="contained">
                            Login
                          </Button>
                        </form>
                      </>
                    )}
                    {bool && (
                      <>
                        <form
                          className="flex flex-col gap-3"
                          onSubmit={handleSubmit(registerUser)}
                        >
                          <TextField
                            {...register("name", { required: true })}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            placeholder="name"
                            label="name"
                          />
                          <TextField
                            placeholder="password"
                            {...register("password", { required: true })}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            label="password"
                            type="password"
                          />
                          <Button type="submit" variant="contained">
                            Register
                          </Button>
                          <ToastContainer />
                        </form>
                      </>
                    )}
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
