document.getElementById("all").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhr.onload = function () {
        let arr = JSON.parse(this.responseText);
        let html = "";
        console.log(arr)
        for (key in arr) {
            if (key < 42) {
                html += `
            <div id="card">
                <div id="name">${arr[key].title}</div>
                <img src="${arr[key].thumbnailUrl}" alt="">
            </div>
            `;
            }
            else {
                break;
            }
        }
        console.log(html);
        document.getElementById("cards").innerHTML = html;
    }
    xhr.send();

});