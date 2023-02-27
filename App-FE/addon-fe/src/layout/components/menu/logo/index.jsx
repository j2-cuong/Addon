import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Yoda from "../../../../assets/images/logo/logo.png";

import themeConfig from '../../../../configs/themeConfig.jsx';

export default function MenuLogo(props) {
  const customise = useSelector(state => state.customise)

  return (
    <Link
      to="/index"
      className="hp-header-logo hp-d-flex hp-align-items-end just justify-content-center "
      onClick={props.onClose}>
      <img className="hp-logo" src={Yoda} alt="logo" />
    </Link>
  );
};