function gerar(){
    
    let numero = document.querySelector('#numero')
    let resultado = document.querySelector('#resultado')
   
    if( numero.value.length == 0){

        alert('Por favor, digite um número inteiro.')

    }else{

        numero = parseInt(numero.value)
        resultado.innerHTML =''

        for(let c = 0; c <= 10; c++){
            
        
            resultado.innerHTML += `
            <table>
                <tbody>
                    <tr>
                        <td>${numero} x ${c} = </td>
                        <td>${numero * c}</td> 
                    </tr>
                </tbody>
            </table>
            `
        }

    }   

}