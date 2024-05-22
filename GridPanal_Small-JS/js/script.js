

function create(name,...content) {
    let doc = document.createElement(name)
    for(let i=0 ; i<content.length ; i++)
    {
        doc.append(content[i])
    }
    return doc
}


window.onload = main

function main() {
    document.body.append(create("nav",create("div","Logo"),create("ul",create("li","Home"),create("li","About"),create("li","Service"),create("li","contact"))))
    let doc = document.createElement("section")
    for(let i=0 ; i<15 ; i++)
    {
        doc.append(create("div",create("h1",i),create("p","product")))
    }
    document.body.append(doc)
    document.body.append(create("footer","copyRight&cp;"))

    document.querySelector("section").style.display = "grid"
    document.querySelector("section").style.gridTemplateColumns="1fr 1fr 1fr"
    document.querySelector("section").style.gap = "15px 15px"
    document.querySelector("section").style.backgroundColor = "#eee"
    document.querySelector("section").style.padding = "10px 50px"
    
    document.querySelectorAll("section div").forEach(e=>{
        e.style.backgroundColor = "#98e"
        e.style.textAlign = "center"
    })
    
    document.querySelector("nav").style.display = "flex"
    document.querySelector("nav").style.justifyContent = "space-between"
    document.querySelector("nav").style.padding = "5px 50px"
    document.querySelector("nav ul").style.listStyleType = "none"
    document.querySelector("nav ul").style.padding = "0"
    document.querySelector("nav ul").style.display = "flex"
    document.querySelector("nav ul li").style.flexBasis = "25px"
    document.querySelector("nav ul").style.gap = "10px"

    document.querySelector("footer").style.padding = "25px"
    document.querySelector("footer").style.textAlign = "center"
    document.querySelector("footer").style.backgroundColor = "#6e8"
    document.querySelector("footer").classList.add("footer")
    // document.querySelector("footer").style.margin = "0 50px"
}


