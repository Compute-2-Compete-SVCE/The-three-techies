               PROJECT REPORT ON
                
              “ EVENT ALERT SYSTEM”
    
                         BY
                      TEAM 2
               ( THE THREE TECHIES ) 

                   Team Members
          1. Nivethitha A R, III year CSE
          2. Khadeejathul Humaira M.S, II year CSE
          3. Jagan S, I year CSE.
                                            
                 ABSTRACT
The event alert system provides everything from start to finish .The web app provides the feature to alert about the events you are interested in. Most of the times, we may have missed events which we had to attend. So, here comes this web app where the users can inform it about the events they had to attend and it will alert you on the specific date. This web app also provides search feature where events can be searched based on category and location. The events can be notified to the users through mail. The web app has login/register feature wherein the user can login and can access the application. It saves time by automating the manual tasks. It is free and interactive. The resources are economically and efficiently utilized. The web app basically allows you to create and search for events thereby notifying the users to get reminded of the events.

TECHNOLOGY STACK :
FRONT END FRAMEWORK
HTML,CSS AND BOOTSTRAP

BACKEND
NODE.JS,EXPRESS.JS

DATABASE
MONGODB

API’S USED
EVENTFUL API




REPORT:










Here comes the login page of the application wherein the user has to enter the username and password which he had entered for registration.
       







Client side validation is done for the login page where it checks whether the user enters a valid password. Also the server side validation checks whether the user enters the correct password which he had entered while registering.










As we have used Mongodb as database for the backend, a list of registered users is shown below:








The create event feature allows you to create your own event and the user can get reminded of the event on the specified date through mail.
T









The below listed details are sent to the registered mail id on the specific date.










A node package named as “node-schedule” is used to send email on the specific date to the registered email id.










The view events feature allows the user to search for the events based on the location and the category.










To retrieve the events, we have used the “eventful api” where the events can be listed based on the location and category.










Once the location and category is given as input, a list of events will be retrieved accordingly.
                                                                                                                     









Click on an event which you want to get notified so the details of the event can be viewed and notified on the specific date through mail.
 








The additional features which can be added in the project :
The web app can automatically notify you based on your previous searches.
(For example, if an user has searched for a dance event once, the application can automatically notify him whenever a dance event occurs in his location)

Github repository link: https://github.com/Compute-2-Compete-SVCE/The-three-techies
