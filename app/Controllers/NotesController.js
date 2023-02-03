import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js"
import { Pop } from "../Utils/Pop.js";
import { getFormData } from "../Utils/FormHandler.js";



export class NotesController {
    constructor(){
        console.log('hello from the controller');
    }

    createJot(){
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData)
            notesService.createJot(formData)
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }
}