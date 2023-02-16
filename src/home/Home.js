import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import MainSide from "./mainSide/MainSide";
import NotFound from "./notFound/NotFound";
import Favorites from "./favorites/Favorites";

const Home = function () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainSide />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default Home;
