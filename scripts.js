const donors = [
  { name: 'Piyush', email: 'piyush@gmail.com', bloodType: 'B+' },
  { name: 'Ankita', email: 'ankita@gmail.com', bloodType: 'B+' },
 
];

function displayDonors() {
  const donorTable = document.getElementById('donor-table');

  donors.forEach((donor) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${donor.name}</td>
      <td>${donor.email}</td>
      <td>${donor.bloodType}</td>
    `;
    donorTable.appendChild(row);
  });
}

window.onload = displayDonors;
