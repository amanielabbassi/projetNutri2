import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticls } from '../../JS/actions/articlAction'
import './Articls.css'
import { Link } from "react-router-dom";
export const Articls = ({articl}) =>{
  
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getArticls())
    }, [])
    return (<div>
      
<div class="container">
 
  <div class="column">
    

    <div class="post-module">
    
      <div class="thumbnail">
        <div class="date">
          <Link to={`/editarticl/${articl._id}`} class="day">Edit</Link>
         
        </div><img src={articl.photo}/>
      </div>
       <div class="post-content">
       
        <h1 class="title">{articl.nameNutri} </h1>
        <h2 class="sub_title">{articl.title}</h2>
        <p class="description">{articl.description}</p>
        <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i>
            6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#">39 comments</a></span></div>
      </div>
    </div>
  </div>
 
   
</div>
    </div>
    );
  }

       
    
   
