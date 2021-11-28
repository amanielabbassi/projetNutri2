import React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getProfil } from '../../JS/actions/profilAction';
import './home2.css'
import { Link } from 'react-router-dom'
import Navigation from '../navigaton/Navigation'
import ListArticl from '../articl/ListArticl';
const home2 = () => {
    
    
    return (
        <div>
           
           <Navigation/>
<body>

  <section className="titles">

    <h1></h1>
    <p>The doctor-nutritionist anticipates, diagnoses and takes charge of disorders related to nutrition (diabetes, food allergy or intolerance, obesity, cholesterol, anorexia, etc.).</p>

  </section>
<div>
   <ListArticl/>  
</div>
 

</body>


        </div>
    )
}

export default home2
