import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editProfil, getProfil } from "../../JS/actions/profilAction";

import "./Editprofil.css"
const Editprofil = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState({ name: "", email: "", phone: "" });
  const editId = useSelector((state) => state.profileReducer.user);
  useEffect(() => {
    dispatch(getProfil(match.params.id));
  }, [match.params.id]);
  useEffect(() => {
    setEdit({ ...editId });
  }, [editId]);

  const handleChange = (e) => {
    e.preventDefault();

    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(editProfil(editId._id, history));
    setEdit( {
      name: "",
      email:"",
      phone:"",
    });
  }

  return (
    
      <div class="body">
          <div class="center">
  <h1>Edit Profil</h1>
  <form>
    <div class="inputbox">
      <input onChange={handleChange}name="name" placeholder="Name" value={edit.name}/>
      <span>Name</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange}name="email" placeholder="Email" value={edit.email}/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange} name="phone" placeholder="Phone" value={edit.phone}/>
      <span> phone</span>
    </div>
    <div class="inputbox">
    <Button variant="contained"  onClick={handleSubmit} color="primary">
  Primary
</Button>
    </div>
  </form>
</div>
    </div>
  );
};

export default Editprofil;
