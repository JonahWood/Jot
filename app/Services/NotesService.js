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
}



export const notesService = new NotesService