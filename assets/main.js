
document.getElementById('genera_ticket_click').addEventListener('click',generaTicket);

    function generaTicket(event){
    event.preventDefault();
    var nomeEl = document.getElementById('nome');
  
    var kmEl = document.getElementById('km');
  
    var gruppiEtà = document.getElementById('anni');
    
    var prezzoPieno = kmEl.value * 0.21;
    var bigliettoEL = document.querySelector('.stampa_biglietto');
   


    //sconto 20%minorenne
    if(gruppiEtà.value =='minorenne'){
        prezzoPieno -= prezzoPieno * 0.2;
        

    //sconto 40% over65
    }else if(gruppiEtà.value =='over65'){
        prezzoPieno -= prezzoPieno * 0.4;
        
    }

    



    bigliettoEL.insertAdjacentHTML('beforeend',
    `
    <h3>DETTAGLIO PASSEGGERI</h3>
    <div class="passeggero">
        <div class="nome_passeggero">
            <h5>Nome <br> passeggero</h5>  
            <span>${nomeEl.value}</span>
        </div>    
        

        <div class="card">
            <h5>Offerta</h5>
            <span>Sconto ${gruppiEtà.value}</span>
        </div>

        <div class="card">
            <h5>Carrozza</h5>
        <span>${randomNumber(1,10)}</span>
        </div>

        <div class="card">
            <h5>CodiceCP</h5>
               <span> ${randomNumber(90000,100000)} </span>  
        </div>

        <div class="card">
            <h5>Costo Biglietto</h5>
              <span>${prezzoPieno.toFixed(2)}€</span>       
        </div>
    </div>
        
    `

    )



}

//funzione che annulla i dati inseriti
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
