const onglet = document.getElementsByClassName("onglet")
let i 
for (i = 0; i < onglet.length; i++) {
    onglet[i].addEventListener("click", function (){
        this.classList.toggle("active");
        const collapse = this.nextElementSibling;
        
        // défini la propriété maxHeight de collapse
        if (collapse.style.maxHeight) {
            collapse.style.maxHeight = null;
        }else{
            // le 1er récupère la hauteur maximale de collapse
            // le deuxième défini la hauteur qu'à besoin collapse pour apparaitre
            // scrollHeight est égale à la hauteur minimum dont l'élément aurait 
            // besoin pour que le contenu rentre dans le viewpoint sans utiliser de 
            // barre de défilement. Cela inclut les marges internes mais pas les marges externes.
            collapse.style.maxHeight = collapse.scrollHeight + "px";
            
        }
    });
}

const arrow = document.getElementsByClassName("arrow");


 onglet.addEventListener("click", function(){
    arrow.classList.add("rotate");
         
}) 