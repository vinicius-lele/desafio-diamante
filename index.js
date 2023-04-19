let opcao_select_diamante = document.getElementById('select-diamante');
let divMostraDiamante = document.getElementById('mostra-diamante');
let emBranco = '&nbsp'.repeat(3);
let diamante = [];
let meioDiamante;
let texto = '';

geraSelect();

function mostrarDiamante(valor){
    
    for(let i=0;i<meioDiamante;i++)
    {   
        for(let j=0;j<valor;j++){
            
            if(meioDiamante-1 == j)
            { 
                let charCode = String.fromCharCode(i+65);
                diamante[j-i] = charCode
                diamante[j+i] = charCode
            }           
        }
        texto+=diamante.join('')+'<br>';
        diamante.fill(emBranco);      
    }
    
    for(i= opcao_select_diamante.value -1;i>=1;i--)
    { 
        for(j=0;j<=valor;j++)
            {
                if(meioDiamante-1 == j)
                { 
                    let charCode = String.fromCharCode(i+64);
                    diamante[(j-i)+1] = charCode;
                    diamante[(j+i)-1] = charCode;
                }
            }
        texto+=diamante.join('')+'<br>';
        diamante.fill(emBranco);
    }
    return divMostraDiamante.innerHTML=texto;  
}

function geraSelect(){
    for(let i = 1;i<=26;i++){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = String.fromCharCode(i+64);
        opcao_select_diamante.appendChild(option);
    }
}

opcao_select_diamante.addEventListener('change', () => {
    texto = '';
    divMostraDiamante.style.display = 'block';
    diamante.length = (opcao_select_diamante.value*2)-1;
    diamante.fill(emBranco);
    meioDiamante=Math.ceil(diamante.length/2);
    mostrarDiamante(diamante.length);
})
