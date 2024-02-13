import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ResResList, User } from "../interfaces/reqResInterface";
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);
  useEffect(() => {
    // call api
    reqResApi
      .get<ResResList>("/users")
      .then((resp) => {
        setUsers(resp.data.data);
        // console.log(resp);
      })
      .catch(console.log);
  }, []);

  const loadUsers = async () => {
    // call api
    const resp = await reqResApi.get<ResResList>("/users", {
      params: {
        page: pageRef.current,
        // .currrent is reference to value
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      alert("there are not more recods");
    }
  };
  const nextPage = async () => {
    pageRef.current++;
    loadUsers();
  };
  const previousPage = async () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };
  return {
    users,
    previousPage,
    nextPage,
    // loadUsers,
  };
};
