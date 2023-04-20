let opcaoSelectDiamante = document.getElementById('select-diamante');
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
        preencheDiamante()    
    }
    
    for(i= opcaoSelectDiamante.value -1;i>=1;i--)
    { 
        for(j=0;j<=valor;j++)
            {
                if(meioDiamante-1 == j)
                { 
                    diamante[(j-i)+1] = geraCharCode(i);
                    diamante[(j+i)-1] = geraCharCode(i);
                }
            }
            preencheDiamante()  
    }
    return divMostraDiamante.innerHTML=texto;  
}

function geraCharCode(indice){
    let charCode = String.fromCharCode(64+indice);
    return charCode;
}

function preencheDiamante(){
    texto+=diamante.join('')+'<br>';
    diamante.fill(emBranco); 
}

function geraSelect(){
    let totalLetrasNoAlfabeto = 26;
    for(let i = 1;i<=totalLetrasNoAlfabeto;i++){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = geraCharCode(i);
        opcaoSelectDiamante.appendChild(option);
    }
}

opcaoSelectDiamante.addEventListener('change', () => {
    texto = '';
    divMostraDiamante.style.display = 'block';
    diamante.length = (opcaoSelectDiamante.value*2)-1;
    diamante.fill(emBranco);
    meioDiamante=Math.ceil(diamante.length/2);
    mostrarDiamante(diamante.length);
})
