
function apiCheck(url) {

    //call fetch
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
}

module.exports = apiCheck;