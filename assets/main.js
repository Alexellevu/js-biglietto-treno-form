
document.getElementById('genera_ticket_click').addEventListener('click',generaTicket);

    function generaTicket(event){
    event.preventDefault();
    var nomeEl = document.getElementById('nome');
  
    var kmEl = document.getElementById('km');
  
    var gruppiEtà = document.getElementById('anni');
    
    var prezzoPieno = kmEl.value * 0.21;
    var bigliettoEL = document.querySelector('.biglietto');
   


    //sconto 20%minorenne
    if(gruppiEtà.value =='minorenne'){
        prezzoPieno -= prezzoPieno * 0.2;
        

    //sconto 40% over65
    }else if(gruppiEtà.value =='over65'){
        prezzoPieno -= prezzoPieno * 0.4;
        
    }

    



    bigliettoEL.insertAdjacentHTML('beforeend',
    `
        <div class="passeggero">
            <h5>Nome passeggero</h5>  
            ${nomeEl.value}
        </div>

        <div class="offerta">
            <h5>Offerta</h5>
            <span>Sconto ${gruppiEtà.value}</span>
        </div>

        <div class="carrozza">
            <h5>Carrozza</h5>
        ${randomNumber(0,10)}
        </div>

        <div class="codiceCP">
            <h5>CodiceCP</h5>
            ${randomNumber(90000,100000)}           
        </div>

        <div class="codiceCP">
            <h5>Costo Biglietto</h5>
            ${prezzoPieno}  <span>€</span>       
        </div>

        
    `

    )



}

document.getElementById('cancella').addEventListener('click',annullaBiglietto);

    function annullaBiglietto(){
        document.getElementById('nome').value ='';
        document.getElementById('km').value ='';
        document.getElementById('anni_utente').value ='';


    }



    

  
    //funzione per i numeri casuali
    function randomNumber(min, max) {
        return Math.floor(Math.random() * ( max - min )) + min
    }
