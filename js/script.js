$(document).ready(async function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    await getAllDogs();
});


function submitForm() {

    const formData = {
        title: $('#title').val(),
        sub_title: $('#sub_title').val(),
        image_path: $('#image_path').val()
    }

    $.ajax({
        url: '/add-dog',
        type: 'POST',
        data: formData,
        success: (result) => {
            alert('Dog added successfully!');
            getAllDogs();
        }
    })
}


async function getAllDogs() {
    const response = await $.get('/get-all-dogs-mongo');

    console.log(response);
    $("#card-section").empty();

    response.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image_path + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.title + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.sub_title + '<i class="material-icons right">close</i></span>' +
            '</div></div></div>';

        $("#card-section").append(itemToAppend)
    });

}
