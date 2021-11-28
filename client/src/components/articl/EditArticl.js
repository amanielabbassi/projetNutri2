import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getArticls, updatedArticl } from '../../JS/actions/articlAction';
import './Articls.css'
import Button from '@material-ui/core/Button';

const EditArticl = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [edit, setEdit] = useState({ photo: "", desc: "", nameNutri: "" });
    const editID = useSelector((state) => state.allArticl.articl);
    useEffect(() => {
      dispatch(getArticls(match.params.id));
    }, [match.params.id]);
    useEffect(() => {
      setEdit({ ...editID });
    }, [editID]);
  
    const handleChange = (e) => {
      e.preventDefault();
  
      setEdit({ ...edit, [e.target.name]: e.target.value })
    };
   
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(updatedArticl(match.params.id,edit , history));
      setEdit(({
        nameNutri:"",
         desc: "",
         photo: "",
       }));
    };
    return (
        <div class="body">
          <div class="center">
  <h1>Edit Articl</h1>
  <form>
   
    <div class="inputbox">
      <input onChange={handleChange}name="desc" placeholder="desc" value={edit.desc}/>
      <span>Description</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange} name="photo" placeholder="Photo" value={edit.photo}/>
      <span> photo</span>
    </div>
    <div class="inputbox">
    <Button variant="contained"  onClick={handleSubmit} color="primary">
  Primary
</Button>
    </div>
  </form>
</div>
    </div>
    )
}

export default EditArticl
