const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue! :)',
            image: 'assets/img/vuejs.jpg',
        };
    }
}).mount('#app');