import { User } from "../interfaces/reqResInterface";
import { useUsers } from "../hooks/useUsers";

export const Users = () => {
  const { users, nextPage, previousPage } = useUsers();

  const renderItem = ({ id, avatar, first_name, email, last_name }: User) => {
    return (
      // in RN is important use a keys like strings
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>{first_name} </td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name </th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      {/* // create a simple space between  buttons*/}
      <button className="btn btn-primary" onClick={previousPage}>
        back
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={nextPage}>
        next
      </button>
    </>
  );
};
