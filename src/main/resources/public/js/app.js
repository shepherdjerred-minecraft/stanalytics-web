var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('navigation', {
    template: "<h1>Navigation</h1>"
});