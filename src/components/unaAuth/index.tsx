import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";
import NotAllowed from "@/assets/images/not_allowed.svg";
import Button from "../Button/Button";
import UnAuthStyles from "./UnAuthUser.module.css";

const UnAuth: React.FC<{ message: string }> = ({ message }): JSX.Element => {
  return (
    <div className={UnAuthStyles.unauth}>
      <NotAllowed />
      <h1>You are not Authenticated :c</h1>
      <h3>{message}</h3>
      <Button type="primary" href="/Login">
        Login <RiLoginBoxFill />
      </Button>
    </div>
  );
};

export default UnAuth;
