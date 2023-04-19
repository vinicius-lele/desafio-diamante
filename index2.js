let opcao = document.getElementById('select_diamante');
let div = document.getElementById("mostra_diamante");
let emBranco = '&nbsp&nbsp&nbsp';
let diamante = [];
let meioDiamante;
let texto = '';

geraSelect()

function mostrarDiamanteCima(valor){
    
    for(let i=0;i<meioDiamante;i++)
    {   
        for(let j=0;j<valor;j++){
            
            if(meioDiamante-1 == j)
            { 
                diamante[j-i] = String.fromCharCode(i+65);
                diamante[j+i] = String.fromCharCode(i+65);
            }           
        }
        texto+=diamante.join('')+'<br>';
        diamante.fill(emBranco)
            
    }
    

    for(i=opcao.value-1;i>=1;i--)
    { 
        for(j=0;j<=valor;j++)
            {
                if(meioDiamante-1 == j)
            { 
                diamante[(j-i)+1] = String.fromCharCode(i+64);
                diamante[(j+i)-1] = String.fromCharCode(i+64);
            }
            }
            texto+=diamante.join('')+'<br>';
            diamante.fill(emBranco)
    }
    return div.innerHTML=texto;
     
}

function geraSelect(){
    for(let i = 1;i<=26;i++){
        let opc = document.createElement('option');
        opc.value = i;
        opc.innerHTML = String.fromCharCode(i+64);
        opcao.appendChild(opc)
    }
}

opcao.addEventListener("change", () => {
    texto = '';
    div.style.display = "block";
    diamante.length = (opcao.value*2)-1;
    diamante.fill(emBranco)
    meioDiamante=Math.ceil(diamante.length/2)
    mostrarDiamanteCima(diamante.length);
})
