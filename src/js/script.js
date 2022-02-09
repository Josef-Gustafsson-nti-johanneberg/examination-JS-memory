let data = [
{
    id: 1,
    match_id: 1,
    img: 'img/char-1.png',
    matched: false,
    flipped: false
},
{
    id: 2,
    match_id: 1,
    img: 'img/char-1.png',
    matched: false,
    flipped: false
},
{
    id: 3,
    match_id: 2,
    img: 'img/char-2.png',
    matched: false,
    flipped: false
},
{
    id: 4,
    match_id: 2,
    img: 'img/char-2.png',
    matched: false,
    flipped: false
},
{
    id: 5,
    match_id: 3,
    img: 'img/char-3.png',
    matched: false,
    flipped: false
},
{
    id: 6,
    match_id: 3,
    img: 'img/char-3.png',
    matched: false,
    flipped: false
},
{
    id: 7,
    match_id: 4,
    img: 'img/char-4.png',
    matched: false,
    flipped: false
},
{
    id: 8,
    match_id: 4,
    img: 'img/char-4.png',
    matched: false,
    flipped: false
},
{
    id: 9,
    match_id: 5,
    img: 'img/char-5.png',
    matched: false,
    flipped: false
},
{
    id: 10,
    match_id: 5,
    img: 'img/char-5.png',
    matched: false,
    flipped: false
},
{
    id: 11,
    match_id: 6,
    img: 'img/char-6.png',
    matched: false,
    flipped: false
},
{
    id: 12,
    match_id: 6,
    img: 'img/char-6.png',
    matched: false,
    flipped: false
},
{
    id: 13,
    match_id: 7,
    img: 'img/char-7.png',
    matched: false,
    flipped: false
},
{
    id: 14,
    match_id: 7,
    img: 'img/char-7.png',
    matched: false,
    flipped: false
},
{
    id: 15,
    match_id: 8,
    img: 'img/char-8.png',
    matched: false,
    flipped: false
},
{
    id: 16,
    match_id: 8,
    img: 'img/char-8.png',
    matched: false,
    flipped: false
},
{
    id: 17,
    match_id: 9,
    img: 'img/char-9.png',
    matched: false,
    flipped: false
},
{
    id: 18,
    match_id: 9,
    img: 'img/char-9.png',
    matched: false,
    flipped: false
},
{
    id: 19,
    match_id: 10,
    img: 'img/char-10.png',
    matched: false,
    flipped: false
},
{
    id: 20,
    match_id: 10,
    img: 'img/char-10.png',
    matched: false,
    flipped: false
},
{
    id: 21,
    match_id: 11,
    img: 'img/char-11.png',
    matched: false,
    flipped: false
},
{
    id: 22,
    match_id: 11,
    img: 'img/char-11.png',
    matched: false,
    flipped: false
},
{
    id: 23,
    match_id: 12,
    img: 'img/char-12.png',
    matched: false,
    flipped: false
},
{
    id: 24,
    match_id: 12,
    img: 'img/char-12.png',
    matched: false,
    flipped: false
},

];


let point = 0;
let clicked = 0
let is_clicked = []
 
randomize_array(data)
document.querySelector('#score').innerHTML = `${point}`;


function randomize_array(array){
    for(let i=array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
}


function render(){  

    for(let i=0; i<data.length; i++ ){
        let brick = data[i];
        let el = document.createElement('article');
        el.innerHTML = `<img id= brick_id_${brick.id} src="${brick.img}">`;
        el.addEventListener("click", () =>{
            if (brick.matched != true){
            is_clicked.push(brick);
            is_clicked.at(-1).flipped = true
            turn_card()
            time_to_check()
            
            }
        });
        document.querySelector('#x').append(el);
    }
}



function turn_card(){
    for(let i=0; i<data.length; i++ ){
        let brick = data[i];
        if(brick.flipped === true){
            document.querySelector(`#brick_id_${brick.id}`).classList.add('clicked')
        } else{
            document.querySelector(`#brick_id_${brick.id}`).classList.remove('clicked')
        }
    }
}

function time_to_check(){
    if (is_clicked.length == 2){
        if(is_clicked[0].id === is_clicked[1].id){
            is_clicked.pop()
        }else{
            check_if_same()
        }

    }
}

function check_if_same(){
    if (is_clicked[0].match_id === is_clicked[1].match_id){
        
        is_clicked[0].matched = true
        is_clicked[1].matched = true
    } else{
        is_clicked[0].flipped = false
        is_clicked[1].flipped = false

        point ++
        document.querySelector('#score').innerHTML = `${point}`;


    }
    is_clicked = []



}

render();