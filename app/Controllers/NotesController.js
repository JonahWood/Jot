import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js"
import { Pop } from "../Utils/Pop.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
import { saveState } from "../Utils/Store.js";

function _drawJots(){
    let note = appState.notes
    let template = ''
    note.forEach(j => template += j.jotsTemp)
    setHTML('jots', template)
}

function _drawJot() {
    let notes = appState.activeJot
    setHTML('current-jot', notes.jotTemp)
}

// function _drawActiveJot(){
//     let note = appState.notes
//     let template = ''
//     // template += ''
//     note.forEach(a => template += a.jotTemp)
//     setHTML('activeJot', template)
// }
export class NotesController {
    constructor(){
        console.log('hello from the controller');
        _drawJots()
        appState.on('notes', _drawJots)
        appState.on('activeJot', _drawJot)
    }


    setActiveJot(jotId) {
        try {
        notesService.setActiveJot(jotId)
        } catch (error) {
        console.error(error)
        Pop.error(error.message)
        }
    }

    updateJot(){
        try {
        let textArea = document.getElementById('banana')
        let updatedBody = textArea.value
        console.log('it saved the following from the text area:', updatedBody);
        notesService.updateJot(updatedBody)
        } catch (error) {
        console.error(error)
        Pop.error(error.message)
    }}

    async deleteJot(jotId) {
        try {
        const yes = await Pop.confirm('Are you sure you want to delete this Jot?')
        if (!yes) { return } 
    
    notesService.deleteJot(jotId)
        } catch (error) {
        Pop.error(error)
        }
    }



    // async removeJot(jotId) {
    //     const yes = await Pop.confirm('Remove Jot')
    //     if (yes) {
    //     notesService.removeJot(jotId)
    //     }
    // }


    
    
    
    // setActiveJot(jotId){
    // try {
    //     notesService.setActiveJot(jotId)
    // } catch (error) {
    //     console.error(error)
    //     Pop.error(error.message)
    // }
    // }

// drawActiveJot(){
//     _drawActiveJot()
// }

// updateJot(){
//     try {
//         let textArea = document.getElementById('banana')
//         let updatedBody = textArea.value
//         console.log('it saved the following from the body:', updatedBody);
//         appState.jot.push(updatedBody)
//         notesService.updateJot(updatedBody)
//         saveState('banana', updatedBody)
//     } catch (error) {
//         console.log(error)
//         Pop.error(error)
//     }

// }

    createJot(){
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData)
            notesService.createJot(formData)
            form.reset()
            // Pop.success()
        } catch (error) {
            Pop.error(error)
        }
    }
}