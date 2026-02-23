## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS: The main difference between them are as foollows:
i) getElementsByClassName returns live HTMLCollection. 
ii) getElementById('id') returns a single element with the specific ID.
iii) querySelector(selector) returns the first matching element.
iv) querySelectorAll(selector) returns a static NodeList of all matches.



### 2. How do you create and insert a new element into the DOM?
ANS: To create and insert a new element into the DOM:
const newDiv = document.createElement("div") 
newDiv.innerText = 'Hello DOM';
document.body.appendChild(newDiv);


### 3. What is Event Bubbling? And how does it work?
ANS: Events bubble up from the target element to its ancestors
<div id="parent">
<button id="child">Click Me</button>
</div>
document.getElementById('parent').addEventListener('click', () => {
console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', (e) => {
console.log('Child clicked');
// e.stopPropagation(); // stops bubbling
});



### 4. What is Event Delegation in JavaScript? Why is it useful?
ANS: Event Delegation is a technique where a parent handles events of child elements using bubbling for dynamic content.
Example:
<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
</ul>

document.getElementById('list').addEventListener('click', (e) => {
if (e.target.tagName === 'LI') {
alert('Clicked on: ' + e.target.innerText);
}
});

It is useful to reduces number of event listeners & handles added elements dynamically

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault() stops the default browser link while stopPropagation() stops event from bubling from child to parentt
