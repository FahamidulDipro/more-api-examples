const showSpinner = document.getElementById('lds-ring');

const loadUser = () => {
    fetch('https://randomuser.me/api/').then(res => {
        showSpinner.classList.remove('invisible');
        return res.json()
    }).then(data => {
        showSpinner.classList.add('invisible');
        return displayUser(data)
    });
}

const displayUser = info => {
    const userSection = document.getElementById('user-section');
    info.results.forEach(element => {
        const div = document.createElement('div');

        div.innerHTML = `
        <img src='${element.picture.large}' style='border-radius:50%;'>
        <h2 style='color:yellow;'>${element.name.first} <span style='margin-left:5px;'>${element.name.last}</span></h2>
        <p><b>Age: </b> ${element.registered.age}</p>
        <p><b>Gender: </b> ${element.gender}</p>
        <p><b>Location: </b> ${element.location.city}, <span style='color:chocolate;font-weight:bold;'>${element.location.state}, </span><span style='color:steelblue;font-weight:bold;'>${element.location.country}</span></p>
        <p><b>Email: </b><span style='color:lightgreen;'> ${element.email}</span></p>
        <p><b>Phone: </b> ${element.phone}</p>
        
        `;
        userSection.appendChild(div);
        console.log(element);
    });
}

document.getElementById('change-user').addEventListener('click', () => {
    document.getElementById('user-section').textContent = '';
    loadUser();
});