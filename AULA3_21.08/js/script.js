const form = window.document.querySelector("form");

form.addEventListener('submit',function(e){
    let aluno= window.document.querySelector('#aluno');
    let atv1= window.document.querySelector('#atv1');
    let atv2= window.document.querySelector('#atv2');
    let atv3= window.document.querySelector('#atv3');

    const resultados = window.document.querySelector('#resultados');

    e.preventDefault();

    //valeuuu silvio pela ajuda aq :D
    
    aluno = aluno.value;
    atv1= parseInt(atv1.value);
    atv2= parseInt(atv2.value);
    atv3= parseInt (atv3.value);

    if(isNaN(atv1) || isNaN(atv2) || isNaN(atv3)){
        resultados.textContent="Por favor, digite somente números";
    } else if (atv1< 0){
        resultados.textContent= "Por favor, digite um maior ou igual a 0";
    } else if (atv2< 0){
    resultados.textContent ="Por favor, digite um maior ou igual a 0";
    } else if (atv3< 0){
        resultados.textContent ="Por favor, digite um maior ou igual a 0";
    } else{
        media = (atv1 + atv2 + atv3)/3

        if(media < 2){
            window.alert("O aluno "+ aluno +" Foi Reprovado com a média de: "+media);
        } else if (media < 4 && media >= 2){
            window.alert("O aluno "+ aluno +" Ficou de Exame com a média de: "+media);
        } else if (media < 6 && media >= 4){
            window.alert("O aluno "+ aluno +" Ficou de Recuperação com a média de: "+media);
        }else if (media < 8 && media >= 6){
            window.alert("O aluno "+ aluno +" Foi Aprovado na média com a média de: "+media);
        } else if (media >= 8){
            window.alert("O aluno "+ aluno +" Foi Aprovado com Louvor com a média de: "+media);
        }
    }
})
