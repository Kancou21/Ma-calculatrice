const touche = [...document.querySelectorAll( '.bouton' )];
const listeKeycode = touche.map(touche => touche.dataset.key);
const ecran = document.querySelector( '.ecran' );

 document.addEventListener( 'keydown', ( e ) => {
    const valeur = e.keyboardEvent.key.toString();
    calculer(valeur);
 })

 document.addEventListener( 'click' , (e) => {
    const valeur = e.target.dataset.key;
    console.log(valeur);
    calculer(valeur);
 })

 const calculer = (valeur) => {
    if ( listeKeycode.includes( valeur ) ) {
        switch ( valeur ) {
            case '8' :
                ecran.textContent = '';
                break;
            case '13' :
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default :
                const indexKeycode = listeKeycode.indexOf( valeur );
                const touche = touche[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
     }    
 }
