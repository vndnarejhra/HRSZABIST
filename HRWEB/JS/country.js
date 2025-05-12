const country_url ="https://bug-free-invention-q76r9qq59xrwc64v7-6006.app.github.dev/COUNTRY";
fetch(country_url).then(response=>{
    if(!response.ok)
        throw new console.error("failed to fetch country data");
    return response.json();
        
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${country.country_id}</td>
        <td>${country.country_name}</td>
        <td>${country.region_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
})