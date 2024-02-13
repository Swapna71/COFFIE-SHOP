document.getElementById("cart").addEventListener("click", () => {
  document.getElementById("cart_bx").classList.toggle("cart_bx_active");
});

let card_count=0;
let price_add=0;
let addCard=()=>{
    // create card
    let card=document.createElement("div");
    card.className='crd';
    card.id=`card-${card_count}`;


    // card innerHTML
    card.innerHTML=`
    <div class="img_title">
    <img src="${document.getElementsByClassName("main_img")[0].src}" alt="">
    <div class="title_price">
        <h5>${document.getElementsByClassName("coffie_title")[0].innerText}</h5>
        <h6 title=${document.getElementsByClassName("coffie_price")[0].title}> $${document.getElementsByClassName("coffie_price")[0].title}</h6>
    </div>
</div>
    `

    // create remove button
    let removeButton=document.createElement("i");
    removeButton.className="bi bi-x";
    removeButton.onclick=()=>{
        removeCard(card.id)
    };
    card.appendChild(removeButton);


document.getElementsByClassName("coffie_cards")[0].appendChild(card)
card_count++
price_add+= +document.getElementsByClassName('coffie_price')[0].title;
document.getElementById("total").innerText="$"+price_add

function removeCard(cardId){
let card=document.getElementById(cardId)
if(card){
    card.remove();
    price_add-= +card.getElementsByTagName("h6")[0].title;
    document.getElementById("total").innerText='$'+price_add
}
}
}

document.getElementById("add_button").addEventListener("click", ()=>{
    addCard()
})


let coffie=[
    {
        name: "Simple Coffie",
        price: "9",
        img:"coffee_cup.png"
    },

    {
        name: "Cappuccino",
        price: "16",
        img:"cappuccino.png"
    },

    {
        name: "Cold Coffie",
        price: "11",
        img:"coffee_cup3.png"
    }
]
console.log(coffie.length)

let next_back_count=0;

let pagi_fun=()=>{
    Array.from( document.getElementsByClassName("pagi_button")).forEach((el, i)=>{
        el.style.width="10px";
        el.style.height="10px";
    })
}



document.getElementById("next").addEventListener("click", ()=>{
    if(coffie.length-2<next_back_count){
        next_back_count=0
    }else{
        next_back_count++;
    }
   document.getElementsByClassName('main_img')[0].src=coffie[next_back_count].img;
   document.getElementsByClassName('coffie_title')[0].innerText=coffie[next_back_count].name;
   document.getElementsByClassName('coffie_price')[0].innerText='$'+coffie[next_back_count].price;
   document.getElementsByClassName('coffie_price')[0].title=coffie[next_back_count].price;
document.getElementById("count").innerText=next_back_count+1

   pagi_fun();
   document.getElementsByClassName("pagi_button")[next_back_count].style.width='15px';
   document.getElementsByClassName("pagi_button")[next_back_count].style.height='15px';

})


document.getElementById("back").addEventListener("click", ()=>{
    if(0>=next_back_count){
        next_back_count=coffie.length-1
    }else{
        next_back_count--;
    }
   document.getElementsByClassName('main_img')[0].src=coffie[next_back_count].img;
   document.getElementsByClassName('coffie_title')[0].innerText=coffie[next_back_count].name;
   document.getElementsByClassName('coffie_price')[0].innerText='$'+coffie[next_back_count].price;
   document.getElementsByClassName('coffie_price')[0].title=coffie[next_back_count].price;
document.getElementById("count").innerText=next_back_count+1

   pagi_fun();
   document.getElementsByClassName("pagi_button")[next_back_count].style.width='15px';
   document.getElementsByClassName("pagi_button")[next_back_count].style.height='15px';

})