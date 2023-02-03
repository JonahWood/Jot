import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Note{
constructor(data) {
    this.id = generateId()
    this.title = data.title || 'New Jot'
    this.body = data.body
    this.date = data.date || new Date().toLocaleTimeString('en-US')
    this.color = data.color
}

get newJotTemp() {
    return `
    
    `
}


get jotTemp() {
    return `
    <div class="col-7 jot-cont rounded m-auto mt-5 p-2">
            <h1>
                <span>${this.title}</span>
            </h1>
            <div class="mb-3 d-flex justify-content-between">
            </div>
            <h3>${this.date}</h3>
            <h1>
            <textarea name="body" id="jotTemp" onblur="app.caseFilesController.updateJot()" class="jot-body">
            ${this.body}
            </textarea>
            </h1>
            <button class="save-button bg-gradient"><h3>SAVE</h3></button>
            </div>
    `
}
}
