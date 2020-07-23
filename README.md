<h1>
<strong>iphone calculator replica</strong>
</h1>

Key Concepts:
- Functional Components in React
- React Hooks (useState and useEffect)
- CSS Grid
- CSS Flexbox

Install prettier

prettier eslint-config-prettier

Create Components folder- Create an App folder inside the Components folder repo-Create index.js and App.css inside that App folder.

Import index.js file from the App folder to main index.js

Create Button folder and create Button js and Button css files in the Button repo.

Pass in content prop to Button component. Update content prop as symbols and numbers in index.js file

Name Button component TYPES: (AC, ±, % as function) (÷, x, -, + and = symbols as operator)

Add useState and handleButtonPress to index component
Destructure prop (handleButtonPress) from Button component
Add onClick event to Button component, to click the div in that component and pass in content to the onButtonClick. However, to distinguish what button to press, I passed in content as parameter to handleButtonPress in index.js, set const num to parseFloat(value); and also wrote some conditional statements.

Having 2 arrow functions in handleButtonPress inside index.js, so it doesn't call the function immediately.

Pass value from useState inside the display div
Set memory from useState to remember whatever value (number and symbols) we enter

In index component, when you press AC, setMemory back to null, as well as, setValue back to "0". Conditionla statement was used to achieve this.
Set % also back to null

To remember that operator has been clicked, I set Operator (useState)