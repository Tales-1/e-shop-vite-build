import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
//PARENT ROUTES
import ParentRoute from "pages/ParentRoute";
import ProductPg from "pages/ProductPg";
import LoginPg from "pages/profile/LoginPg";
import RegisterPg from "pages/profile/RegisterPg";
import ResetPg from "pages/profile/ResetPg";
// SUB-ROUTE COMPONENTS
import Orderhistory from "pages/profile/dashboard/sub-routes/Orderhistory";
import Wishlist from "pages/profile/dashboard/sub-routes/Wishlist";
import AccountDetails from "pages/profile/dashboard/sub-routes/AccountDetails";
import Spinner from "components/Spinner";

const LazyProductListPg = lazy(() => import("pages/ProductListPg"));
const LazyProtectedPg = lazy(() => import("pages/ProtectedPg"));
const LazyCartPg = lazy(() => import("pages/cart/CartPg"));
const LazyContactPg = lazy(() => import("pages/ContactPg"));
const LazyDashboardPg = lazy(
  () => import("pages/profile/dashboard/DashboardPg")
);
const LazyCheckoutPg = lazy(() => import("pages/cart/checkout/CheckoutPg"));
const LazyDelivery = lazy(
  () => import("pages/cart/checkout/sub-routes/Delivery")
);
const LazyInformation = lazy(
  () => import("pages/cart/checkout/sub-routes/Information")
);
const LazyPayment = lazy(
  () => import("pages/cart/checkout/sub-routes/Payment")
);
const LazyReview = lazy(() => import("pages/cart/checkout/sub-routes/Review"));

type Props = {
  isLoggedIn: boolean;
};

const AnimatedRoutes: React.FC<Props> = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <Suspense fallback={<Spinner />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ParentRoute />}>
          <Route path="collection/:name">
            <Route index element={<LazyProductListPg />} />
            <Route path=":type" element={<ProductPg />} />
          </Route>

          <Route path="contact-us" element={<LazyContactPg />} />

          <Route path="cart" element={<LazyCartPg />} />

          <Route
            path="profile/dashboard"
            element={
              <LazyProtectedPg accessGranted={isLoggedIn}>
                <LazyDashboardPg />
              </LazyProtectedPg>
            }
          >
            <Route path="order-history" element={<Orderhistory />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="account-details" element={<AccountDetails />} />
          </Route>

          <Route path="login" element={<LoginPg />} />
          <Route path="register" element={<RegisterPg />} />
          <Route path="reset" element={<ResetPg />} />
        </Route>

        <Route path="/checkout" element={<LazyCheckoutPg />}>
          <Route path="information" element={<LazyInformation />} />
          <Route path="delivery" element={<LazyDelivery />} />
          <Route path="payment" element={<LazyPayment />} />
          <Route path="review" element={<LazyReview />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
export default AnimatedRoutes;
