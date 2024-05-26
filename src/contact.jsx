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
		
			
				<label htmlFor="myFName" className='fname'> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" className='ftext'/> <br /> <br />
				
				<label htmlFor="myLName" className='fname'> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" className='ftext' /> <br /> <br />
				
				
				<label htmlFor="myEmail" className='fname'> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" className='ftext' /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit"  /> <br />
		</form> <br></br>
          <p className='link'><i>Call me on: <strong>4378186480 </strong></i></p>
          <div className='linkdeln'>
          <a href="https://www.linkedin.com/in/akmonani/" target="_blank" className='linkdeln'>LinkedIn Profile</a>
          
          <p className="emailLink"><a href="mailto:ak.monani18@outlook.com">ak.monani18@outlook.com</a></p>
          </div>
     </>
     );
     }
    