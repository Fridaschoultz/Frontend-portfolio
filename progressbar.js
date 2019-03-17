// 1. Skapar funktionen progressBar

/* 2. Skapar variablerna elem 1-6 som innehåller objektet document som i sin tur innehåller metoden getElementById
  som returnerar ett element som representerar en specifikt id som är kopplat till en string eller liknande
  i detta fall jsBar 1-6 som står för alla de 6 progressBars som syns på sidan. */

/* 3. Variablerna width 1-6 skapas som innehåller bredden i procent var progressBarsen skall börja*/
/* 4. Variabel id 1-6 skapas och och ett interval setts på 50 i tids perspektiv för att ladda progressBaren tillsamans med de 
olika funktionerna iframe 1-6 */

/* 5. Funktionera iframe 1-6 skapas med en if sats som säger att om width 1-6 är större eller lika med 30 osv
så skall satsen under med clearIntervall(id1) clearas när den når det man angivit i if satsen och sätts till noll.
 Annars skall else satsen köras och width ökas med 1 och elem1.style.width1 gör så att progressBaren fylls på med grönt */

/* Gör så att man kan se procenten laddas i progressBaren genom att ta variabeln som innehåller de olika barsen och
 och sedan med hjälp av innerHTML hämta och placera i dom givna taggarna i DOM elementet*/



function progressBar() {
  var elem1 = document.getElementById("jsBar1");
  var elem2 = document.getElementById("jsBar2");
  var elem3 = document.getElementById("jsBar3");
  var elem4 = document.getElementById("jsBar4");
  var elem5 = document.getElementById("jsBar5");
  var elem6 = document.getElementById("jsBar6");
  var width1 = 1;
  var width2 = 1;
  var width3 = 1;
  var width4 = 1;
  var width5 = 1;
  var width6 = 1;
  var id1 = setInterval(frame1, 50);
  var id2 = setInterval(frame2, 50);
  var id3 = setInterval(frame3, 50);
  var id4 = setInterval(frame4, 50);
  var id5 = setInterval(frame5, 50);
  var id6 = setInterval(frame6, 50);

  function frame1() { // javascript
    if (width1 >= 30) {
      clearInterval(id1);
    } else {
      width1++;
      elem1.style.width = width1 + '%';
      elem1.innerHTML = width1 * 1 + '%';
    }
  }

  function frame2() {
    if (width2 >= 70) { // HTML
      clearInterval(id2);
    } else {
      width2++;
      elem2.style.width = width2 + '%';
      elem2.innerHTML = width2 * 1 + '%';
    }
  }

  function frame3() {
    if (width3 >= 55) { // CSS
      clearInterval(id3);
    } else {
      width3++;
      elem3.style.width = width3 + '%';
      elem3.innerHTML = width3 * 1 + '%';
    }
  }

  function frame4() {
    if (width4 >= 30) { //Photoshop
      clearInterval(id4);
    } else {
      width4++;
      elem4.style.width = width4 + '%';
      elem4.innerHTML = width4 * 1 + '%';
    }
  }

  function frame5() {
    if (width5 >= 40) { // Adobe Xd
      clearInterval(id5);
    } else {
      width5++;
      elem5.style.width = width5 + '%';
      elem5.innerHTML = width5 * 1 + '%';
    }
  }

  function frame6() { // github
    if (width6 >= 60) {
      clearInterval(id6);
    } else {
      width6++;
      elem6.style.width = width6 + '%';
      elem6.innerHTML = width6 * 1 + '%';
    }
  }

}