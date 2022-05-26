document.getElementById("one").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "information.json", true);
    xhr.onload = function () {
        let arr = JSON.parse(this.responseText);
        let html = "";
        for (key in arr) {
            html += `
            <tr>
                <td>${arr[key].firstName}</td>
                <td>${arr[key].lastName}</td>
                <td>${arr[key].age}</td>
            </tr>
            `;
            if (key == 0) break;

        }
        console.log(html);
        document.getElementById("sun").innerHTML = html;
    }
    xhr.send();

});

document.getElementById("all").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8089/api/v1/users", true);
    xhr.onload = function () {
        let arr = JSON.parse(this.responseText);
        let html = "";
        console.log(arr.object[0].firstName);
        for (var i=0; i<arr.object.length;i++) {
            html += `
            <tr>
                <td>${arr.object[i].firstName}</td>
                <td>${arr.object[i].lastName}</td>
                <td>${arr.object[i].age}</td>
            </tr>
            `;
        }
        // console.log(arr);
        document.getElementById("sun").innerHTML = html;
    }
    xhr.send();

});