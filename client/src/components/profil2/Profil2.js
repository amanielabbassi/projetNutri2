import React , { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProfil } from '../../JS/actions/profilAction';
import './Profil2.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Profil2 = () => {
  const profilInfo = useSelector(state => state.profileReducer.user)
  const load = useSelector(state => state.profileReducer.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getProfil())
  }, [])
    return (
        <div>
            <div class="container">
  <header>
      <div class="icon">
     <Link to="/dashboard"> <ArrowBackIcon/> </Link>
      </div>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </header>
  <main>
    <div class="row">
      <div class="left col-lg-4">
        <div class="photo-left">
         <div >
         <img class="photo" src="https://media.istockphoto.com/photos/beautiful-smiling-nutritionist-looking-at-camera-and-showing-healthy-picture-id1044382612?k=20&m=1044382612&s=612x612&w=0&h=PXANRXYBTDUeb-XRHBsaidLpSQEuP_AekGWNADNzOJM="/>
         <div class="photo" >
        
                
                  <div class="file">
                  Change Photo
                  <input type="file" name="file" /> 
                  </div>
               
         </div>
         </div>
          <div class="active">
         
          </div>
        </div>
        <h4 class="name"> {profilInfo && profilInfo.name}</h4>
        <p class="info">{profilInfo && profilInfo.role}</p>
        <p class="info">{profilInfo && profilInfo.email}</p>
        <div class="stats row">
          <div class="stat col-xs-4">
            <p class="number-stat">3,619</p>
            <p class="desc-stat">Followers</p>
          </div>
          <div class="stat col-xs-4">
            <p class="number-stat">42</p>
            <p class="desc-stat">Following</p>
          </div>
          <div class="stat col-xs-4"  >
            <p class="number-stat">
            38</p>
            <p class="desc-stat">Uploads</p>
          </div>
        </div>
        <p class="desc">Hi ! My name is {profilInfo && profilInfo.name}. I'm a {profilInfo && profilInfo.role} from Gafsa, in tunis. I really enjoy for this nutrition.</p>
        <div class="social">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <i class="fa fa-pinterest-square" aria-hidden="true"></i>
          <i class="fa fa-tumblr-square" aria-hidden="true"></i>
        </div>
      </div>
      <div class="right col-lg-8">
        <ul class="nav">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Link to ={`/edit/${profilInfo._id}`}>
        <span class="follow">Edit profil</span></Link>
        <Link to="/add">
        <span class="fol">Add Articl</span></Link>
        
       <div class="row gallery">
          <div class="col-md-4">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIopkpNOeDXhbkJ6fO2L9FVedkS-vFTHbwCw&usqp=CAU"/>
          </div>
          <div class="col-md-4">
            <img src="https://www.wecookwecare.com/images/uploads/2019/07/dieteticien-nutritionniste-diabete-de-type-2.jpeg"/>
          </div>
          <div class="col-md-4">
             <img src="data:image/jpeg;base64,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"/>
          </div>
          <div class="col-md-4">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7R5vRrZXACW9mqnVDHYAUC7Ax4no_QD0G7Q&usqp=CAU"/>
          </div>
          <div class="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lhm-IE7wp-CKWp9AXrlaa9yqyM9n85PfOg&usqp=CAU"/>
          </div>
          <div class="col-md-4">
            <img src="https://www.qare.fr/wp-content/uploads/2020/09/GettyImages-1187064816-1-2.jpg?x86274"/>
          </div>
        </div>
      </div>
      </div>
  </main>
 
</div>
        </div>
    )
}

export default Profil2
