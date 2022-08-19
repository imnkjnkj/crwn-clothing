import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "./navigation.module.scss";


const Navigation = () => {
  return (
    <Fragment>
      <div className={styled.navigation}>
        <div className={styled["navigation-container"]}>
          <div className={styled.logo}>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/assets/crown.svg"} alt="logo" />
            </Link>
          </div>
          <div className={styled["navigation-list"]}>
            <ul>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/sign-in">SIGN IN</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default Navigation;
