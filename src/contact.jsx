/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
		</form> <br></br>
          <p><i>Call me on: <strong>4378186480 </strong></i></p>
          <a href="https://www.linkedin.com/in/akmonani/" target="_blank">LinkedIn Profile</a>
          <p>email:xyz@yahoo.com</p>
     </>
     );
     }
    