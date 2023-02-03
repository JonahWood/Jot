import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";



class NotesService {

    createJot(formData) {
let newJot = new Note(formData)
console.log(newJot)
// appState.notes.push(newJot)
appState.notes.push(newJot)
saveState('notes', appState.notes)
appState.emit('notes')
}

updateJot(updatedBody){
let jot = appState.notes
jot.body = updatedBody
saveState('notes', appState.notes)
appState.emit('notes')
}

setActiveJot(jotId){
    let foundJot = appState.notes.find(j => j.id == jotId)
    console.log(foundJot);
    appState.activeJot = foundJot
}
}



export const notesService = new NotesService