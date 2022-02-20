const App = {
    //метод data
    data() {
        //возвращаемый объект
        return {
            title: 'Список заметок'
        }
    }
}
// первый спопоб
/*const app = Vue.createApp(App)
app.mount('#app')*/
// второй спопоб
Vue.createApp(App).mount('#app')