import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/catalog">Catalog</Link>

      <Link to="/favorite">Favorite</Link>
    </>
  );
};

export default Header;
