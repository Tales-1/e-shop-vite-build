import CatalogueCard from "../CatalogueCard";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { selectProducts } from "redux/features/dataSlice";
import { findCurrent } from "redux/features/dataSlice";
import { Link } from "react-router-dom";

const Catalogue: React.FC = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  return (
    <section id="section-one" className="flex flex-col">
      <motion.div
        className="grid grid-rows-[10% auto 50%] gap-12 mx-auto will-change-transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="relative w-full grid place-items-center text-center">
          <div className=" py-12 grid place-items-center">
            <div className="w-3/4 grid gap-5">
              <h1
                className="font-serif text-3xl mb-3
                                                md:text-4xl lg-2:text-4.5xl "
              >
                Asian Fashion, Do it <span className="underline">right.</span>
              </h1>
              <p className="font-sans-serif text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis alias, nam rem earum nesciunt provident, vero in, nemo
                repudiandae amet itaque tenetur! Consequatur in eveniet
                laboriosam nobis quia ipsa vel?
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full py-6">
          <div className="flex relative z-0 justify-evenly w-full max-w-[85rem] mx-auto">
            <CatalogueCard
              url="/collection/kurtas"
              src="https://res.cloudinary.com/db1m4tnkn/image/upload/v1667087752/e-shop-images/Kurta-11-1_flabev.jpg"
              name="Kurtas"
              style="bottom-6 left-4"
              cardNo={1}
            />
            <CatalogueCard
              url="/collection/dresses"
              src="https://res.cloudinary.com/db1m4tnkn/image/upload/v1667087753/e-shop-images/dress-5_isiknk.jpg"
              name="Dresses"
              style=""
              cardNo={2}
            />
            <CatalogueCard
              url="/collection/casual"
              src="https://res.cloudinary.com/db1m4tnkn/image/upload/v1667087752/e-shop-images/Kurta-11-1_flabev.jpg"
              name="Casual"
              style="top-6 right-4"
              cardNo={3}
            />
          </div>
        </div>

        <div className="w-screen py-6 bg-sauvignon-cr">
          <motion.h1
            className="text-center font-serif text-2xl lg:text-3xl will-change-transform"
            initial={{ opacity: 0, y: -32 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Our Featured Items
          </motion.h1>

          <motion.div
            className="w-10/12 ml-auto flex flex-col will-change-transform"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              translateX: "0%",
              transition: { duration: 0.8, delay: 0.2, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <ul className="grid grid-flow-col gap-8 overflow-y-scroll grid-rows-3 items-stretch">
              {products.map((item, i: number) => {
                if (i < 11) {
                  return (
                    <li
                      className="flex flex-col items-center w-full min-h-[9rem] 
                                                            min-w-[13rem] lg:min-w-[18rem] row-start-2 aspect-[1/1.5]
                                                            cursor-pointer
                                                            "
                      key={i}
                    >
                      <Link
                        to={`/collection/${item.type}/${item.name
                          ?.split(" ")
                          .join("-")}`}
                        className="h-full w-full flex flex-col items-center"
                        onClick={() => dispatch(findCurrent(item.id))}
                      >
                        <img
                          src={item.url![0]}
                          alt="clothing"
                          className="object-cover w-full h-full max-h-card "
                        />
                        <p className="font-serif text-lg text-center">
                          {item.name}
                        </p>
                        <span className="text-xs">£{item.price}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Catalogue;
