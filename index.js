import { telefoni } from "./data.js";
import {
  link,
  divLogForm,
  logclose,
  secttionSlide,
  divSlider,
  input1Form,
  input2Form,
  butLog,
  logo,
  textArea,
  formbtn,
  input2,
  input1,
  divKorpa1,
  formLabel,
  formLabel1,
  formLabel2,
  contactForm,
  allContact,
  divKorpaBuy,
  aDoCetristo,
  aDoDvesta,
  aDoHiljadu,
  slikaXaomi,
  slikaApple,
  slikaHyuawie,
  slikaSamsung,
  dugmeOtvoriKorpu,
  spanA2Br,
  elementsNav,
  producth2
  
} from "./html.js";


window.addEventListener("load", (event) => {
  proizvodjac(telefoni);
  render(telefoni);
  console.log(telefoni)
});

//Slider za slike
var div = document.getElementById("slider");
div.style.position = "relative";

var slike = ["1", "2", "3"];

var i;
for (i = 0; i <= 3; i++) {
  var img = document.createElement("img");
  img.src = `img-slider/${slike[i]}.jpg`;
  if (i == 3) {
    img.src = "";
  }
  img.alt = `Slika ${i + 1}`;
  img.style.width = "100%";
  img.style.position = "absolute";
  img.style.top = "0px";
  img.style.left = "0px";
  img.style.zIndex = i + 1;
  div.appendChild(img);
}

var images = document.querySelectorAll("#slider img");
var j = images.length - 1;
var interval = setInterval(function () {
  if (j == 0) {
    j = images.length - 1;
    for (var i = images.length - 1; i >= 0; i--) {
      images[i].classList.remove("sakri");
    }
  }

  images[j].classList.add("sakri");
  j--;
}, 3000);

//FILTERI
let svi = telefoni;
let samsung = telefoni.filter((item) => item.proizvodjac === "Samsung");
let apple = telefoni.filter((item) => item.proizvodjac === "Apple");
let huawai = telefoni.filter((item) => item.proizvodjac === "Huawei");
let xiaomi = telefoni.filter((item) => item.proizvodjac === "Xiaomi");
let dvesta = telefoni.filter((item) => item.cena <= 200);
let cetristo = telefoni.filter((item) => item.cena <= 400);
let hiljadu = telefoni.filter((item) => item.cena <= 1000);

const slikeProizvodi = document.querySelectorAll(".slika-proizvod");
let popTel = document.querySelector("#popTel");

let wraperPop = document.querySelector("#wraper-pop");
let popHtml = "";
var spisak = [];

// window.onload = function(){
//   proizvodjac(svi);
// }
producth2.onclick=function(){
  proizvodjac(svi)
}


aDoCetristo.addEventListener("click", function () {
  proizvodjac(cetristo);
  render(cetristo);
});
aDoDvesta.addEventListener("click", function () {
  proizvodjac(dvesta);
  render(dvesta);
});
aDoHiljadu.addEventListener("click", function () {
  proizvodjac(hiljadu);
  render(hiljadu);
});
slikaApple.addEventListener("click", function () {
  proizvodjac(apple);
  render(apple);
});
slikaHyuawie.addEventListener("click", function () {
  proizvodjac(huawai);
  render(huawai);
});
slikaSamsung.addEventListener("click", function () {
  proizvodjac(samsung);
  render(samsung);
});
slikaXaomi.addEventListener("click", function () {
  proizvodjac(xiaomi);
  render(xiaomi);
});

//UBACI FILTER

function proizvodjac(item) {
  function Oduzimanje(cena) {

  }
  let proizvodi = document.querySelector("#proizvodi");
  proizvodi.innerHTML = "";
  let html = "";
  for (var i = 0; i < item.length; i++) {
    html += `
      <div class="proizvod">
        <div class="slika-proizvod">
        <img src="${item[i].prednja}"" alt="" />
        <h5 class="proizvodi-a" >${item[i].proizvodjac}-${item[i].model}</h5>
        </div>
        <p class="proizvodi-p">Cena: ${item[i].cena} €</p>
        <button data-cena="${item[i].cena}" class="proizvodi-btn btn-${i}">Kupi</button>
        </div>
      `;
  }
  proizvodi.innerHTML = html;
  let dugmeKorpa = document.querySelectorAll(".proizvodi-btn");
  

  for (let i = 0; i < item.length; i++) {
    dugmeKorpa[i].addEventListener("click", function () {
      var phone = {
        id: item[i].id,
        slika: item[i].prednja,
        proizvodjac: item[i].proizvodjac,
        model: item[i].model,
        cena: item[i].cena,
      };
      spisak.push(phone);
      spanA2Br.innerText = spisak.length;
      dugmeOtvoriKorpu.classList.toggle("show");
    });
  }
}

