# B12-Emergency-Hotline

<h4>
1.
i. difference between getElementByID and getElementByClassName :
</h4>
<p> 
getElementByID  : Selects a single element based on its unique id attribute.<br>
getElementByClassName : Selects all elements that has thr specified class name.
</p>

<h4>ii.difference between querySelector and querySelectorAll :</h4>
<p>
querySelector : Selects the first element that matches a given CSS collector.(tag names, class names, ids). <br>
querySelectorAll : Selects all elements that match a given CSS selector.
</p>

<h4>
2.How to create and insert a new element into the DOM
</h4>
<p>Following steps :</p>
<p>i. Creating the element </p>
<p>ii.Attaching it to an existing element into the DOM.</p>
<p> Example of create and insert of element into the DOM :<br>
const h1 = document.createElement('h1'); <br>
h1.innerText = 'places i want to visit'; <br>
placesSection.appendChild(h1);</p>


<h4>3.What is Event Bubbling and how does it work? </h4>
<p>
When an event occurs on an element,first runs the handler on that element, then moves up the DOM tree (parent -> ancestor -> document).<br>
Example: <br>
document.getElementById('outer').addEventListener('click', function() {
  console.log('Parent div clicked');
});
<br>
document.getElementById('middle').addEventListener('click', function() {
  console.log('ancestor div clicked');
});
<br>
document.getElementById('inner').addEventListener('click', function() {
  console.log('document div clicked');
});
<br>
</p>


<h4>4.What is Event Delegation in JavaScript? Why is it useful?</h4>
<p>Event Delegation is basically a pattern to handle events efficiently.
<br>
 Instead of adding an event listener to each and every similar element, can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
<br>
 Event Delegation is a useful pattern that allows to write cleaner code, and create fewer event listeners with similar logic.
 </p>


 <h4>5.What is the difference between preventDefault() and stopPropagation() methods?</h4>
 <p>
 preventDefault() : Prevents the default browser behavior (e.g., stop a link from navigating, stop a form from submitting).
 <br>
 stopPropagation() : Stops the event from bubbling up to parent elements.
 </p>