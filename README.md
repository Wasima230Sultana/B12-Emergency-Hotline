# B12-Emergency-Hotline

<h1>
1.
i. difference between getElementByID and getElementByClassName :
</h1>
<p> 
getElementByID  : Selects a single element based on its unique id attribute.<br>
getElementByClassName : Selects all elements that has thr specified class name.
</p>

<h1>ii.difference between querySelector and querySelectorAll :</h1>
<p>
querySelector : Selects the first element that matches a given CSS collector.(tag names, class names, ids). <br>
querySelectorAll : Selects all elements that match a given CSS selector.
</p>

<h1>
How to create and insert a new element into the DOM
</h1>
<p>Following steps :</p> <br>
<p>i. Creating the element </p>
<p>ii.Attaching it to an existing element into the DOM.</p>
<p> Example of create and insert of element into the DOM <br>
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit';
placesSection.appendChild(h1);</p>