document.querySelector('#navCardBurgers').addEventListener('click',() => {
    document.querySelector('#cardBurgers').style.display = "flex";
    document.querySelector('#cardCombos').style.display = "none";
    document.querySelector('#cardLanTrads').style.display = "none";
    document.querySelector('#cardFritas').style.display = "none";
    document.querySelector('#cardBebidas').style.display = "none";
})

document.querySelector('#navCardCombos').addEventListener('click',() => {
    document.querySelector('#cardBurgers').style.display = "none";
    document.querySelector('#cardCombos').style.display = "flex";
    document.querySelector('#cardLanTrads').style.display = "none";
    document.querySelector('#cardFritas').style.display = "none";
    document.querySelector('#cardBebidas').style.display = "none";
})

document.querySelector('#navCardLanTrads').addEventListener('click',() => {
    document.querySelector('#cardBurgers').style.display = "none";
    document.querySelector('#cardCombos').style.display = "none";
    document.querySelector('#cardLanTrads').style.display = "flex";
    document.querySelector('#cardFritas').style.display = "none";
    document.querySelector('#cardBebidas').style.display = "none";
})

document.querySelector('#navCardFritas').addEventListener('click',() => {
    document.querySelector('#cardBurgers').style.display = "none";
    document.querySelector('#cardCombos').style.display = "none";
    document.querySelector('#cardLanTrads').style.display = "none";
    document.querySelector('#cardFritas').style.display = "flex";
    document.querySelector('#cardBebidas').style.display = "none";
})

document.querySelector('#navCardBebidas').addEventListener('click',() => {
    document.querySelector('#cardBurgers').style.display = "none";
    document.querySelector('#cardCombos').style.display = "none";
    document.querySelector('#cardLanTrads').style.display = "none";
    document.querySelector('#cardFritas').style.display = "none";
    document.querySelector('#cardBebidas').style.display = "flex";
})