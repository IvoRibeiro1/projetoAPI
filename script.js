var select = document.querySelector('select')

var section = document.querySelector('section'); 
//section.style.display = "none";

n = 2022;



    while(n>1999){

        let option = document.createElement('option');

        option.textContent = n

        option.setAttribute('value',n)

        select.appendChild(option)

        n--
    }


select.addEventListener('change', pedirFormula);

function pedirFormula() {


    console.log(this.value)

    let ano = this.value;

    let urlDrivers = `http://ergast.com/api/f1/${ano}/drivers.json`;

    pedido_GET(urlDrivers,mostrarDrivers)

}

function mostrarDrivers(){

   let objeto = JSON.parse(this.responseText);

   console.log(objeto) 

   let info = objeto.MRData.DriverTable.Drivers

    let i = 0;

   var section = document.querySelector(".section")

   // Limpar o conteúdo do section
   section.innerHTML = '';

    for(const item of info ){

        const br = document.createElement('br')
       

        const divdrivers = document.createElement('div')

        const primeiroNome = document.createElement('p')
        const ultimoNome = document.createElement('p')
        const data = document.createElement('p')
        const nacionalidade = document.createElement('p')

        const conteudo = document.querySelector('.content')

        section.appendChild(divdrivers)

        divdrivers.appendChild(primeiroNome)
        //divdrivers.appendChild(br)

        divdrivers.appendChild(ultimoNome)
        //divdrivers.appendChild(br1)

        divdrivers.appendChild(data)
        //divdrivers.appendChild(br2)

        divdrivers.appendChild(nacionalidade)

        divdrivers.appendChild(br)
        
        primeiroNome.textContent = item.givenName
        ultimoNome.textContent = item.familyName
        data.textContent = item.dateOfBirth
        nacionalidade.textContent = item.nationality

        //section.style.display = "flex";

        divdrivers.style.margin = "50px"
         //primeiroNome.style.width = "200px"
       
         divdrivers.setAttribute('id',item.driverId)

    }

}

divdrivers.addEventListener('click',maisInfo)

function maisInfo(){




}

function pedido_GET( url, callback ) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url );
    xhr.addEventListener('load', callback );
    xhr.send();
}