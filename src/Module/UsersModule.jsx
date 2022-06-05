import React from "react";


import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const UsersContext = createContext();

const UsersModule = ({ children }) => {
  const [users, setUsers] = useState([]);
  console.log("i enjdr");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const addUser = (user) => {
    setUsers((currentUsers) => [
      ...currentUsers,
      { ...user, id: uuid(), phone: +user.phone },
    ]);
  };

  const editUser = useCallback(
    (newuser) => {
      setUsers(
        users.map((user) => (user.id === newuser.id ? (user = newuser) : user))
      );
    },
    [users]
  );

  const deleteHandler = (e, clickedId) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== clickedId);
    });
  };
  const contextValue = useMemo(
    () => ({
      users,
      deleteHandler,
      editUser,
      addUser,
    }),
    [editUser, users]
  );
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersModule;
