/// uThe useReducer hook is an alternative to the useState hook in React that is generally more suitable for managing more complex state logic in your components. It's especially useful when you have state transitions that depend on the previous state.

import { useEffect, useReducer } from "react";

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

type LoginPayload = {
  username: string;
  name: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validating: false,
        token: null,
        name: "",
        username: "",
      };
      break;
    case "login":
      const { name, username } = action.payload;
      return {
        validating: false,
        token: "dsadsad",
        name: name,
        username: username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "dustin",
        username: "username",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  if (validating) {
    return (
      <>
        <h3>Login</h3>

        <div className=" alert alert-info">validating...</div>
      </>
    );
  }
  return (
    <>
      {token ? (
        <div className=" alert alert-success">success! like {name}</div>
      ) : (
        <div className=" alert alert-danger">
          warning, you not authenticated
        </div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