///Funkcija za ofset
const aNavLink = document.querySelectorAll(".nav-link");
for (let link of aNavLink) {
  link.onclick = (e) => {
    const hrefValue = link.getAttribute("href");
    const divPage = document.querySelector(hrefValue);
    const oT = divPage.offsetTop - 110;
    window.scroll({
      top: oT,
      left: 0,
      behavior: "smooth",
    });

    return false;
  };
}

link.addEventListener("click", function () {
  divLogForm.classList.remove("remove");
  divLogForm.classList.add("formLogInStart");
});
logclose.addEventListener("click", function () {
  divLogForm.classList.remove("formLogInStart");
  divLogForm.classList.add("remove");
});
const korisnici = [
  {
    id: 1,
    username: "bot123",
    pasword: "ameRica54",
  },
  {
    id: 2,
    username: "bot223",
    pasword: "ameRica55",
  },
];

//FORMA I VALIDACIJA

butLog.addEventListener("click", function () {
  let divGreske = document.createElement("div");
  divGreske.classList.add("divGreske");
  const usernameVal = input1Form.value;
  const pasVal = input2Form.value;
  let usernameValdi = korisnici.map((korisnik) => {
    if (korisnik.username === usernameVal && korisnik.pasword === pasVal) {
      divLogForm.classList.remove("formLogInStart");
      divLogForm.classList.add("remove");
      let divLogValidation = document.createElement("div");
      divLogValidation.innerHTML = `<h2>Uspesno ste se ulogovali</h2>`;
      divLogValidation.classList.add("uspesno-logovanje");
      document.body.appendChild(divLogValidation);
      logo.removeChild(link);
      let removeSecses = () =>
        divLogValidation.classList.remove("uspesno-logovanje");
      divLogValidation.classList.add("remove");
      setTimeout(removeSecses, 3000);
    }
  });
  try {
    if (usernameVal == "" && pasVal == "") {
      throw "Polja nemogu biti prazna";
    }
    const userReg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.\S]{3,10}$/;
    if (userReg.test(usernameVal)) {
    } else {
      throw "Username mora da ima 3-10 karaktera nesme da ima razmak";
    }
    const pasRegular = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;
    if (pasRegular.test(pasVal)) {
    } else {
      throw "Password mora imati 8-15 karakter,jedno veliko slovo ";
    }
    let usernameValdi = korisnici.map((korisnik) => {
      if (korisnik.username != usernameVal && korisnik.pasword != pasVal) {
        throw "Username i Password nisu tacni";
      }
    });
  } catch (err) {
    divGreske.innerHTML = `<p class='p-greske' style = "color: black">${err}</p>`;
    divLogForm.appendChild(divGreske);
    let apendovanje = () => divLogForm.removeChild(divGreske);
    setTimeout(apendovanje, 2000);
  }
});

