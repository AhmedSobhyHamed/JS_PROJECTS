
function main () {
    let font  = document.getElementById("fontsList")
    let size  = document.getElementById("sizeList")
    let color = document.getElementById("colorList")
    font.onchange = getvalue
    size.onchange = getvalue
    color.onchange = getvalue
    for(let i=0 ; i<window.localStorage.length; i++)
        divchange(window.localStorage.key(i),window.localStorage.getItem(window.localStorage.key(i)))
    document.querySelector("article").onblur =_=>window.localStorage.setItem("divContent",document.querySelector("article").textContent)
    if(window.localStorage.length === 0){
        font.dispatchEvent(new Event("change"))
        color.dispatchEvent(new Event("change"))
        size.dispatchEvent(new Event("change"))
    }
}

function getvalue(){
    let val = this.value
    let key = this.name
    // store it
    window.localStorage.setItem(key,val)
    // cange style
    divchange(key,val)
}

function divchange(key, val) {
    if(key === "fontsList") {
        document.querySelector("article").style.fontFamily = `'${val}', sans-serif`
    }
    if(key === "sizeList") {
        document.querySelector("article").style.fontSize = `${val}px`
    }
    if(key === "colorList") {
        document.querySelector("article").style.color = `${val}`
    }
    if(key === "divContent") {
        document.querySelector("article").append(`${val}`)
    }
}

window.onload = main
