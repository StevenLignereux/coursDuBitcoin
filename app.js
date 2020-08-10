const url = 'https://blockchain.info/ticker';


function reccupererPrix(){
    let requete =  new XMLHttpRequest();

    requete.open('GET',url);
    requete.responseType = 'json';
    requete.send();


    requete.onload = function () { 

        if (requete.readyState === XMLHttpRequest.DONE) {
            
            if (requete.status === 200) {
                
                let reponse = requete.response;
                let prixEnEuros = reponse.EUR.last;
                
                document.querySelector('#price_label').textContent = prixEnEuros;

            } else {

                alert('Un problème est survenu, merci de revenir plus tard');

            }
        }
    }

    console.log('Prix actualisé');
}

setInterval(reccupererPrix, 1000);