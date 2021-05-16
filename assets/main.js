
document.getElementById('genera_ticket').addEventListener('click',generaTicket);

    function generaTicket(event){
    event.preventDefault();
    var nomeEl = document.getElementById('nome').value;
    console.log(nomeEl);
    var kmEl = document.getElementById('km').value;
    console.log(kmEl);
    var gruppiEtà = document.getElementById('età');

    var prezzoPieno = kmEl.value *0.21;

    //sconto 20%minorenne
    if(gruppiEtà.value =='minorenne'){
        var prezzoMin = prezzoPieno * 0.2;
    }else if(gruppiEtà.value =='over65'){
        var prezzoOver = prezzoPieno *0.4;
    }

    }

    //funzione per i numeri casuali
    function randomNumber(min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
    }