let amount_of_cards = 24;
let data = [];
let point = 0;
let matched = 0;
let is_clicked = [];
// Skapa en array med alla kort i
for(let i=amount_of_cards, match_id = 0; i > 0; i--){
    if(i%2 == 0){
        match_id ++
    }
    let card = {
        id: i,
        match_id: match_id,
        img: `img/char-${match_id}.png`,
        matched: false,
        flipped: false
    }
    data.push(card)
}
// Blanda om min array med mina kort
function randomize_array(array){
    for(let i=array.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * i)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
// skapar en article som inehåller en bild och som får ett id, lägger även till en eventlyssnare så man vet när man har klickat på ett kort
function render(){  
    for(let i=0; i<data.length; i++ ){
        let brick = data[i];
        let el = document.createElement('article');
        el.innerHTML = `<img id= brick_id_${brick.id} src="${brick.img}" alt="bild_${brick.id}">`;
        el.addEventListener("click", () =>{
            if(brick.matched != true){
                is_clicked.push(brick);
                is_clicked.at(-1).flipped = true
                turn_card()
                time_to_check()
            }
        });
        document.querySelector('section').append(el);
    }
}
// En funktion som körs varje gång en bild klickas på, om bilden har ____ flipped == true så läggs en klass clicked på och i css så blir opacity 100% igen
function turn_card(){
    for(let i=0; i<data.length; i++){
        let brick = data[i];
        if(brick.flipped === true){
            document.querySelector(`#brick_id_${brick.id}`).classList.add('clicked')
        } else{
            document.querySelector(`#brick_id_${brick.id}`).classList.remove('clicked')
        }
    }
}
// En funktion som kollar om man har klickat på två olika kort, om man har klickat på samma kort två gånger så gills inte det. 
function time_to_check(){
    if(is_clicked.length == 2){
        if(is_clicked[0].id === is_clicked[1].id){
            is_clicked.pop()
        }else{
            check_if_same()
        }
    }
}
// Kollar om båda korten är samma och sätter matched till true isåfall, annars vänds korten tillbaka vid nästa klick
function check_if_same(){
    if(is_clicked[0].match_id === is_clicked[1].match_id){
        is_clicked[0].matched = true
        is_clicked[1].matched = true
        matched ++
        is_won()
    } else{
        is_clicked[0].flipped = false
        is_clicked[1].flipped = false
        point ++
        document.querySelector('#score').innerHTML = `Antal försök: ${point}`;
    }
    is_clicked = []
}
// kollar om man har matchat alla korten
function is_won(){
    if(matched === amount_of_cards/2){
        document.querySelector(`section`).classList.add('won')
        document.querySelector('section').innerHTML = `<h3>Grattis du vann på ${point} misslyckade försök</h3>`;
    }
}

randomize_array(data);
render();