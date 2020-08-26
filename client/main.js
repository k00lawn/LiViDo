function pasteLink() {
    var postLink =  document.querySelector('.video-input').value
    var dLink = document.getElementById('dlLink');
    fetch('http://localhost:3000/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({postLink})
    }).then(function (response) {
        return response.text()
    }).then(function (data) {
        dLink.href = data  
        dLink.style.visibility = 'visible'
    })
}