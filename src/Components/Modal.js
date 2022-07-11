import React, { useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: "30%",
    left: "45%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-20%, -20%)",
  },
};

const Postupdate = (props) => {
  console.log("props", props);
  const [firstName, setfirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [role, setRole] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleChange1 = (e) => {
    console.log("handlechange1", e.target.value);
    setfirstName(e.target.value);
  };

  const handleChange2 = (e) => {
    console.log("handlechange2", e.target.value);
    setEmail(e.target.value);
  };

  const handleChange3 = (e) => {
    console.log("handlechange3", e.target.value);
    setPassword(e.target.value);
  };

  const handleChange4 = (e) => {
    console.log("handlechange4", e.target.value);
    setNumber(e.target.value);
  };

  const handleChange5 = (e) => {
    console.log("handlechange5", e.target.value);
    setRole(e.target.value);
  };

  useEffect(() => {
    setfirstName(props.firstName);
    setEmail(props.email);
    setPassword(props.password);
    setNumber(props.number);
    setRole(props.role);
  }, []);

  return (
    <div>
      <Modal
        isOpen={props.isVisible}
        // onRequestClose={this.props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="closebtn">
          <CloseIcon onClick={props.closeModal} />
        </div>

        <div className="form-field">
          <input type="text" value={firstName} onChange={handleChange1} />
        </div>

        <div className="form-field">
          <input type="email" value={email} onChange={handleChange2} />
        </div>

        <div className="form-field">
          <input type="password" value={password} onChange={handleChange3} />
        </div>

        <div className="form-field">
          <input type="number" value={number} onChange={handleChange4} />
        </div>

        <div className="form-field">
          <input type="text" value={role} onChange={handleChange5} />
        </div>

        <Button
          onClick={() =>
            props.updatePost(
              props.index,
              firstName,
              email,
              password,
              number,
              role
            )
          }
          variant="contained"
        >
          Update
        </Button>
        <br />
      </Modal>
      <br />
    </div>
  );
};

export default Postupdate;
