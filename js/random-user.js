const loadUser = () => {
    fetch('https://randomuser.me/api/').then(res => res.json()).then(data => displayUser(data));
}

const displayUser = info => {
    const userSection = document.getElementById('user-section');
    info.results.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src='${element.picture.large}'>
        <h2>${element.name.first} <span style='margin-left:5px;'>${element.name.last}</span></h2>
        
        `;
        userSection.appendChild(div);
        console.log(element);
    });
}
loadUser();