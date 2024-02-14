import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const { form, onChange,email, password, } = useForm({
    email: "test@gmail.com",
    password: "123456",
  });
  return (
    <>
      <h3>forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          onChange(e.target.value, "email");
        }}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          onChange(e.target.value, "password");
        }}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
