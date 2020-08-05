{/* <tr>
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn btn-info">
                <i class="fas fa-sync-alt"></i>
            </button>
            <button class="btn btn-danger">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </td>
</tr> */}

let users = [
    {surname : 'Berger', firstname: 'Whitney', age : 22 },
    {surname : 'Nagy', firstname: 'Árpád', age : 33 },
    {surname : 'Kiss', firstname: 'Bence', age : 44 },
    {surname : 'Doe', firstname: 'John', age : 55 },
    {surname : 'Jack', firstname: 'Vadölő', age : 32 },
    {surname : 'Banderas', firstname: 'Antonio', age : 45 },
    {surname : 'Fehér', firstname: 'Péter', age : 54 },
    {surname : 'Prios', firstname: 'Gizella', age : 12 }
];

let tableBody = document.querySelector('#userTable tbody');

let createTD = ( html, parent) => {
    let td = document.createElement('td');
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement('div');
    group.className = 'btn-group';
    
    let btnInfo = document.createElement('button');
    btnInfo.className = 'btn btn-info';
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';
    
    let btnDanger = document.createElement('button');
    btnDanger.className = 'btn btn-danger';
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement('td');
    td.appendChild(group);
    parent.appendChild(td);
};

for (const key in users) {
    let tr = document.createElement('tr');
    createTD(parseInt(key) + 1, tr);
    for( let value of Object.values(users[key])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}