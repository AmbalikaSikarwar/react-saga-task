import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "./Modal";
import { toast } from "react-toastify";
import { update, Delete } from "../Redux/Action/userAction";

import TextField from "@material-ui/core/TextField";

const Lazyload = React.lazy(() => import("./Dashboard/Lazyload"));

const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setNewsearch] = useState();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [indexs, setIndexs] = useState();
  const [firstName, setfirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [role, setRole] = useState();

  const allUser = useSelector((state) => state);

  const user = localStorage.getItem("user")
  console.log('uuuu', user)

  const handleSearch = (e) => {
    e.preventDefault();
    setNewsearch(e.target.value);
  };

  const filtered = !search
    ? allUser.user.register_User
    : allUser?.user?.register_User?.filter((data) =>
        data.firstName.toLowerCase().includes(search)
      );

  const remove = (index) => {
    var result = window.confirm("You want to delete your profile!");
    if (result === true) {
      dispatch(Delete(index));
      toast.success(`Post deleted Successfully!`);
    }
  };

  const edit = (index, firstName, email, password, number, role) => {
    setIndexs(index);
    setIsVisible(true);

    setfirstName(firstName);
    setEmail(email);

    setNumber(number);
    setPassword(password);
    setRole(role);
  };

  const updatePost = (index, firstName, email, password, number, role) => {
    console.log("indexdispatch", index);
    dispatch(update(index, firstName, email, password, number, role));
    toast.success(`Post updated Successfully!`);
    isVisible && setIsVisible(false);
  };

  const closeModal = () => {
    console.log("Modal Closed");
    setIsVisible(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="dashboardMiddle">
      <p className = "userName">Welcome to: {user}</p> 
        <TextField
          value={search}
          onChange={handleSearch}
          label="Search for..."
          variant="filled"
          className="searchbox"
        />
      </div>
      <br/>
      {isVisible && (
        <Modal
          isVisible={isVisible}
          closeModal={closeModal}
          index={indexs}
          firstName={firstName}
          email={email}
          password={password}
          number={number}
          role={role}
          updatePost={updatePost}
        />
      )}
      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th>Index</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Conatct No.</th>
            <th>RoleType</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => {
            console.log("indexmap", index);
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.role}</td>
                <td>
                  <EditIcon
                    onClick={() =>
                      edit(
                        index,
                        item.firstName,
                        item.email,
                        item.password,
                        item.number,
                        item.role
                      )
                    }
                  />
                  <DeleteIcon onClick={() => remove(index)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
