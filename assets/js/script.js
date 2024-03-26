const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue! :)',
            image: 'assets/img/vuejs.jpg',
            centered: 'text-center'
        };
    }
}).mount('#app');