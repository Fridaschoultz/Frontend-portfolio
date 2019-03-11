let searchables = document.getElementsByClassName('searchable');
let searchfield = document.getElementById('search'); //input html // id search
searchfield.addEventListener('keydown', find); // om man trcyker på någon tangent så körs funktionen find igång

function find(e){ // e är objekt som skapas av eventlyssnaren som innehåller den tangent som man trycker ner
    if(13 == e.keyCode){ // 13 är enter. om enter är = objektet e. för att hämta egenskapen keyCode som innehåller 13=enter
        let searchstring = search.value;
        let hits = [];
        for(let i=0;i<searchables.length;i++){
            if(searchables[i].innerText.includes(searchstring)){
                hits.push(searchables[i]);
            }
        }
        if(hits.length > 0){
            window.scrollTo(0, hits[0].getBoundingClientRect().top);
        }
    }
}

