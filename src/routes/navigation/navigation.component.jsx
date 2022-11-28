import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styled from "./navigation.module.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const signOutHandle = async () =>{
    await signOutUser();
    setCurrentUser(null);
    
  }

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
                {
                  currentUser ? (<Link to="/auth" onClick={ signOutHandle }>SIGN OUT</Link>) : <Link to="/auth">SIGN IN</Link>
                }
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
