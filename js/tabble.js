class Table {
    constructor (pirmas, antras, trecias, ketvirtas, penktas, 
        sestas, septintas, astuntas, devintas, desimtas, 
        vienuoliktas, dvyliktas) {
            this.pirmas = pirmas;
            this.antras = antras;
            this.trecias = trecias;
            this.ketvirtas = ketvirtas;
            this.penktas = penktas;
            this.sestas = sestas;
            this.septintas = septintas;
            this.astuntas = astuntas;
            this.devintas = devintas;
            this.desimtas = desimtas;
            this.vienuoliktas = vienuoliktas;
            this.dvyliktas = dvyliktas;

            this.init();
        }
    
        init() {
            this.render();
        
        }

        render() {
            let HTML = '';
            for ( let m=0; m<account.length; m++) {
                const menesiai = account[m];
        
            if (account.month === 1) {    
                HTML += `
                <div class="table-row"
                    <div class="cell">${menesiai.month}</div>
                    <div class="cell">${this.pirmas}</div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">
                    calc(${menesiai.income} - ${menesiai.expense})</div>
                    </div>`;
    
         } 
            if (account.month === 2) {    
                HTML += `
                <div class="table-row"
                    <div class="cell">${menesiai.month}</div>
                    <div class="cell">${this.antras}</div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">
                    calc(${menesiai.income} - ${menesiai.expense})</div>
                    </div>`;
    
        } 
            if (account.month === 3) {    
                HTML += `
                <div class="table-row"
                    <div class="cell">${menesiai.month}</div>
                    <div class="cell">${this.trecias}</div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">
                    calc(${menesiai.income} - ${menesiai.expense})</div>
                    </div>`;
    
        } 
    }
        document.querySelector('.table-content').innerHTML = HTML;

}
}

const lentele = new Table('Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 
'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis');

console.log(lentele);