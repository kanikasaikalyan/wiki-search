let user_input = document.getElementById("searchInput");
let container = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createall(t) {
    let {
        link,
        title,
        description
    } = t;
    console.log(link);
    console.log(title);
    console.log(description);

    let res_ele = document.createElement("div");
    res_ele.classList.add('result-item');

    let tit = document.createElement("a");
    tit.classList.add("result-title");
    tit.href = link;
    tit.target = "_blank";
    tit.textContent = title;
    res_ele.appendChild(tit);

    let br1 = document.createElement("br");
    res_ele.appendChild(br1);
    let url_ele = document.createElement("a");
    url_ele.classList.add("result-url");
    url_ele.href = link;
    url_ele.textContent = link;
    url_ele.target = "_blank";
    res_ele.appendChild(url_ele);

    let br2 = document.createElement("br");
    res_ele.appendChild(br2);

    let des = document.createElement("p");
    des.classList.add("link-description");
    des.textContent = description;
    res_ele.appendChild(des);

    container.appendChild(res_ele);
}

function displayRes(search_results) {
    spinner.classList.add("d-none");
    console.log(search_results);
    user_input.value = "";
    for (let t of search_results) {
        createall(t);
    }
}

function res(event) {
    if (event.key === 'Enter') {
        // let ind=document.querySelector(".unhg");
        spinner.classList.remove("d-none");
        container.textContent = "";



        let url = 'https://apis.ccbp.in/wiki-search?search=' + user_input.value;
        console.log(url);
        let op = {
            method: 'GET'
        };
        fetch(url, op).then(function(response) {
            return response.json();
        }).then(function(d) {
            let search_results = d.search_results;
            console.log(d);
            console.log(search_results);
            displayRes(search_results);

        });

    }
}

user_input.addEventListener('keydown', res);