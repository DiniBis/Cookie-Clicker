let compteurCookie = 0
let modificateur = 1
let coutModificateur = 20
let autoplay=false

//Au click du cookie
const monCookie = document.getElementById('cookie')
monCookie.addEventListener('click', () =>  {
    //Ajout de cookies
    compteurCookie+=1*modificateur
    //mise à jour de l'affichage du compteur
    const execution = document.getElementById('compteur')
    execution.textContent="Compteur de Cookie: "+compteurCookie.toFixed(0)
})


//Au click de l'amelioration:
const boutonAmelioration = document.getElementById('amelioration')
boutonAmelioration.addEventListener('click', () =>  {
    //Si le Coût est inférieur au compteur de cookie:
    if (coutModificateur < compteurCookie){
        //-> Compteur -= Coût
        compteurCookie-=coutModificateur
        //-> Ajout de l'amelioration au modificateur
        modificateur+=1
        coutModificateur*=1.2
        //Mise à jour du compteur dans l'html
        const execution = document.getElementById('compteur')
        execution.textContent="Compteur de Cookie: "+compteurCookie.toFixed(0)
        //Mise à jour du cout dans l'html
        const execution2 = document.getElementById('cout')
        execution2.textContent="Cout de l'amelioration: "+coutModificateur.toFixed(0)
    }
})    


//Autoplay
setInterval(() => {
    if (autoplay == true) {
        compteurCookie+=modificateur
        const execution = document.getElementById('compteur')
        execution.textContent="Compteur de Cookie: "+compteurCookie.toFixed(0)
        if (coutModificateur < compteurCookie){
            //-> Compteur -= Coût
            compteurCookie-=coutModificateur
            //-> Ajout de l'amelioration au modificateur
            modificateur+=1
            coutModificateur*=1.2
            //Mise à jour du compteur dans l'html
            const execution = document.getElementById('compteur')
            execution.textContent="Compteur de Cookie: "+compteurCookie.toFixed(0)
            //Mise à jour du cout dans l'html
            const execution2 = document.getElementById('cout')
            execution2.textContent="Cout de l'amelioration: "+coutModificateur.toFixed(0)
        }
    }
},1) //Autoclick toutes les 1s

//Autoclick ON/OFF
const boutonAuto = document.getElementById('autoplay')
boutonAuto.addEventListener('click', () =>  {
    //Autoclick devient ON si OFF
    if (autoplay==false){
        autoplay=true
    } else { //Autoclick devient OFF si ON
        autoplay=false
    }
})