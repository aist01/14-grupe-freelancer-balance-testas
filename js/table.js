"use strict";

const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 
                    'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];

    
 console.log(menesiai);
 
 function renderT (data){
    let HTML = '';
    for ( let i=0; i<menesiai.length; i++) {
        const lentele = menesiai[i];
   
        for ( let m=0; m<account.length; m++) {
        
            HTML += `<div class="table-row"
                <div class="cell">${account.month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">
                ${account.income} - ${account.expences}</div>
                </div>`;

                
                document.querySelector('.table-content').innerHTML = HTML;
                
   }
 
       
    console.log(HTML);   
    
    }
 return HTML;
       
   }


  