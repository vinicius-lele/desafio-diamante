let opcao = document.getElementById('select_diamante');
let div = document.getElementById("mostra_diamante");
let letra = ['A','B','C','D','E','F','G','H','&nbspI','J','L','M','N','O','P','Q','R','S','T','U','V','X','Z'];
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
                diamante[j-i] = letra[i];
                diamante[j+i] = letra[i];
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
                diamante[(j-i)+1] = letra[i-1];
                diamante[(j+i)-1] = letra[i-1];
            }
            }
            texto+=diamante.join('')+'<br>';
            diamante.fill(emBranco)
    }
    return div.innerHTML=texto;
     
}

function geraSelect(){
    for(let i = 1;i<=23;i++){
        let opc = document.createElement('option');
        opc.value = i;
        opc.innerHTML = letra[i-1];
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
