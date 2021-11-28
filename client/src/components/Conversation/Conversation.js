import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Conversation = ({conversation,currentUser}) => {

    // const [user,setUser]=useState(null)

    // useEffect(() => {
    //   const friendId = conversation.members.find(m=> m !==currentUser._id );
    //   const getUser = async () =>{
    //       const res = await axios 
    //   }
    // }, [])
    return (
      
 <div>

<img src="https://media-exp1.licdn.com/dms/image/C4D03AQEKoZVzmv4Y3g/profile-displayphoto-shrink_200_200/0/1613330015847?e=1639612800&v=beta&t=SpCtcYfvYEmBQ_xx2e-mZ9xWvuM9KYl1rvHYrwOsB4s" alt="" />

<h1> amani fatma</h1>

</div>
     
    )
}

export default Conversation