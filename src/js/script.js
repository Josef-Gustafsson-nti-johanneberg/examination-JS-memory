let data = [
{
    id: 1,
    img: 'img/char-1.png',
    matched: false,
    flipped: false
},
{
    id: 1,
    img: 'img/char-1.png',
    matched: false,
    flipped: false
},
{
    id: 2,
    img: 'img/char-2.png',
    matched: false,
    flipped: false
},
{
    id: 2,
    img: 'img/char-2.png',
    matched: false,
    flipped: false
},
{
    id: 3,
    img: 'img/char-3.png',
    matched: false,
    flipped: false
},
{
    id: 3,
    img: 'img/char-3.png',
    matched: false,
    flipped: false
},
{
    id: 4,
    img: 'img/char-4.png',
    matched: false,
    flipped: false
},
{
    id: 4,
    img: 'img/char-4.png',
    matched: false,
    flipped: false
},
{
    id: 5,
    img: 'img/char-5.png',
    matched: false,
    flipped: false
},
{
    id: 5,
    img: 'img/char-5.png',
    matched: false,
    flipped: false
},
{
    id: 6,
    img: 'img/char-6.png',
    matched: false,
    flipped: false
},
{
    id: 6,
    img: 'img/char-6.png',
    matched: false,
    flipped: false
},
{
    id: 7,
    img: 'img/char-7.png',
    matched: false,
    flipped: false
},
{
    id: 7,
    img: 'img/char-7.png',
    matched: false,
    flipped: false
},
{
    id: 8,
    img: 'img/char-8.png',
    matched: false,
    flipped: false
},
{
    id: 8,
    img: 'img/char-8.png',
    matched: false,
    flipped: false
},
{
    id: 9,
    img: 'img/char-9.png',
    matched: false,
    flipped: false
},
{
    id: 9,
    img: 'img/char-9.png',
    matched: false,
    flipped: false
},
{
    id: 10,
    img: 'img/char-10.png',
    matched: false,
    flipped: false
},
{
    id: 10,
    img: 'img/char-10.png',
    matched: false,
    flipped: false
},
{
    id: 11,
    img: 'img/char-11.png',
    matched: false,
    flipped: false
},
{
    id: 11,
    img: 'img/char-11.png',
    matched: false,
    flipped: false
},
{
    id: 12,
    img: 'img/char-12.png',
    matched: false,
    flipped: false
},
{
    id: 12,
    img: 'img/char-12.png',
    matched: false,
    flipped: false
},

];


let point = 0;
let clicked = 0
let is_clicked = []
 
// src.appendChild(img); 




function render(){

    // var src = document.getElementById("score"); 
    // var text = document.createTextNode(point); 

    // src.appendChild(text); 

    // var src = document.querySelector("#score").append(point);
     
    // // var text = document.createTextNode(point); 
    // console.log(src)
    // console.log(point)
    // // src.appendChild(text);

    

    for(let i=0; i<data.length; i++ ){
        
        
        let brick = data[i];

        let el = document.createElement('article');
        el.innerHTML = `<img src="${brick.img}">`; 
        el.addEventListener("click", () =>{
            // while(clicked<3){
            el.classList.toggle('clicked')

            is_clicked.push(brick);
            is_clicked.at(-1).flipped = true
            console.log(is_clicked[0].flipped)

            // }
            if (is_clicked.length == 2){
                check_if_same()
                // is_clicked.at(-1).flipped = false
                // is_clicked = is_clicked.pop()
                turn_card()

            }

        });

        document.querySelector('#x').append(el);

    }

}

function turn_card(){
    let test = document.querySelector('#score') 
    test.innerHTML = `<p>${point}</p>`; 
    document.querySelector(".clicked").classList.toggle('clicked')
    document.querySelector(".clicked").classList.toggle('clicked')

}

function check_if_same(){
    if (is_clicked[0].id === is_clicked[1].id){
        console.log("wow")
        console.log(point)
        point ++
    }
    is_clicked = []

}

render();