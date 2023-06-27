function menubar(){
    var bar = document.getElementById('bars')
    var items = document.getElementById('items')
    var sect = document.querySelector('.titulo')
    if(items.style.display == 'block'){
         sect.style.display == 'none'
        items.style.display = 'none'
        bar.innerHTML = ' <i class="fa-solid fa-bars"></i>'
       
    }else{
        items.style.display = 'block' 
        bar.innerHTML = '<i class="fa-solid fa-arrow-right fa-rotate-180"></i>'
    }
}

function idiomaClose(){
    var pt = document.querySelector('#idioma')
    var clos = document.getElementById('close')
    if(clos = pt){
        pt.style.display = 'none'
    }
} 