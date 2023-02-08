import priceTag from "../header/icons/red-label-two.png";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "redux/store/hooks";
import { findCurrent } from "redux/features/dataSlice";
import { motion } from "framer-motion";

type Props = {
  name: string | undefined;
  price: number | undefined;
  urls?: string[] | undefined;
  id?: string | undefined;
};

const ProductCard: React.FC<Props> = ({ name, price, urls, id }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.6, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center 
                        min-h-card w-full max-w-[14rem] lg-2:max-w-[17rem] rounded-lg will-change-transform"
    >
      <div className="grid relative shadow-lg h-full w-full">
        <Link
          to={`${pathname}/${name?.split(" ").join("-")}`}
          className="row-start-1 col-start-1"
          onClick={() => dispatch(findCurrent(id))}
        >
          <img
            className="rounded-md max-h-card h-full w-full object-cover"
            src={urls?.[0]}
            alt="item"
          />
        </Link>

        <div className="absolute grid row-start-1 col-start-1 text-lg w-fit h-fit -right-10">
          <img
            className="w-24 row-start-1 col-start-1 rotate-"
            src={priceTag}
            alt="price tag"
          />
          <p className="row-start-1 col-start-1 mt-8 ml-4 rotate-[41deg] text-white font-bold">
            £{price}
          </p>
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold font-serif text-center">
        {name}
      </h3>
    </motion.article>
  );
};

export default ProductCard;
