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
        addNewNote() {
            if(this.inputValue !== '') this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        dblCountComputed() {
            console.log('dblCountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) this.inputValue = ''
            console.log('Input Value Changed', value)
        }
    }
}
// первый спопоб
/*const app = Vue.createApp(App)
app.mount('#app')*/
// второй спопоб
Vue.createApp(App).mount('#app')