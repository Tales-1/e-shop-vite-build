import BreadCrumbs from "utils/BreadCrumbs";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import { selectCurrentItem } from "redux/features/dataSlice";
import { addToCart } from "redux/features/cartSlice";
import { showCart } from "redux/features/screenSlice";
import Button from "components/Button";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
interface ProductObject {
  id?: string;
  name?: string;
  type?: string;
  price?: number;
  url?: string[];
  description?: string;
  qty?: number;
}

const ProductPg: React.FC = () => {
  const currentItem: ProductObject = useAppSelector(selectCurrentItem);
  const dispatch = useAppDispatch();
  const [cartItem, setCartItem] = useState({ ...currentItem, qty: 1 });
  const { url, name, description, price } = currentItem;

  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  };
  const img = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <BreadCrumbs />
      <div className="bg-dark py-4">
      <AnimatePresence>
        <motion.article
          className="flex flex-col w-10/12 mx-auto shadow-lg gap-8 px-6 py-8 md:flex-row lg:gap-8 justify-evenly 
          bg-white "
          variants={variant}
          initial="hidden"
          animate="show"
          exit={{ y: "2000px" }}
        >
          <motion.div
            className="flex w-full lg-2:w-1/3 items-start md:items-center"
            variants={img}
          >
            <img
              src={url![0]}
              alt="current item"
              className="object-cover w-full"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 items-start w-full lg-2:w-1/3"
            variants={text}
          >
            <h1 className="text-2xl lg:text-4xl font-bold font-serif md:text-start">
              {name}
            </h1>
            <span className="text-xl lg:text-2xl font-semibold md:text-start lg:mb-2">
              £{price}
            </span>

            <div className="grid gap-5 font-sans-serif md:mx-0 md:mr-auto mt-3 lg:mb-12">
              <h3 className="lg:text-lg ">Select Size</h3>
              <div className="flex flex-wrap flex-row gap-3">
                <Button styles="p-2 border-b-2 w-12 border-blue-card rounded-md">
                  S
                </Button>
                <Button styles="p-2 border-b-2 w-12 border-blue-card rounded-md">
                  M
                </Button>
                <Button styles="p-2 border-b-2 w-12 border-blue-card rounded-md">
                  L
                </Button>
                <Button styles="p-2 border-b-2 w-12 border-blue-card rounded-md">
                  XL
                </Button>
                <Button styles="p-2 border-b-2 w-12 border-blue-card rounded-md">
                  XXL
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full items-center my-6 md:flex-row md:gap-4">
              <Button
                styles="w-full md:w-3/4 bg-red p-3 text-xl lg:text-2xl text-white font-bold"
                func={() => {
                  dispatch(addToCart(cartItem));
                  dispatch(showCart());
                  setCartItem({ ...currentItem, qty: 1 });
                }}
              >
                ADD TO CART
              </Button>
              {/* <p className="aspect-square w-13 bg-blue-400">Fav</p> */}
            </div>

            <div className="grid gap-3 mt-4 font-sans-serif">
              <h2 className="text-xl">Description:</h2>
              <p>{description}</p>
            </div>
          </motion.div>
        </motion.article>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductPg;
