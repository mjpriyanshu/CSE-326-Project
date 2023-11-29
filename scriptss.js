function validateRecipientForm() {
  const name = document.getElementById('recipient-name').value;
  const email = document.getElementById('recipient-email').value;
  const requiredBloodType = document.getElementById('required-blood-type').value;

  if (name === '' || email === '' || requiredBloodType === '') {
    alert('Please fill in all fields.');
    return false;
  }
  return true;
}
document.getElementById('recipient-form').addEventListener('submit', function (event) {
  if (!validateRecipientForm()) {
    event.preventDefault();
  }
});
