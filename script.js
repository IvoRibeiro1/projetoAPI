var select = document.querySelector('select')

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

    let urlDrivers = 'http://ergast.com/api/f1/${ano}/drivers.json'

    pedido_GET(urlDrivers,mostrarDrivers)

}

function mostrarDrivers(){

    section.style.display = "flex";


}