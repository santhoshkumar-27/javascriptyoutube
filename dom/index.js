// document.getElementById('myid').id
// document.getElementById('myid').classList
// document.getElementsByClassName('myclass').innerTEXT 

// document.querySelector('#myid')



// attributes.
// let para = document.querySelector('p');

// para.getAttribute('title');
// para.setAttribute('title', 'changed value');

// para.hasAttribute('value');

// css values

// para.style.color = "red";


//adding css property to html by dom api

// para.classList.add('console', 'red');
// para.classList.remove('red');



document.getElementById('p1').addEventListener('click', function(e){
    e.stopPropagation();
    console.log(e.target.innerText)
})

// Event bubbling

document.getElementById('div1').addEventListener('click', function(e){
    console.log('container-section')
})
