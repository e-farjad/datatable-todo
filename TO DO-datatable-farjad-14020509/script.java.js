
let data;
let currentPage=1;
let firstNumber=0;

function showItems (list){
    for( let i=firstNumber;i<=firstNumber+4;i++) {
        let newRow = document.createElement("tr");

        let newItem = document.createElement("td");
        newItem.innerHTML = list[i].id;
        newRow.append(newItem);

        let titeItem = document.createElement("td");
        titeItem.innerHTML = list[i].title;
        newRow.append(titeItem);

        newItem = document.createElement("td");
        let delete_i = document.createElement("i");
        delete_i.classList.add("material-icons");
        delete_i.innerHTML= "delete_outline";
        newItem.append(delete_i);
        newRow.append(newItem);

        document.querySelector("table").append(newRow);

        // delete function
        delete_i.addEventListener('click',function (e){
            newRow.remove();
        })

        // update function
        titeItem.addEventListener('click',function (e) {
            titeItem.innerHTML= window.prompt("Edite title");
        })
    }
}

function showPage(){
    document.querySelectorAll("TR").forEach(function (e){
        e.remove();
    })
    firstNumber= (currentPage-1)*5;
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) =>
            {
                return  response.json();
            }
        )
        .then(
            function (json) {
                showItems(json);
                data=json;
                console.log(data);
            }
        );

}

showPage();










