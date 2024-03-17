import { HtmlHTMLAttributes } from "react";
import PropTypes from 'prop-types'
import "./Header.css";

interface HeaderProps {
    text: string;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
    text: "Feedback UI",
}

Header.prototype = {
    text: PropTypes.string.isRequired,
}

export default Header;
