import MainSide from "./mainSide/MainSide";
import NotFound from "./notFound/NotFound";
import Nav from "./nav/Nav";
import Favorites from "./favorites/Favorites";
import { Route, Routes } from "react-router-dom";

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
