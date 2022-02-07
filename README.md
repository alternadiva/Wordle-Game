## Wordle Game (Imitation) 🟩🟨⬜🟨🟩

This is my attempt at recreating one of the features of the infamous [Wordle](https://www.powerlanguage.co.uk/wordle/) game without looking at the original code or using any tutorials.

This is a solution for the following user story:

#### When I submit my guess, I would like to get a color coordinated feedback:
- [x] Show letters typed in
- [x] If the letter is in correct position ➡️ green background
- [x] If the letter is in the word, but in incorrect position ➡️ yellow background
- [x] If the letter is incorrect ➡️ grey background
- [ ] Limit guesses to six
- [ ] Style the UI

--------

### 1️⃣ Steps towards the solution
1. Generate a random string from an array of strings
2. Get inputs on click
3. Iterate through inputs, compare with letters in string and give feedback
4. Create grid row dinamically
5. Set focus on next input field on key up
6. Add new rows to grid

Next step -> Refactor the code

--------

### 2️⃣ Tech Stack
HTML, CSS, JS

--------

### 3️⃣ Features for the future
- [ ] Popup messages for correct and incorrect solutions
- [ ] Create keyboard dynamically with JS
- [ ] Present rules of the game
- [ ] Add header section with buttons
- [ ] Countdown until next word
- [ ] Show statistics
- [ ] Options to share on social media
- [ ] Popup messages for correct and incorrect solutions

--------

**Deployed to [GitHub Page](https://alternadiva.github.io/Wordle-Game/)**
