

window.onload = script

function script()
{
    document.querySelector(".classes-to-add").onblur = e=>{
        let addstr = e.target.value.toLowerCase()
        if(addstr === "")
        return
        addstr = addstr.split(" ")
        addstr.forEach(str=>{
            document.querySelector('[title="Current"]').classList.add(str)
        })
        e.target.value = ""
        // document.querySelector('[title="Current"]').classList.add(e.target.value.toLowerCase())
    }
    document.querySelector(".classes-to-remove").onblur = e=>{
        let addstr = e.target.value.toLowerCase()
        if(addstr === "")
        return
        addstr = addstr.split(" ")
        addstr.forEach(str=>{
            document.querySelector('[title="Current"]').classList.remove(str)
        })
        e.target.value = ""
        // document.querySelector('[title="Current"]').classList.remove(e.target.value.toLowerCase())
    }
    function spanning() {
        let sorted = document.querySelector('[title="Current"]').classList.toString().split(" ").toSorted()
        let sdva = document.createElement("div")
        sdva.id = "dispalyer"
        if(document.querySelector("#dispalyer"))
        document.querySelector("#dispalyer").remove()
        document.querySelector(".classes-list div").append(sdva)
        sorted.forEach((e,i,ar)=>{
            if(ar.length === 1 && e === "")
            {
                sdva.textContent = "no class found"
                return
            }
            let spa = document.createElement("span")
            spa.textContent = e
            document.querySelector("#dispalyer").append(spa)
        })
        
    }
    spanning()
    document.querySelectorAll("input").forEach(e=>e.addEventListener("blur", spanning))
}



// let spa = document.createElement("span")
//         spa.textContent = e.target.value.toLowerCase()
//         document.querySelector(".classes-list div").append(spa)