function validateDonorForm() {
  const name = document.getElementById('donor-name').value;
  const email = document.getElementById('donor-email').value;
  const bloodType = document.getElementById('donor-blood-type').value;

  if (name === '' || email === '' || bloodType === '') {
    alert('Please fill in all fields.');
    return false;
  }

  return true;
}

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
document.getElementById('donor-form').addEventListener('submit', function (event) {
  if (!validateDonorForm()) {
    event.preventDefault();
  }
});

document.getElementById('recipient-form').addEventListener('submit', function (event) {
  if (!validateRecipientForm()) {
    event.preventDefault();
  }
});
