let wraper = document.getElementsByClassName('container')
const name = document.getElementById("user-name");
const mail = document.getElementById("user-email");
const password = document.getElementById("user-password");

const slide = () => {
 wraper[0].innerHTML = ` 
 <div class="row wrap">
 <div class="col-sm sign-up">
         <div class="jumbotron jumbotron-fluid sign-up-part">
             <div class="sign-up-content">
                 <h1>Welcome Back!</h1>
                 <p>To keep connected with us please login with your personal info</p>
                 <input type="button" value="SIGN IN" class="btn" id="sign-in" onclick="slideback()">
            </div>
         </div>
 </div>
 <div class="col-sm sign-in">
         <div class="jumbotron jumbotron-fluid sign-in-part">
                <h3>Create your account</h3>
                <ul class="social-icons">
                   <li class="icons"><i class="fab fa-google-plus-g fa-xm"></i></li>
                   <li class="icons"><i class="fab fa-facebook-f fa-xm"></i></li>
                   <li class="icons"><i class="fab fa-linkedin-in fa-xm"></i></li>
                </ul>
                <p>or use your email for registration</p>
                <form>
                   <input type="text" name="name" id="user-name" placeholder="Name" required>
                   <input type="email" name="email" id="user-email" placeholder="Email" required>
                   <input type="password" name="password" id="user-password" placeholder="Password" required>
                   <a href="#" class="btn"> SIGN UP</a> 
                </form>
         </div>
    </div>
</div>

`
}

const slideback = () => {
    wraper[0].innerHTML = `
    <div class="row wrap">
            <div class="col-sm sign-in">
                    <div class="jumbotron jumbotron-fluid sign-in-part">
                           <h3>Sign In</h3>
                           <ul class="social-icons">
                              <li class="icons"><i class="fab fa-google-plus-g fa-xm"></i></li>
                              <li class="icons"><i class="fab fa-facebook-f fa-xm"></i></li>
                              <li class="icons"><i class="fab fa-linkedin-in fa-xm"></i></li>
                           </ul>
                           <p>or use your account</p>
                           <form>
                              <input type="email" name="email" id="user-email" placeholder="Email" required>
                              <input type="password" name="password" id="user-password" placeholder="Password" required>
                              <p>Forgot password ?</p>
                              <a href="#" class="btn"> SIGN IN</a> 
                           </form>
                    </div>
               </div>
               <div class="col-sm sign-up">
                       <div class="jumbotron jumbotron-fluid sign-up-part">
                           <div class="sign-up-content">
                               <h1>Hello, Friend!</h1>
                               <p>Enter your personal details and start<br> journey with us</p>
                               <input type="button" value="SIGN UP" class="btn" id="sign-up" onClick="slide()">
                           </div>
                       </div>
               </div>
    `
}



mail.addEventListener("input", function (event) {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("I am expecting an e-mail!");
  } else {
    mail.setCustomValidity("");
  }
});
