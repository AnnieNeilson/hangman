# Hangman

[This link takes you to my project.](https://annieneilson.github.io/hangman/)

This is a game of hangman. The website has only one page. The game is suitable for all ages, it has a simplistic theme and colour scheme intended to be clear and light.

On visiting the site the user is able to begin playing immediately, presented with a menu of buttons and told to 'Pick A Category!'. Once a category is chosen the game begins.

![ami.responsivedesign.is screenshot](/docs/images/ami.responsivedesign.PNG)

## Features

The heading is simple, large and bold. The font, sourced from Google Fonts, is 'Mochiy Pop P One'. I chose this font as it is easy to read, and has a playful style.
The heading uses colours that fit with the sites colour scheme. There is no navigation menu as one is not required.

![screenshot of heading](/docs/images/heading.PNG)

### Category Menu

The menu has a heading that very simply instructs the user in what to do to begin the game. Underneath are three options. When clicked a tick will appear next to the chosen category until a new category is selected. Immediately after a category is chosen a hidden word will appear below and the user can begin to guess.

![menu](/docs/images/menu.PNG)
![menu clicked](/docs/images/menu-clicked.PNG)

### Game Area

The game area consists of three main parts. Each part has the same background colour (#3877ff) and all text uses the same font.  
The first is the area for the hangman images. As more mistakes are made the image is updated.  
The second is the scores area. Here the game keeps track of how many games have been won, how many games have been lost and how many mistakes have been made. Underneath this section is where the hidden word appears.  
The third is the keyboard section. When the page loads it generates buttons to be used to input each guess. 

![game area](/docs/images/game-area.PNG)

When the page first loads the user is encouraged to select a category. If the user attempts to guess a letter an alert will remind them to pick a category.  
![alert](/docs/images/alert.PNG)  
Once chosen, a random hidden word will appear above the keyboard.   
![hidden word](/docs/images/gameplay-1.PNG)   
The user will then make guesses, after each guess the selected button is disabled so the user cannot choose the same letter twice.  
![letter picked](/docs/images/gameplay-2.PNG)  
Each wrong guess will be counted and cause the hangman to appear more.   
![wrong guess](/docs/images/gameplay-3.PNG)  
If the user fails the result pops up to tell them they lost, reveal the answer and instruct them to choose a category if they wish to play again. The games lost counter will increase by one.   
![loser result](/docs/images/gameplay-4.PNG)  
If the user successfully guesses the word, the result pops up to congratulate them, affirm the answer and instruct them to choose a category if they wish to play again. The games won counter will increase by one.  
![winner result](/docs/images/gameplay-5.PNG)
When the game is over the keyboard buttons are all disabled.
Selecting a category resets the game other than the games won/lost counter.


## User Experience (UX)
### User stories- User Goals

As a site user:
1. I want the site to look appealing and easy to understand.
2. I want to easily understand how the game works.
3. I want to keep track of my scores.
4. I want the game to play efficiently with no lag or bugs.

I fulfilled these goals by:
1. Using an uncomplicated colour scheme, with mild colours that contrast well. I have kept the text used to a minimum, and the language clear and direct.
2. Including any neccesary prompts written in a clear font with direct language. Not including superflous details or using alerts where not neccessary as that might hassle the user.
3. Including a game score count so the scores can be clearly seen until the page is refreshed.
4. I have run several tests to ensure the game runs smoothly and fixed any bugs I have encountered.

## Testing

### Fixed Bugs

#### Disable Buttons Function
The function disableButtons() initally worked, but it threw up the error *allButtons[i].setAttribute() is not a function* After searching through several articles on Stack Overflow, and similar sites, I asked my mentor for help who suggested using an if statement in my for loop.  
Below is the two sections of code, the first throws the error, the second does not. 

![Both sets of code](/docs/images/bug-disableButtons.PNG)

#### Background Image
I had particular diificulty with the background image. It would load when the page was opened through the gitpod workspace port, but not on the deployed page. In DevTools a 404 error came up.
* I tried finding the solution online with several articles recommending checking the link address, with the reminder it is case sensitive. This was not the issue
* I tried using a .jpg instead of a .png
* I tried compressing the image
* I tried moving the code from the CSS file into a style tag in the head of the HTML file
* A further look in DevTools showed that link to the image was showing as "https://annieneilson.github.io/assets/images/bg.jpg" when I manually changed the link to "https://annieneilson.github.io/hangman/assets/images/bg.jpg" in DevTools the background image appeared. I went to my CSS file and changed background-image to url(/hangman/assets/images/bg.jpg)
This fixed the bug.

![background image bug](/docs/images/bug-backgroundimage.PNG)
![background image bug fixed](/docs/images/bug-backgroundimage-1.PNG)

### Unfixed Bugs

No unfixed bugs

### Validator Testing

The Javascript code ran through jshint with no significant issues:
![jshint report](/docs/images/jshint.PNG)

The HTML file passed through the [W3 validator with no issues](https://validator.w3.org/nu/?doc=https%3A%2F%2Fannieneilson.github.io%2Fhangman%2F)
![HTML validator results](/docs/images/html-validator.PNG)

The CSS file passed through the [W3 validator with no issues](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fannieneilson.github.io%2Fhangman%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
![CSS validator results](/docs/images/css-validator.PNG)

The LightHouse Report of the website came back very positive.  
![Lighthouse report](/docs/images/lighthouse-report.PNG)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, the page provided the link to the completed website.

## Credits

### Content

* I used [a Youtube tutorial](https://www.youtube.com/watch?v=dgvyE1sJS3Y&t=630s) to help me with some elements of the game. Specifically:
1. The function that generates the buttons I had originally written out 26 lines of code in the HTML to create my own buttons, I found his method to be much more efficient.
2. The function that handles guesses after any of the keyboard buttons are clicked.  
3. The function that converts the word into underscores. I changed this code to accommodate the use of more than word, replacing spaces with forwards slashes.
4. The function that updates the hangman image.   
I did not copy his code exactly, using it more as inspiration for my own, though I did use some of his function names.

* I used the [Code Institute Love Maths project](https://www.youtube.com/watch?v=9sPrhBoTmSk) to create the functions that handle incrementing scores.

* I used [favicon.io](https://favicon.io/favicon-converter/) to convert an image I made into a favicon.ico file.

* I used a trick from [css-tricks](https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/) to position the result div in the centre of the screen, adjusting the specifics to place it where I wanted.

* I used code from [stack overflow](https://stackoverflow.com/questions/4919076/outline-effect-to-text) to put an outline on my heading text, changing the details to fit the look I wanted.

### Media
The images for this project I created myself in GIMP as I wanted a very specific style. Also, to ensure the hangman images would transition flawlessly with each mistake the user makes.