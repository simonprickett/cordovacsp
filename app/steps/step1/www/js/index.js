var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        var initElement = document.getElementById('initializing');
        var resultsElement = document.getElementById('results');
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        };

        xhr.open('GET', 'http://coinabul.com/api.php' , true);
        xhr.send();

        // initElement.setAttribute('style', 'display:none;');
        // resultsElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();