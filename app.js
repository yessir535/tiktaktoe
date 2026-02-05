var licznik = 1;

function generuj(id) {
  if (id == "div1") {
    if (document.getElementById("div1").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div1").innerHTML = licznik;

    document.getElementById("div1").style.backgroundColor = "gray";

    licznik++;
  }
    if(id=="jeden"){
        document.getElementById("jeden").innerHTML = licznik
        document.getElementById("jeden").style.backgroundColor = "red"
    }
  if (id == "div2") {
    if (document.getElementById("div2").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div2").innerHTML = licznik;
    document.getElementById("div2").style.backgroundColor = "gray";

    licznik++;
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
  if (id == "dwa") {
    document.getElementById("dwa").innerHTML = licznik;
  }

  if (id == "div3") {
    if (document.getElementById("div3").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div3").innerHTML = licznik;

    document.getElementById("div3").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div4") {
    if (document.getElementById("div4").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div4").innerHTML = licznik;
    document.getElementById("div4").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div5") {
    if (document.getElementById("div5").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div5").innerHTML = licznik;

    document.getElementById("div5").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div6") {
    if (document.getElementById("div6").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div6").innerHTML = licznik;

    document.getElementById("div6").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div7") {
    if (document.getElementById("div7").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div7").innerHTML = licznik;

    document.getElementById("div7").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div8") {
    if (document.getElementById("div8").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div8").innerHTML = licznik;

    document.getElementById("div8").style.backgroundColor = "gray";

    licznik++;
  }

  if (id == "div9") {
    if (document.getElementById("div9").style.backgroundColor === "gray") {
      return;
    }

    document.getElementById("div9").innerHTML = licznik;

    document.getElementById("div9").style.backgroundColor = "gray";

    licznik++;
  }
}
