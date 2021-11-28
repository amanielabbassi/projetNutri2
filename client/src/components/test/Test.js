import React from 'react'
import './Test.css'
const test = () => {
    return (
        <div>
            <nav class='navbar'>

<ul class='left-ui'>
  <li><img class='logo'src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331813/treehouse.svg" /></li>
  <li class='home'>Home</li>
  <li>Techdegree</li>
  <li>Tracks</li>
  <li>Library</li>
  <li>Community</li>
  <li>Support</li>
</ul>
<ul class='right-ui'>
  <li class='work'>Workspaces</li>
  <li class='points'>9124</li>
  <div class='profile'><div class='background'><i class="fas fa-user"></i></div><i class="fas fa-angle-down arrow"></i></div>
  <li><i class="fas fa-bell bell"></i></li>
</ul>
</nav>
<div class='drop-container'>
  <i class="fas fa-caret-up caret"></i>
  <ul class='dropdown'>
  <li>Andrew Biddle</li>
    <li>Account Settings</li>
    <li>Subscription</li>
    <li>Referral Discounts</li>
    <li>Sign Out</li>
  </ul>
</div>
<p class='home-p'>Home</p>

<main class='grid'>
 
  <div class='progress-bar'>
    <span>In Progress</span>
    <span>Bookmarks</span>
    <span>Completed</span>
  </div>
  
  <div class='track'>
    <div class='top'>
      <p class='ux'>UX Design</p>
      <button class='track-btn'>View Track</button>
    </div>
    <div class='middle'>
      <h2 class='h2'>Time to get Started!</h2>
      <p class='instruction'>We recommend you start working on the <a class='design'>Design Thinking</a> Course. You should complete the first 3 steps:</p>
    </div>
      <ul class='track-classes'>
        <li><i class="fas fa-user"></i>Design Thinking Origins</li>
        <li><i class="fas fa-play"></i>Design Thinking Terms and Practices</li> 
        <li><i class="fas fa-play"></i>Mindsets vs. Methods</li>
      </ul>
    <div class='bottom'>
      <button class='resume-btn'>Resume <i class="fas fa-arrow-right"></i></button>
      <p class='estimate'>Time Estimate: 6 mins</p>
    </div>
  </div>

  <div class='message'>
    <div class='r-container'>
      <h3 class='in-progress'>In Progress</h3>
      <p>Looking to switch things up? Feel free to jump to an activity already in progress.</p>
    </div>
    <button class='message-btn'>View all 10</button>
  </div>
  
  <div class='library'>
    <div class='card one'>
      <div class='top-library'>
        <i class="fas fa-book-open book"></i>  
        <i class="fas fa-ellipsis-h dots"></i>
        <span>60 min left</span>
      </div>
      <div class='middle-library'>
        <p class='course'>Course</p>
        <h3 class= 'course-name'>Sass Basics</h3>
        <p class='desc'>Sass is a stylesheet language that extends CSS with features like varialbes, nested rules...</p>
        <button class='resume-btn btn-one'>Resume</button>
      </div>
    </div>
   
    <div class='card two'>
      <div class='top-library'>
        <i class="fas fa-book-open book"></i>  
        <i class="fas fa-ellipsis-h dots"></i>
        <span>200 min left</span>
      </div>
      <div class='middle-library'>
        <p class='course'>Course</p> 
        <h3 class='course-name'>PHP Basics</h3>
        <p class='desc'>In this course I'll walk you through the basics of the language, ranging from basic...</p>
        <button class='resume-btn btn-two'>Resume</button>
      </div>
    </div>
    <div class='card three'>
      <div class='top-library'>
        <i class="fas fa-book-open book"></i>  
        <i class="fas fa-ellipsis-h dots"></i>
        <span>71 min left</span>
      </div>
      <div class='middle-library'>
        <p class='course'>Course</p> 
        <h3 class='course-name'>Practice Basic Arrays in Javascript</h3>
        <p class='desc'>Practice creating array literals, accessing array items, and using array methods to add...</p>
        <button class='resume-btn btn-three'>Resume</button>
      </div>
    </div>
  </div>

</main>
<footer class='footer'>
  <div class='wrapper'>
    <div class='footer-cont-one'>
      <p class='topic'>Student Referal Discount</p>
      <i class="fas fa-user-friends friends"></i>
      <p class='friends-info'><a class='invite'>Invite friends</a> to Treehouse and get a discount off your monthly enrollment.</p>
    </div>
    <div class='footer-cont-two'>
      <p class='topic'>Student Perks</p>
      <i class="far fa-credit-card credit"></i>
      <p class='discount-info'>A collection of <a class='discounts'>special discounts</a> and exclusive offers available for Treehouse students.</p>
    </div>
  </div>
  
  <ul class='footer-ul'>
    <li><i class="fab fa-twitter icon"></i></li>
    <li><i class="fab fa-youtube icon"></i></li>
    <li><i class="fab fa-facebook-f icon"></i></li> 
    <li><i class="fab fa-instagram icon"></i></li>     
    <li><i class="fab fa-linkedin icon"></i></li>
    <li class='link'>Treehouse Blog</li>
    <li class='link'>Shop Treehouse</li> 
    <li class='link'>About Treehouse</li>  
    <li class='link'>Privacy Policy</li>    
    <li class='link'>Terms and Conditions</li>
  </ul>
  
  
</footer>




</div>
        
    )
}

export default test
