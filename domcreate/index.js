let $container = document.getElementById('container-wrapper');

let $h1 = document.createElement('h1');
$h1.innerText = "Hello this is our website";
$h1.id = "myh1";
// appending h1 to the parent element
$container.appendChild($h1);
// removing h1 element from the parent element
$container.removeChild($h1);