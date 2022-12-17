import { HashRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
// UTLS & MISC
import Notification from "./components/Notification";
import ScreenOverlay from "./utils/screenOverlay";
import useFetcher from "./utils/hooks/useFetcher";
import useStoreUser from "./utils/hooks/useStoreUser";
import Welcome from "./pages/WelcomePg";
import { selectLoading } from "./redux/features/screenSlice";
import { useAppSelector } from "./redux/store/hooks";
import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  const { status, fetch, dispatch, products } = useFetcher();
  const { isLoggedIn } = useStoreUser();
  const isVisible = useAppSelector(selectLoading);

  useEffect(() => {
    if (status === "idle") {
      fetch();
      console.log(products);
    } else if (status === "loading") return;
    else if (status === "rejected") {
      return alert("Error fetching data");
    }
    // eslint-disable-next-line
  }, [status, dispatch]);

  return (
    <div className="relative flex flex-col">
      <Welcome isVisible={isVisible} />
      <Notification />
      <ScreenOverlay />
      <Router>
        <ScrollToTop />
        <AnimatedRoutes isLoggedIn={isLoggedIn} />
      </Router>
    </div>
  );
};

export default App;
