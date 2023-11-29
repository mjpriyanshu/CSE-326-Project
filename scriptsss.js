const recipients = [
  { name: 'Priyanshu', email: 'priyanshu@gmail.com', requiredBloodType: 'A+' },
  { name: 'Ishita', email: 'ishita@gmail.com', requiredBloodType: 'AB-' },
];
function displayRecipients() {
  const recipientTable = document.getElementById('recipient-table');

  recipients.forEach((recipient) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${recipient.name}</td>
      <td>${recipient.email}</td>
      <td>${recipient.requiredBloodType}</td>
    `;
    recipientTable.appendChild(row);
  });
}
window.onload = displayRecipients;
