import { useState } from "react";

import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login':'Register'}</h3>
        {/* name */}
        {!values.isMember && <FormRow
          type="text"
          name="name"
          handleChange={handleChange}
          value={values.name}
          labelText="name"
        />}
        {/* email */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
          labelText="email"
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
          labelText="password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>{values.isMember ? 'Not a member yet?':'Already a member'}
        <button className="member-btn" onClick={toggleMember}>{values.isMember ? 'Register': 'Login'}</button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
