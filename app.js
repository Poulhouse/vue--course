const App = {
    //метод data
    data() {
        //возвращаемый объект
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', "Заметка 3"]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value

        },
        addNewNote() {
            if(this.inputValue !== '') this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    }
}
// первый спопоб
/*const app = Vue.createApp(App)
app.mount('#app')*/
// второй спопоб
Vue.createApp(App).mount('#app')