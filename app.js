const App = {
    //метод data
    data() {
        //возвращаемый объект
        return {
            counter: 0,
            title: 'Счётчик'
        }
    }
}
// первый спопоб
/*const app = Vue.createApp(App)
app.mount('#app')*/
// второй спопоб
Vue.createApp(App).mount('#app')