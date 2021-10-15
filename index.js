let twelogo = document.getElementById('twelogo');
let fol = document.getElementById('followus');

fol.addEventListener('mouseover',folanimate);

function folanimate(){
    fol.classList.add('folanimate');
    twelogo.classList.add('tweanimate');

    setTimeout((function()){
        fol.classList.remove('folanimate');
        twelogo.classList.remove('tweanimate');
    }, 6000);
}