// public/script.js
$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#formSubmit').click(() => {
      submitForm();
  })
  $('.modal').modal();

  getAllDogs();
});

async function getAllDogs() {
  try {
      const response = await $.get('/all-dogs');
      if (response) {
          response.forEach(item => {
              // Create and append card elements here
          });
      }
  } catch (error) {
      console.error(error);
  }
}

// Other functions for form submission, etc.
