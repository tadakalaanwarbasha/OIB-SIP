let container = document.querySelector(".container")
        let outputdata = document.getElementById("outputdata");
        let dltbtn = document.getElementById("delete");
        let editbtn = document.getElementById("edit");
        let addbtn = document.getElementById("add");
        addbtn.addEventListener('click', e => {
            let x = addbtn.previousElementSibling.value
            let createElement = document.createElement("div")
            container.appendChild(createElement)
            createElement.classList.add("style")
            createElement.innerHTML = `<p class="chaptername">${x}</p>
            <button id="edit" onclick="editchapter(this)">Edit</button>
        <button id="delete" onclick="remove(this)">Delete</button>`
