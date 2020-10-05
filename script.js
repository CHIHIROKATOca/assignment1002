onload =function() {
    //First Step
    const fname = document.querySelector('#fname-input');
    const lname = document.querySelector('#lname-input');
    const email = document.querySelector('#email-input');
    const date = document.querySelector('#date-input');
    const city = document.querySelector('#city-input');
    const avalibalitiy = document.querySelector("#my-select");
    const address = document.querySelector('#address-input');
    const submit = document.querySelector('#btn-submit');
    const show = document.querySelector('#btn-show');
    const divTable = document.querySelector('#table');
    const table = document.createElement('table');

    let employees = []
    let avalibalities = [];

    avalibalitiy.addEventListener("change", ()=>{
        avalibalities.push(avalibalitiy.value);
        console.log(avalibalities);
    })

    //１・Employeeの設定
    function addEmployee (e) {
        e.preventDefault();

       let newEmployee = {
           id : `${new Date().getTime()}${randomNumber()}`,
           fname:fname.value,
           lname:lname.value,
           email:email.value,
           date:date.value.replaceAll('-', '/'),
           city:city.value,
           postalcode:address.value,
           avalibalitiy:avalibalities
       }

       //add this object to array
       employees.push(newEmployee);
       document.querySelector('form').reset();
       avalibalities = [];
    }

    function showEmployees () {
        divTable.innerHTML = '';
        if (employees.length > 0) {
            displayHeaderTable();
            displayBodyTable();
        }
        else {
            const p = document.createElement('p');
            p.classList.add("text-danger");
            p.textContent = "No  employees to show";
            divTable.appendChild(p);
        }
        console.log(employees)
    }

    function displayHeaderTable() {
        const headers = ["ID","First Name","Last Name","Email","Joined date", "City", "Postal Code", "Availabilities"];
        //display header
        const thead = document.createElement("thead");
        const row = thead.insertRow();
        headers.forEach((header) => {
            row.insertCell().textContent = header;
        })
        table.appendChild(thead);
        divTable.appendChild(table);
    }

    function displayBodyTable() {
        const tbody = document.createElement("tbody");
        employees.forEach((employee) => {
            const row = table.insertRow();
            row.insertCell().textContent = employee.id;
            row.insertCell().textContent = employee.fname;
            row.insertCell().textContent = employee.lname;
            row.insertCell().textContent = employee.email;
            row.insertCell().textContent = employee.date;
            row.insertCell().textContent = employee.city;
            row.insertCell().textContent = employee.postalcode;
            row.insertCell().textContent = employee.avalibalitiy.join("-");
            row.insertCell.innerHTML = '<button class ="btn btn-success">-</button>';

       })
       divTable.appendChild(table);
    }

    function randomNumber() {
        let randNum = Math.round((Math.random() * (21)));
        return randNum;
    }
    //２・showボタンの設置
    submit.addEventListener('click' , addEmployee);
    show.addEventListener('click', () => {
        table.innerHTML = '';
        showEmployees();
    })
    
}