input2.onclick = () => input2.setAttribute("value", "+381");
let message = document.createElement("p");
contactForm.appendChild(message);
let br = 0;
contactForm.addEventListener("submit", function (e) {
  let trueMail = "";
  let trueTel = "";
  let trueText = "";
  formbtn.id = "dugmeKorisnik" + br++;
  e.preventDefault();
  let valueMeilForm = input1.value;
  let valueTelForm = input2.value;
  let textArea1 = textArea.value;
  const regmail = /^([A-Za-z0-9_\-\.]{3,64})@([A-Za-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/gi;
  const regNum = /^\+\d{1,3}\d{2,3}\d{3}\d{3,}$/gi;
  let retText = /(^[A-Za-z0-9\s\.\,\?\!]{20,}$)/gi;
  let textP = "SVA POLJA MORAJU BITI POPUNJENA";
  if (valueMeilForm == "" || valueTelForm == "" || textArea1 == "") {
    input1.placeholder = textP;
    input2.placeholder = textP;
    textArea.placeholder = textP;
  }
  const pin4 = document.createElement("p");
  pin4.innerText = "";
  formLabel2.appendChild(pin4);
  pin4.id = "dugme4";
  if (retText.test(textArea1)) {
    textArea.style.color = "lime";
    trueText = textArea1;
  } else {
    if (formbtn.id == "dugmeKorisnik0") {
      pin4.innerText = "Minimum 20 karaktera";
      pin4.classList.add("p-tel-netacan");
    }
  }
  const pin2 = document.createElement("p");
  pin2.innerText = "";
  pin2.id = "dugme3";
  formLabel1.appendChild(pin2);
  if (regNum.test(valueTelForm)) {
    input2.style.color = "lime";
    trueTel = valueTelForm;
  } else {
    if (formbtn.id == "dugmeKorisnik0") {
      pin2.innerText = "Netacan unos telefona";
      pin2.classList.add("p-tel-netacan");
    }
  }

  let pin3 = document.createElement("p");
  pin3.innerText = "";
  pin3.id = "dugme2";
  formLabel.appendChild(pin3);
  if (regmail.test(valueMeilForm)) {
    input1.style.color = "lime";
    trueMail = valueMeilForm;
  } else {
    if (formbtn.id == "dugmeKorisnik0") {
      pin3.innerText = "Netacan unos mejla";
      pin3.classList.add("p-tel-netacan");
    }
  }
  if (trueTel) {
    let dugme3 = document.getElementById("dugme3");
    dugme3.innerText = "";
  }
  if (trueText) {
    let dugme4 = document.getElementById("dugme4");
    dugme4.innerText = "";
  }
  if (trueMail) {
    let mailBrise = document.querySelector("#dugme2");
    mailBrise.innerText = "";
  }

  if (trueTel !== "" && trueText !== "" && trueMail !== "") {
    let questions = [];
    let newUser = {
      mail: trueMail,
      tel: trueTel,
      text: trueText,
    };
    questions.push(newUser);
   
    let uspesnaForma = document.createElement("div");
    uspesnaForma.innerHTML = `<h2>Uspesno ste poslali poruku</h2>
                            <p>Vas E-mail: ${trueMail}</p>
                            <p>Vas Telefon: ${trueTel}</p>
                            <p>Ukoliko ste pogresili neke od podataka</p>
                            <p>Kontaktirajte nas na E-mail:example@gmail.com</p>
    `;
    uspesnaForma.classList.add("uspesnaForma1");
    allContact.appendChild(uspesnaForma);
    textArea.value = "";
    input1.value = "";
    input2.value = "";
    let removeSecses = () => uspesnaForma.classList.remove("uspesnaForma1");
    uspesnaForma.classList.add("remove");
    setTimeout(removeSecses, 3000);
  }
});

//FUNKCIJA ZA POP-UP

function render(proizvodi) {
  var h5 = document.getElementsByClassName("proizvodi-a");
  for (let i = 0; i < proizvodi.length; i++) {
    h5[i].addEventListener("click", function () {
      // proizvodi[i].addEventListener("click", function () {
      //if (i + 1 == proizvodi[i].id) {
      popTel.classList.remove("remove");
      popTel.classList.add("popTel");
      let obj = Object.assign({}, proizvodi[i]);
      
      popHtml = `
          <h1 class='pop-h1'>${obj.proizvodjac}-${obj.model}</h1>
          <button class='btn-pop-x'>X</button>
          <div class='left-right'>
          <button class='left'></button>
          <button class='right'></button>
          </div>
          <div class='mainPop'>
          <div class='pop-div-img'>
          <div class='div-pop-velike'>
           <img class='pop-prednja' src='${obj.prednja}' alt='slika-tel'/>
           <img class='pop-zadnja' src='${obj.zadnja}' alt='slika-tel'/>
           </div>
           <div class='div-pop-mala'>
           <img class='pop-prednja-mala' src='${obj.prednja}' alt='slika-tel'/>
           <img class='pop-zadnja-mala' src='${obj.zadnja}' alt='slika-tel'/>
           </div>
           </div>
           <div class='pop-info'>
           <p class='pop-naziv'>Naziv proizvoda: ${obj.proizvodjac}-${obj.model}</p>
           <p class='pop-garancija'>Garancija: 2 Godine</p>
           <p class='pop-ram'>Ram memorija: ${obj.ram}</p>
           <p class='pop-memorija'>Interna memorija: ${obj.kapacitet}</p>
           <p class='pop-kamera'>Glavna kamera: ${obj.kamera}</p>
           <p class='pop-cena'>Cena: ${obj.cena} €</p>
           <p class='pop-baterija'>Kapacitet baterije: ${obj.baterija}</p>
           <p class='pop-boja'>Dostupno u bojama: ${obj.boja}</p>
           </div>
           </div>
           <button id='korpa' class='btn-pop-kupi'>Dodaj u korpu</button>
          <div class='video'>${obj.youtube}</div>
          `;
      //  }

      popTel.innerHTML = popHtml;
      

      const left = document.querySelector(".left");
      const right = document.querySelector(".right");
      let malaPrednja = document.querySelector(".pop-prednja-mala");
      let prednja = document.querySelector(".pop-prednja");
      let malaZadnja = document.querySelector(".pop-zadnja-mala");
      let zadnja = document.querySelector(".pop-zadnja");
      const video = document.querySelector(".video");
      const baroviPop = document.querySelector(".barovi");
      const btn = document.querySelector(".play-paus");
      const bar1 = document.querySelector(".bar1");

      malaPrednja.addEventListener("click", function () {
        zadnja.classList.add("close");
        prednja.classList.remove("closeFront");
        prednja.classList.add("openFront");
      });

      right.addEventListener("click", function () {
        prednja.classList.add("closeFront");
        zadnja.classList.remove("close");
        zadnja.classList.add("open");
      });
      left.addEventListener("click", function () {
        zadnja.classList.add("close");
        prednja.classList.remove("closeFront");
        prednja.classList.add("openFront");
      });

      malaZadnja.addEventListener("click", function () {
        prednja.classList.add("closeFront");
        zadnja.classList.remove("close");
        zadnja.classList.add("open");
      });
      let popClose = document.querySelector(".btn-pop-x");
      popClose.addEventListener("click", function () {
        popTel.classList.add("remove");
      });
    });
  }
}
//  KORPA
dugmeOtvoriKorpu.addEventListener("click", function () {
  let main = document.createElement("div");
  main.id = "main-products";
  document.body.appendChild(main);
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.innerText = " X ";
  main.appendChild(closeBtn);
  let price = document.createElement("div");
  price.id = "cena";
  main.appendChild(price);
  let addToCard = document.createElement("button");
  addToCard.classList.add("addToCard");
  addToCard.innerText = "Add to card";
  main.appendChild(addToCard);
  price.innerHTML = ` 
  <span class="total">Total:<span class="price">0€<span></span>
  `;
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(main);
  });
  for (let i = 0; i < spisak.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "product");
    let podaci = `
        <div class="items podaci">
        <div class="img-korpa122">
                 <img src="${spisak[i].slika}" />
                 </div>
            <div class="naziv-model">
                <div class=img-korpa>
                </div>
                <div class="items naslov">${spisak[i].proizvodjac}</div>
                <div class="items model">${spisak[i].model}</div>
            </div>
            <div id="${telefoni[i].id}" class="items cena">${spisak[i].cena}</div>
        </div>
        <div class="buttons">
            <span class="remove-product" data-cena="${spisak[i].cena}"> X </span>
        </div>
    `;
    item.innerHTML = podaci;
    main.appendChild(item);
  }
  var totalPrice = spisak.map((item) => item.cena).reduce((x, y) => x + y, 0);
  price.innerHTML = ` 
 <span class="total">Total:<span class="price">${totalPrice}€<span></span>
 `;
  let buttons = document.getElementsByClassName("remove-product");
  let arrButtons = Array.prototype.slice.call(buttons);

  let ukloniDugme = arrButtons.map((item) =>
    item.addEventListener("click", function (event) {
      main.removeChild(event.target.parentElement.parentElement);
      let spisakCena = document.getElementsByTagName("data-cena");
      spanA2Br.innerText=spanA2Br.innerText-1
      // for (let i = 0; i < spisakCena.length; i++){
      //     console.log(spisakCena[i])
      // }
    })
  );
});

elementsNav.onclick =function burger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
