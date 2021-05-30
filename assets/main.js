
document.getElementById('genera_ticket_click').addEventListener('click',generaTicket);

    function generaTicket(event){
    event.preventDefault();
    var nomeEl = document.getElementById('nome');
    console.log(nomeEl);
    var kmEl = document.getElementById('km');
    console.log(kmEl);
    var gruppiEtà = document.getElementById('anni');
    console.log(gruppiEtà);
    var prezzoPieno = kmEl.value * 0.21;
   


    //sconto 20%minorenne
    if(gruppiEtà.value =='minorenne'){
        prezzoPieno -= prezzoPieno * 0.2;
        

    //sconto 40% over65
    }else if(gruppiEtà.value =='over65'){
        prezzoPieno -= prezzoPieno * 0.4;
        
    }
    console.log( prezzoPieno);
    }



    

  
    //funzione per i numeri casuali
    function randomNumber(min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
    }
