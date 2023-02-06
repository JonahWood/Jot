import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";

function save() {
    saveState('notes', appState.notes)
}

class NotesService {


    deleteJot(jotId) {
        let jotIndex = appState.notes.findIndex(c => c.id == jotId)
    
        if (jotIndex == -1) {
        throw new Error('Impossible Jot Id')
        }
    
        appState.notes.splice(jotIndex, 1)
        saveState('notes', appState.notes)
        appState.emit('notes')
    }


    // removeJot(jotId) {
    //     thisJot = appState.notes.foreach(v => v.jotId == jotId)
    //     thisJot = 0
    //     save()
    // }
    
    createJot(formData) {
let newJot = new Note(formData)
console.log(newJot)
// appState.notes.push(newJot)
appState.notes.push(newJot)
saveState('notes', appState.notes)
appState.emit('notes')
}

setActiveJot(jotId) {
    let foundJot = appState.notes.find(j => j.id == jotId)
    console.log(foundJot);
    appState.activeJot = foundJot
}

updateJot(updatedBody) {
    let activeJot = appState.activeJot
    activeJot.body = updatedBody
    saveState('notes', appState.notes)
    console.log(appState.notes);
    appState.emit('activeJot')
}




// updateJot(updatedBody){
// let jot = appState.notes
// jot.body = updatedBody
// // appState.jot.push(updatedBody)
// saveState('notes', appState.notes)
// appState.emit('notes')
// }

// setActiveJot(jotId){
//     let foundJot = appState.notes.find(j => j.id == jotId)
//     console.log(foundJot);
//     appState.activeJot = foundJot
// }
}



export const notesService = new NotesService