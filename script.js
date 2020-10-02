onload =function() {
    //First Step
    const fname = document.querySelector('#fname-input');
    const lname = document.querySelector('#lname-input');
    const email = document.querySelector('#email-input');
    const date = document.querySelector('#date-input');
    const city = document.querySelector('#city-input');
    const address = document.querySelector('#address-input');
    const submit = document.querySelector('#btn-submit');
    const show = document.querySelector('#btn-show');
    const divTable = document.querySelector('#table');
    const table = document.createElement('table');

    let employees = []


    //Third Step
    function addEmployee (e) {
        e.preventDefault();
       //get all inputs value
       //create new employee object
       let newEmployee = {
           id : `${new Date().getTime()}${randomNumber()}`,
           fname:fname.value,
           lname:lname.value,
           email:email.value,
           date:date.value.replaceAll('-', '/'),
           city:city.value,
           postalcode:address.value
       }

       //add this object to array
       employees.push(newEmployee);
       document.querySelector('form').reset();
    }

    function showEmployees () {
        divTable.innerHTML = '';
        if (employees.length > 0) {
            displayHeaderTable();
            displayBodyTable();
        }
        else {
            const p = document.createElement('p');
            p.textContent = "No  employees to show";
            divTable.appendChild(p);
        }
        console.log(employees)
    }

    function displayHeaderTable() {
        const headers = ["first name","last name","email","joined date", "city", "postal code"];
        //display header
        const row = table.insertRow();
        headers.map((header) => {
            row.insertCell().textContent = header;
        })
        divTable.appendChild(table);
    }

    function displayBodyTable() {
        employees.forEach((employee) => {
            const row = table.insertRow();
            row.setAttribute('id', employee.id)
            const fnameCell = row.insertCell();
            const lnameCell = row.insertCell();
            const emailCell = row.insertCell();
            const dateCell = row.insertCell();
            const cityCell = row.insertCell();
            const addressCell = row.insertCell();
            fnameCell.textContent = employee.fname;
            lnameCell.textContent = employee.lname;
            emailCell.textContent = employee.email;
            dateCell.textContent = employee.date;
            cityCell.textContent = employee.city;
            addressCell.textContent = employee.postalcode;

            // const deleteCell = row.insertCell();
            // deleteCell.textContent = 'dalete';
       })
       divTable.appendChild(table);
    }



    function randomNumber() {
        let randNum = Math.round((Math.random() * (21)));
        return randNum;
    }


    //Second Step
    submit.addEventListener('click' , addEmployee);
    show.addEventListener('click', () => {
        table.innerHTML = '';
        showEmployees();
    })
    divTable.addEventListener('click' , (e) => {
        console.log(e.target.parentNode)
    })


}
