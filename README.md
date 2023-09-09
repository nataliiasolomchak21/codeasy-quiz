# Codeasy Quiz

View the live project [here](https://nataliiasolomchak21.github.io/codeasy-quiz/)

Codeasy Quiz is a 2-page educational website that allows users to assess their coding knowledge. This interactive quiz contains 15 questions evaluating users' level of knowing HTML, CSS and JavaScript fundamentals. 

![Screenshot of the website on mobile, tablet, laptop and desktop from Am I Resonsive website.](README-images/am-i-responsive-screenshot.png)

## User Experience

### Target Audience

* Beginner coders - Those learning HTML, CSS and JavaScript for the first time would benefit from testing their knowledge od each language's fundamentals. The quiz would allow them to identify gaps and topics they need to focus more on.
* Students in web development courses - The quiz could be useful for those enrolled in classes on web programming topics as a supplemental assessment.
* Self-learners - People teaching themselves coding through online resources couls use the quiz to formally benchmark their progress.
* Bootcamp attendees - Coding bootcamp students could take the quiz to see how well they absorb introductory web development languages taught in bootcamp curriculums.
* Hobbyists - Those learning development skills for personal interests/hobbies may find assessment and feedback valuable.

### Key Project Goals

* Provide questions testing core knowledge of HTML, CSS and JavaScript - Ensure a balanced set of questions covering fundamentals of each language.
* Implement dynamic quiz functuonality - Allow users to take the quiz, track answers and provide feedback.
* Build an intuative UI/UX - A clean, easy-to-use interface maximizing usability and user experience.
* Make it accessible and responsive - Ensure the website and quiz are accessible to users with disabilities and work across devices.

### User Stories

#### First Time Visitor Goals

* I want to navigate through the website easily using navigation option in header.
* I want to get a clear feedback to any of my actions.
* I want to navigate through the quiz itself easily using buttons.
* I want to see my score after completing the quiz.
* I want to be familiar with the quiz rules.

#### Frequent Visitor Goals

* I want to be able to use the website across all the devices.

## Design Stage

### Wireframes

#### Header

<details><summary><b>Mobile</b></summary>

![Header for mobile wireframe using Balsamique](README-images/wireframe-header-mobile.png)</details>
<details><summary><b>Desktop</b></summary>

![Header for desktop wireframe using Balsamique](README-images/wireframe-header-desktop.png)</details>

The header looks the same on all the devices. It includes a logo and a link to Quiz Guide page.
<details><summary><b>Home page</b></summary>

![Home section wireframe using Balsamique](README-images/wireframe-home-section.png)
</details><br>

Home section includes h2 element, a small paragraph, button and an image. The home section is responsive and looks similar on all the devices with minor adjustments added such as positioning in a row for desktops and increased font size.
<details><summary><b>Quiz Guide page</b></summary>

![Quiz Guide page wireframe using Balsamique](README-images/wireframe-quiz-guide-page.png)
</details><br>

Quiz Guide includes an h2 element, an unordered list and a link that brings user back to Home page. 
<details><summary><b>Quiz Game</b></summary>

![Quiz wireframe using Balsamique](README-images/wireframe-quiz-game.png)
</details><br>
Quiz includes a heading, question counter, 4 options for user to choose from and a "Next" button. The quiz is responsive across all devices with minor adjustments like positioning and increased font size. 
<details><summary><b>Score</b></summary>

![Score wireframe using Balsamique](README-images/wireframe-score.png)
</details><br>
Score includes an h2 element, a span element, button to restart the quiz and a link to the Home page. The score part of the website is responsive across all the devices with minor adjustments like font size.

#### Footer

<details><summary><b>Mobile</b></summary>

![Footer for mobile wireframe using Balsamique](README-images/wireframe-footer-mobile.png)
</details>

<details><summary><b>Destop</b></summary>

![Footer for destop wireframe using Balsamique](README-images/wireframe-footer-desktop.png)
</details><br/>
The footer includes links to Instagram, Facebook and Twitter each opening in a new tab for accessibility.

### Colour Palette

![Colour Palette](README-images/colour-palette.png)

For this project, I chose the bright colors to be presented in my colour palette as they have a positive affect on the user experince. I also used black and white colours as well as rgba(0, 0, 0, .2) for drop shadow on header.

### Final Design

#### Mobile

<details><summary><b>(360x740)</b></summary>

![Figma design for mobile](README-images/figma-design-mobile.png)
</details>

#### Tablet

<details><summary><b>(768x1024)</b></summary>

![Figma design for tablet](README-images/figma-design-tablet.png)
</details>

#### Desktop

<details><summary><b>(1440x1024)</b></summary>

![Figma design for mobile](README-images/figma-design-desktop.png)
</details><br/>

For the font, I used Poppins font family as it fit best into the design and was readable for the user.

## Features

### Existing Features

<details><summary><b>Header</b></summary>

![Header](README-images/header-feature.png)
</details><br/>

  * Featured at the top of the website, the fully responsive header includes links to the codeasy logo and Quiz Guide page.
  * This feature will allow user to easily navigate between two pages.
<details><summary><b>Home section</b></summary>

![Home section](README-images/home-page-home-section-feature.png)
</details><br/>

  * Home section includes two text elemnts, an image for stylistic purpose and a button that initiates the quiz.
  * This feature will allow user get some information about the website and they can achieve using it as well as initiate the quiz with "Start Quiz" button.
<details><summary><b>Quiz</b></summary>

![Quiz](README-images/home-page-quiz-feature.png)
</details><br/>

  * Quiz includes 2 text elements, an unordered list and a "Next" button that enables user that go to the next quiz question.
  * This feature will allow user to go through 15 questions on HTML, CSS and JavaScript fundamentals as well as having four different options to choose from. The "Next" is also disabled, preventing user from going to the next question if the existing one is not being selected.
<details><summary><b>Selected answers</b></summary>

![Selected answers](README-images/quiz-answer-selected-feature.png)
</details><br/>

  * This feature allows user to see the correct answer if the answer they selected is incorrect as well as enable the "Next" button to work highlighting it in a darker colour.

<details><summary><b>Score</b></summary>

![Score](README-images/quiz-score-feature.png)
</details><br/>

  * This feature includes a text element, span element and two buttons. 
  * It will allow user see their score as well as enable them to restart the quiz by clicking on "Try Again button" or go to Home section by ckicking on "Go Home" button.
<details><summary><b>Footer</b></summary>

![Footer](README-images/footer-feature.png)
</details><br/>

  * Featured at the bottom of the website, the fully responsive footer enables the user to visit social media pages, each being open in a separate page
<details><summary><b>Quiz Guide</b></summary>

![Quiz Guide](README-images/quiz-guide-feature.png)
</details><br/>

  * Quiz Guide page includes a header, footer, h2 element, an unordered list and a button.
  * This feature will allow user familiarize themselves with the quiz rules as well as enable them to leave the page by clicking on "Exit" button.

### Features Left to Implement

* Timer - A timer that counts down during the quiz engages users and tests their knowledge under time time constrains creating more compelling and realistic quiz experience. 
* Saving username and score - Allowing users to save their score and usernames personalizes the experience and enables tracking progress across sessions. Saved scores and usernames would be intergrated into a leaderboard.
* 404 page that will give clear notification for the user if any links are broken.

## Testing

### Validator Testing

#### HTML

##### index.html

![W3C HTML Validator](README-images/index-html-page-w3c-validator.png)

* No errors were returned when passing through the official [W3C validation](https://validator.w3.org/)

##### quizguide.html

![W3C HTML Validator](README-images/quiz-guide-html-page-w3c-validator.png)

* No errors were returned when passing through the official [W3C validation](https://validator.w3.org/)

#### CSS

![W3C CSS Validator](README-images/w3c-css-validator.png)

* No errors were returned when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/)

#### JavaScript

##### questions.js

![JSHint JavaScript Validator](README-images/jshint-validator-questions-js.png)

* No errors were returned when passing through the official [JSHint JavaScript Validator](https://jshint.com/)

##### script.js

![JSHint JavaScript Validator](README-images/jshint-validator-script-js.png)

* No errors were returned when passing through the official [JSHint JavaScript Validator](https://jshint.com/). The questions variable was undefined as it was declared in another js file.

### Accessibility

To ensure that the website was accessible to all users the following steps were taken:

* An image has clear alt attribute that explains it is about.
* Aria-labels were included to all the internal and external links as well as buttons to provide the purpose for them for screen readers.

### SEO

Meta tags were included in a head of html file to tell the search engines and users more about the website and the information it contains.

![Meta tags](README-images/meta-tags.png)

### Lighthouse

Lighthouse (Chrome's developer tool) was used to assess the performance of the website across mobiles and desktops.

#### index.html

* Mobile

![Screenshot of Lighthouse score for mobile devices](README-images/home-page-mobile-lighthouse.png)

* Desktop
  
![Lighthouse score for desktops](README-images/home-page-desktop-lighthouse.png)
#### quizguide.html

* Mobile

![Screenshot of Lighthouse score for mobile devices](README-images/quiz-guide-page-mobile-lighthouse.png)

* Desktop
  
![Lighthouse score for desktops](README-images/quiz-guide-page-desktop-lighthouse.png)

### Manual Testing

Manual testing was conducted on mobile, tablet, laptop and desktop.

![Manual testing](README-images/manual-testing.png)

* The only issue is that on tablet the "Start Quiz" button is being difficult to click on. The reason for this is unknown.

#### Screen sizes

The website works well and is responsive on the following mobiles and tablets (these were tested manually):

<details><summary><b>Samsung Galaxy A34</b></summary>

![Samsung Galaxy A34](README-images/samsung-galaxy-a-thirty-four.jpg)
</details><br/>

There is an issue with html pages on this device a little bit of space appearing when you go to Quiz Guide page. To get rid of that, you need to pull the screen down

<details><summary><b>Oppo A12</b></summary>

![Oppo A12](README-images/oppo-a-twelve.jpg)
</details><br/>

There is no issues with the screen on this device, however the quiz elements are too big for this screen whixh means they are not responsive enough

* Samsung Galaxy S8+
* iPad

### Browsers

The website functions in the following browsers:

* Chrome
* Opera
* Microsoft Edge
* Firefox


## Technologies Used

## Languages Used

## Deployment

## Credits

## Acknowledgements