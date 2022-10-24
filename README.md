






# 10-team-profile-generator
## Object-Oriented Programming Challenge 10

 This project required building a Node.js command-line application that takes in data about employees on a team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code using Jest to ensure that it passes all of them. When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.
  
## User Story
    
### AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles
    
## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team 
- THEN I exit the application, and the HTML is generated







## Project Preview
(Project video & Screenshot here


### Installation
To install this application, 

1. clone the code into your terminal for the respective repository. 
2. install npm by entering the command npm init into the terminal. 
3. Inquirer must then be installed by entering npm install inquirer. 
  ```sh
 npm i inquirer@8.2.4.
  ```
4. run by entering node develop/index.js into the command line, and answering each prompt appropriately.



## Usage

- Enter management information when directed with prompts, then the user will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application

- If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
Once you end the application, your software team will be generated in an HTML file





## Technology Used

- HTML
- CSS
- Node.js
- Inquirer
- JavaScript
- BootStrap
- Jest





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

Contact me at JuliaFritsch04@gmail.com

https://github.com/JFritsch04

<p align="right">(<a href="#readme-top">back to top</a>)</p>








