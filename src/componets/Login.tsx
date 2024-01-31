/// uThe useReducer hook is an alternative to the useState hook in React that is generally more suitable for managing more complex state logic in your components. It's especially useful when you have state transitions that depend on the previous state.

import { useReducer } from "react";

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState = {
  validating: true,
  token: null,
  username: "",
  name: "",
};

type AuthAction = {
  type: "logout";
};

const authReducer = (state: AuthState, action): AuthState => {};
const [state, dispatch] = useReducer(reducer, initialState);
export const Login = () => {
  return (
    <>
      <h3>Login</h3>

      <div className=" alert alert-info">validating</div>
      <div className=" alert alert-danger">validating</div>
      <div className=" alert alert-success">success!</div>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
