import { Link } from "react-router-dom";

import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ahh! Page not found</h3>
        <p>We can&apos;t seem to find page you&apos;re looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
