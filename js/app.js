let app = new Vue({
    //bind the div wih id #app
    el: '#app', 
    data: {
       pageTitle: 'My first Vue page!',
       date: `Today is ${new Date().toLocaleDateString()}`,
       rawHtml: '<strong>This is bold!</strong>',
       newsSite: 'https://www.hln.be',
       newsSiteName: 'Hln',
    },
});
