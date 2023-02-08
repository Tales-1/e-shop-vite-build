import { Link, useLocation } from "react-router-dom";
import { ReactComponent as OrderHistory } from "./svg-icons/pound-price-list-icon.svg";
import { ReactComponent as WishList } from "./svg-icons/like-heart-round-line-icon.svg";
import { ReactComponent as Account } from "./svg-icons/avatar-icon.svg";
import SvgContainer from "./SvgContainer";


type Props = {
  styles: string;
};
const DashboardMenu: React.FC<Props> = ({ styles }) => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");

  return (
    <div
      className={`${styles} flex flex-row gap-10 w-11/12 items-start p-3 max-w-2xl lg:flex-col lg:items-center lg:w-fit lg:h-full bg-white border-2 border-black rounded-md`}
    >
      <Link to={`/${path[1]}/${path[2]}/order-history`} className="w-full">
        <article className="flex flex-col gap-4 justify-center items-center text-center">
        <SvgContainer>
            <OrderHistory />
        </SvgContainer>
          <span className="font-sans-serif font-bold text-sm">
            Order History
          </span>
        </article>
      </Link>

      <Link
        to={`/${path[1]}/${path[2]}/wishlist`}
        className="w-full place-self-stretch">
        <article className="flex flex-col gap-4 justify-center items-center text-center">
        <SvgContainer>
            <WishList />
        </SvgContainer>
          <span className="font-sans-serif font-bold text-sm">Wishlist</span>
        </article>
      </Link>
      <Link to={`/${path[1]}/${path[2]}/account-details`} className="w-full">
        <article className="flex flex-col gap-4 justify-center items-center text-center">
        <SvgContainer>
            <Account />
        </SvgContainer>
          <span className="font-sans-serif font-bold text-sm">
            Account Details
          </span>
        </article>
      </Link>
    </div>
  );
};

export default DashboardMenu;
