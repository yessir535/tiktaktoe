var licznik = 1

function generuj(id){

    if(id=="jeden"){
        document.getElementById("jeden").innerHTML = licznik
        document.getElementById("jeden").style.backgroundColor = "red"
    }

    if(id=="dwa"){
        document.getElementById("dwa").innerHTML = licznik
        document.getElementById("dwa").style.backgroundColor = "purple"
    }

    if(id=="trzy"){
        document.getElementById("trzy").innerHTML = licznik
        document.getElementById("trzy").style.backgroundColor = "green"
    }

    if(id=="cztery"){
        document.getElementById("cztery").innerHTML = licznik
        document.getElementById("cztery").style.backgroundColor = "yellow"
    }

    if(id=="piec"){
        document.getElementById("piec").innerHTML = licznik
        document.getElementById("piec").style.backgroundColor = "blue"
    }

    if(id=="szesc"){
        document.getElementById("szesc").innerHTML = licznik
        document.getElementById("szesc").style.backgroundColor = "lightgreen"
    }

    if(id=="siedem"){
        document.getElementById("siedem").innerHTML = licznik
        document.getElementById("siedem").style.backgroundColor = "gray"
    }
    
    if(id=="osiem"){
        document.getElementById("osiem").innerHTML = licznik
        document.getElementById("osiem").style.backgroundColor = "lightgray"
    }

    if(id=="dziewiec"){
        document.getElementById("dziewiec").innerHTML = licznik
        document.getElementById("dziewiec").style.backgroundColor = "lightblue"
    }

    if(id=="jeden"){
        return
    }

    if(id=="dwa"){
        document.getElementById("dwa").innerHTML = licznik + 1
        if(id=="jeden"){
            return
        }
    }


    licznik++
}