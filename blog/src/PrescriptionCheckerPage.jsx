import './PrescriptionChecker.css';
import { useEffect } from 'react';
import hcFigmaImg from './assets/images/hcfigma.png';
import firstPageImg from './assets/images/firstpage.png';
import signUpImg from './assets/images/signup.png';
import verificationImg from './assets/images/verification.png';
import signInUserImg from './assets/images/signinuser.png';
import requiredBoxesImg from './assets/images/requiredboxes.png';
import patientNoDataImg from './assets/images/patientnodata.png';
import patientWithDataImg from './assets/images/patientwithdata.png';
import prescriptionFormImg from './assets/images/prescriptionform.png';
import exercisesImg from './assets/images/exercises.png';
import examplePrescriptionImg from './assets/images/exampleprescription.png';
import sampleDatesImg from './assets/images/sampledates.png';
import fillOutImg from './assets/images/fillout.png';
import filledPatientImg from './assets/images/filledpatient.png';
import doctorPageImg from './assets/images/doctorpage.png';
import phoneAppImg from './assets/images/phoneapp.png';
import watchHomeImg from './assets/images/watchhome.png';
import watchListImg from './assets/images/watchlist.png';
import watchList2Img from './assets/images/watchlist2.png';

export default function PrescriptionCheckerPage() {
  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hc-page">
      <div className="hcmainbox">
        <h1>Prescription Manager App</h1>

        <div className="hccontentbox">
          <p>To-Do: Add a summary</p>
        </div>

        <div className="hccontentbox">
          <h2>Step 0: Motivation</h2>
          <p>My grandfather has battled with heart disease for almost half of his life; even though he seemed healthy the majority of the time and didn't show any surface symptoms for multiple years, on one especially hot summer day, he suddenly suffered a major heart attack. Luckily, he was rushed to the hospital immediately and is now fully recovered.</p>
          <p>However, this incident has left me with a simple question that I have carried throughout my life: could this type of accident have been avoided and prevented earlier, had we known more about their health at that time? </p>
          <p>I have taken that question with me to this day, where I have decided to take it upon myself to see if I can create an invention that facilitates the health journey of heart patients, hopefully deterring and detecting potential future accidents before they occur.</p>
        </div>

        <div className="hccontentbox">
          <h2>Step 1: Empathizing With A Target Audience</h2>
          <p>To tackle the daunting task of addressing the issue of heart attacks within the vast topic of "helping with heart attacks," I conducted extensive research into the specific pain points of patients and existing technology.</p>
          <p>I promptly set up an interview with my grandfather to gain some firsthand insights into what heart patients struggle with the most. As a result, I identified and narrowed down a niche within heart attack assistance to a feasible scope that I believed I could tackle.</p>
          <p>For example, I learned that checkups occur infrequently, around once every six months, meaning that any progression or worsening of the condition may not be detected or treated for an extended period. Additionally, the prescriptions that are given for things such as taking pills and doing exercise are often lengthy and frequent, so trying to keep track of every aspect continuously can be quite challenging.</p>
          <p>This foundation allowed me to set a direction for my project and identify the necessary research to refine my idea. As a result, my problem statement became:</p>
          <p><em>Patients with diagnosed heart disease often suffer from a lack of guidance and monitoring of their health throughout their daily journey of maintaining a fit lifestyle, therefore leading to unexpected heart attacks and deterioration of health over time.</em></p>
        </div>

        <div className="hccontentbox">
          <h2>Step 2: Pinpointing A Holistic Idea</h2>
          <p>During this phase of brainstorming, researching, and refining, I formulated a definition statement that highlighted the main goal that my project hopes to achieve:</p>
          <p><em>How might we design an application to create a central hub of communication between a heart patient and their doctor, constantly tracking and monitoring daily routines and health information to ensure a healthy lifestyle that avoids risks such as heart attacks?</em></p>
          <p>Then, to satisfy the definition statement, I developed a detailed set of criteria for success and features that I hoped to include in the final product.</p>

          <h3>General Logistics:</h3>
          <ol>
            <li>A platform that's made in the form of an online app, because the information and services that are created should be accessible in a way that the majority of people will be able to use in a free and efficient manner.</li>
            <li>The app will involve both patients and doctors, meaning that two separate apps will need to be developed simultaneously, each with distinct functionality and UI.</li>
            <li>The existence of different patients with unique needs and various doctors with access to specific patients' data necessitates a system for signing up and creating new accounts, each with its own unique ID that can be tracked within an internal system.</li>
            <li>The patient-side app should be accessible through multiple platforms, including a computer (as a website), a phone (as a downloadable app from the app store), and a smartwatch (via the iWatch app), to allow for portability wherever the patient is.</li>
            <li>The doctor-side app will just be available on the computer as a website, since portability and constant access are not a requirement for the doctor app.</li>
          </ol>

          <h3>Specific Functionality:</h3>
          <ol>
            <li>
              <span className="hclistheader">Creation and storage of individual accounts</span>
              <ul>
                <li>There should be a front page for whenever a patient or doctor accesses the app, showcasing different options for creating a new account and signing in.</li>
                <li>Inside each option, there should be options for doctor-side sign-in/up and patient-side sign-in/up.</li>
                <li>After the individual has entered valid credentials (email and password), the app will search for their specific ID and display their account information on the home page.</li>
              </ul>
            </li>
            <li>
              <span className="hclistheader">Inputting and tracking prescriptions</span>
              <ul>
                <li>Doctors should be able to input specific prescriptions, exercises, and lifestyle instructions, along with times, descriptions, and dates, into a form that will then be displayed on the patient-side app's home page. The doctor can do this during a routine checkup or whenever they deem it fit to adjust the health plan. It could also become a replacement for on-paper prescriptions, as all the information can be stored on the app.</li>
                <li>After all the information is stored, the app will track each day and hour. When it's time to take a specific medication or perform a particular exercise, the app will send a notification to the phone and smartwatch as a reminder.</li>
                <li>After the patient has completed the task, they can check it off as complete, and the internal database will track both completed and uncompleted tasks each day.</li>
              </ul>
            </li>
            <li>
              <span className="hclistheader">Patient Data Logging</span>
              <ul>
                <li>Records specific health data of a patient, such as heart rate, by directly using an ECG (electrocardiograph) on a smartwatch, and builds a report of the patient's daily health condition.</li>
                <li>The patients themselves will also be able to input their own personal feelings each day, in terms of any new symptoms that pop up.</li>
                <li>The report will then be available to see on the doctor's side, thus relaying constant new information about a patient's well-being.</li>
              </ul>
            </li>
            <li>
              <span className="hclistheader">Communication Between Patients And Doctors</span>
              <ul>
                <li>A messaging system within the app will allow for more efficient interaction between the two parties.</li>
              </ul>
            </li>
            <li>
              <span className="hclistheader">Ability To Perform Self-Tests</span>
              <ul>
                <li>During many routine checkups, non-invasive tests can be performed at home to monitor health. This allows doctors to assess the patient's condition more accurately by conducting regular assessments.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="hccontentbox">
            <h2>Step 3: Prototyping</h2>
            <p>During this phase, I first used Figma to plan out the app. This project required some detailed planning and organization, which means that setting up each page of my app will be crucial to understanding what needs to be prioritized and coded. I used this tool as my very first brainstorming phase, designing a basic UI and implementing a few features that should be mapped out.</p>

            <img src={hcFigmaImg}/>
            <p className="hccaption">General Brainstorming and Mapping Out of the First Few Features</p>

            <p>After creating the initial prototype in Figma, I explored how to code the app for three different platforms: a website, a phone app, and a watch app. I realized that to build an app from scratch, I needed to learn multiple coding languages, including JavaScript, CSS, HTML, and Swift. Therefore, I first spent the first few weeks familiarizing myself with the syntax. </p>

            <h3>Part 1: Website Creation And Patient-Side Log-In Page</h3>
            <p>I started by creating a website. I learned about Amazon Web Services, which allowed me to host my own website with a unique URL, and GitHub, which allowed me to store all the versions of my code.</p>
            <p>Then, I decided to move on to the first task, which was patient log-in, as that would be the first page that anyone would be able to access.</p>
            <p>I had to apply my knowledge of UI design to determine the correct colouring and spacing of each button and text box using HTML, and then utilize JavaScript to integrate every function.</p>
            <p>The first page was very simple, featuring just a sample logo/title at the top, along with two main buttons on the left side.</p>
            <img src={firstPageImg}/>
            <p className="hccaption">Front Log-In Page</p>

            <h4>Sign-Up Button</h4>
            <p>The first button is the sign-up button, which, when pressed, directs you to an account creation page that requires a new email address and a password that meets specific guidelines.</p>
            <img src={signUpImg}/>
            <p className="hccaption">Account Sign-up Page</p>
            <p>Once the information is entered correctly, the patient will be able to press the sign-up button. Internally, I have a database created in JavaScript that will receive the request and store the new email and password in the latest section of the chart.</p>
            <p>However, before a patient can access their home page, they will be directed to a new page that features a text box for entering a number code. They will need to confirm their email, which I implemented by using Amazon Web Services to send a message to the email address used for sign-up. I then coded a link and a verification code generator to be sent in that email.</p>
            <img src={verificationImg}/>
            <p className="hccaption">Verification Code Email</p>
            <p>After the patient has entered the code and attempted to submit it, I used if-else loops to check if the entered number matches the one sent previously. If it does, the webpage will reload and send the user to their own patient-side page.</p>
            
            <h4>Log-In Button</h4>
            <p>The second button on the front page is the log-in button for users who have already created an account and wish to reaccess their information. When that button is pressed, the user will be sent to one of two new pages. The first one is for when the user has already signed in previously, which is achieved by having my code check for emails in local storage. If an email is found, a specific function will be executed, displaying a page with a button to sign into a previously used account automatically.</p>
            <img src={signInUserImg}/>
            <p className="hccaption">Sign-In Options</p>
            <p>If the user has not logged in to the website using a previously registered email, they will be directed to an alternative screen instead. In this page, there are two input boxes, one for the email and one for the password. The important part is that in my code, the HTML lines that construct the input boxes for the email and the password each contain a unique ID. Then, I used JavaScript to search the stored database of patient information for IDs that match each other, and then run the function that displays the front page specifically.</p>
            <img src={requiredBoxesImg}/>
            <p className="hccaption">Required Boxes to Fill Out</p>

          <h3>Part 2: Patient-Side Home Page</h3>
          <p>After the patient successfully logs in to the account, they will be directed to their home page. On the home page, there will be crucial information, such as their exercise routine and prescription, that they need to follow on a daily basis.</p>
          <img src={patientNoDataImg}/>
          <p className="hccaption">New Page With No Data Inputted</p>

          <p>When first trying to model the information that would be displayed on the page, I used sample data that I created myself to test the formatting and functionality of the page. I created the sample data in a JSON file, where variables and IDs are defined that I reference throughout my data extraction in JavaScript, with the values of those variables being substituted with my temporary data.</p>
          <p>I learned about Bootstrap formatting and CSS, which allows me to create different buttons, titles, and tables that fit together in an orderly fashion. I also implemented various functions, such as allowing long tables to be scrollable, so that in cases where there are different screen sizes, people can still access the same information.</p>

          <img src={patientWithDataImg}/>
          <p className="hccaption">Hypothetical Profile of "Joe"</p>

          <h3>Part 3: Doctor-Side Form</h3>
          <p>In the previous section, I used data that I hard-coded into a JSON file so that it could be displayed on the home page. However, when the app is actually used and implemented, doctors will need to access a form that allows them to create prescriptions and have specific exercises and instructions tailored to each patient. Therefore, I made a separate page within the website that allows doctors to input any necessary information.</p>

          <img src={prescriptionFormImg}/>
          <p className="hccaption">Patient Form</p>

          <p>The first two boxes allow for the input of a patient's name and email; the specific ID linked to each one will be used to match a specific patient account, allowing easy updates to their information.</p>
          <p>The Exercises and Prescription modules each have specific inputs with values that are necessary to inform the patient, and each of them has an "Add Exercise/Prescription" and Remove Exercise/Prescription". If a doctor deems it necessary, they can add multiple activities and medications that the patient needs to take. This is achieved in the code by hiding certain functions and using loops to recreate specific chunks of the display. There is a counter for the number of exercises and prescriptions present, each starting at 0, allowing doctors to view the number of each externally. This counter also enables the code to internally track the number of modules to extract data from and display.</p>
          <img src={exercisesImg}/>
          <p className="hccaption">Adding an Exercise</p>

          <p>Additionally, there are blue buttons with "+" signs on them to add different times and amounts that a medication must be taken every day. This part was especially challenging because it was difficult to get every module to update when the button was pressed under only certain conditions. For example, the sidebar with the description of the time and number of pills should only be updated when a new time period has been created, but only on the first day that it happens, since any other day that lands on that time subsequently will be on the same new row without adding any additional layer.</p>
          <img src={examplePrescriptionImg}/>
          <p className="hccaption">Example of Adding a New Time Period for Taking a Medication</p>
          <p>Next, at the end of every prescription, there are start and end dates that can be chosen for taking the medication. Through my research, I found that HTML offers numerous functions that enable pop-up menus, such as calendars for searching through dates.</p>
          <img src={sampleDatesImg}/>
          <p className="hccaption">Adding a start and end date to the prescription schedule</p>
          <p>Before the form can be submitted, I used try-catch functions that I've learned to catch any required boxes that have not been filled.</p>
          <img src={fillOutImg}/>
          <p className="hccaption">Can't submit until all boxes are filled out</p>
          
          <p>After the submit button is pressed, a confirmation message appears, stating that the patient's data has been updated. At that point, by logging onto the patient side, we will be able to see the changes that have been implemented, including the correct name and email that were inputted, as well as the correct number of tables and columns for each individual exercise and medication.</p>
          <img src={filledPatientImg}/>
          <p className="hccaption">Actual Data From the Doctor Form</p>

          <h3>Part 4: Doctor-Side Home Page And Log-In (Newest Addition And Work In Progress)</h3>
          <p>I realized that since each doctor may have multiple patients, it is essential to keep track of them and allow the doctor to check up on each individual constantly. To do that, I created a new "doctor" account using another one of my email addresses as a preliminary test.</p>
          <p>I redesigned the structure of how the home page is displayed, with each row representing an individual patient. Since I currently only have one test patient, which is my other email account, I manually input a few more different sample patients just to test how the front page would work. Each patient has their own ID and information, which is linked to their personal details, and these are all listed together in an array within another JSON file.</p>


          <p>I plan to make each account clickable, allowing further details about each patient to be displayed. Currently, I have implemented a function that, when pressed, takes the doctor to the same home page that the patient sees.</p>

          <img src={doctorPageImg}/>
          <p className="hccaption">Every doctor has unique patients that only they can access</p>

          <h3>Part 5: Taking The Website Multi-Platform (And learning another coding language!)</h3>
          <p>One of the primary goals of my app was to make it portable, enabling patients to access it anywhere and check on their health at any time. Therefore, I decided to develop a watch app and a phone app. To code an app for those devices, I needed to learn about Swift, another programming language.</p>

          <h4>Phone App</h4>
          <p>With the completely different format of a phone, I had to learn how to resize each widget to retain the same information while fitting it inside the phone's constraints. I had to research different functions for making certain sections scrollable and for fading out sections to make space for other information being displayed. Eventually, I was able to display almost the same UI from the website, formulated in a phone emulator online.</p>

          <img src={phoneAppImg}/>
          <p className="hccaption">Same app functionality implemented on an iPhone</p>

          <h4>Watch App</h4>
          <p>For the watch app, I realized that with the tiny screen I had, I had to redesign my app completely to fit the same functions. I learned more about the widgets that allowed me to swipe across the watch, storing more data for each day.</p>
          <p>I also learned about how to store checkboxes and how to build a database that stores each specific change in data. There also had to be a significant simplification of the data in the watch app, which meant redesigning the UI specifically for the watch.</p>
          <p>I decided to create seven separate pages within the app, where information will be displayed for each day, allowing the most important descriptions to be retained.</p>

          <div className="hcwatchbox">
            <div className="hcmockupitem">
              <img src={watchHomeImg}/>
              <p className="hccaption">Front Page</p>
            </div>
            <div className="hcmockupitem">
              <img src={watchListImg}/>
              <p className="hccaption">Sunday</p>
            </div>
            <div className="hcmockupitem">
              <img src={watchList2Img}/>
              <p className="hccaption">Monday</p>
            </div>
          </div>

          <p>There are a few additional features, including notifications and checkboxes. The notifications will be a message that pops up whenever a medication needs to be taken or an exercise needs to be done. I learned how to utilize real-life times in the watch so that I can accurately code it to give notifications at the correct time.</p>
          <p>The checkboxes are also crucial because whenever they are ticked off, that task will disappear, and the database will be notified that the task has been completed for the day.</p>
        </div>

        <div className="hccontentbox">
          <h2>Part #6: Conclusion, Reflection, & Future Steps</h2>
          <p>I have certainly learned a lot about not only coding but also about the importance of the design process and how I work and manage time. During the decision-making period, when I decided to actually delve deep into learning several new coding languages that I had never interacted with before, instead of just planning on Figma, it was incredibly daunting.</p>
          <p>At first, I thought that I would not even get close to even a prototype, much less a multi-platform app that can interact with each other and update on its own. I realized that time management was the most crucial part of achieving success during that time, so I forced myself to allocate at least 1-2 hours every day to research and chip away at this vast project, starting from spring break.</p>
          <p>Sometimes, even the most minute details like creating a checkbox took up to 3 hours just to debug, because even though on the surface it may not seem like much, internally, dozens of lines of code are written to instantiate the UI, connect response functionality to the button, create a response UI of it being "checked off", send signals to the internal database that the task has been completed, and then to finally hide that block from the display and shift every other block back into place. Processes like these have taught me the valuable lessons of methodical thinking and patience, as it is only when I take the time to thoroughly understand the problem and take action to fix it that the app will be truly fixed in the long term.</p>
          <p>As shown in this post, I am still actively working on specific areas, such as the patient list on the doctor's side. I want to continue developing this passion project throughout the summer and into the following year, so that it may eventually become an app used by doctors and hospitals to facilitate patients' transition to a healthier lifestyle. </p>
        </div>
      </div>
    </div>
  );
}