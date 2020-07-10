import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <div className="navigation">
    <ul className="navigation-list">
      <li className="navigation-item">
        <Link className="navigation-link" to={ROUTES.SIGN_IN}>
          Sign In
        </Link>
      </li>
      <li>
        <Link className="navigation-link" to={ROUTES.LANDING}>
          Landing
        </Link>
      </li>
      <li>
        <Link className="navigation-link" to={ROUTES.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link className="navigation-link" to={ROUTES.ACCOUNT}>
          Account
        </Link>
      </li>
      <li>
        <Link className="navigation-link" to={ROUTES.ADMIN}>
          Admin
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
