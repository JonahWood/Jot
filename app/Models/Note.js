import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Note{
jot = 0

constructor(data) {
    this.id = generateId()
    this.title = data.title || 'New Jot'
    this.body = data.body || ''
    this.date = data.date || new Date().toLocaleDateString('en-US')
    this.time = data.time || new Date().toLocaleTimeString('en-US')
    this.color = data.color
    // this.here = data.here || true
}



get jotsTemp() {
    return `
<div class="m-3 border-light border-top">
    <h3><div>${this.title}</div></h3>
    <div>${this.date} ${this.time}</div>
    <button class="open-button" onclick="app.notesController.setActiveJot('${this.id}')">open</button>
    </div>
    `
}


get newJotTemp(){
    return `
    
    `
}

get jotTemp() {
    return `
    <div class="col-7 jot-cont rounded m-auto mt-5 p-2">
            <h1 class="color-picker-${this.color}">
                ${this.title}
                <button class="btn btn-danger square-top" onclick="app.notesController.deleteJot('${this.id}')">🗑️</button>
            </h1>
            <div class="mb-3 d-flex justify-content-between">
            </div>
            <h3 class="text-light">${this.date} ${this.time}</h3>
            <h1>
            <textarea name="body" id="banana" onblur="app.notesController.updateJot()" class="jot-body">
            ${this.body}
            </textarea>
            </h1>
            <button class="save-button bg-gradient text-light"><h3>SAVE</h3></button>
            </div>
    `
}
}
