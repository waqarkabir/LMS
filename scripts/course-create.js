$(function ()
{
    $('#frmCreate').on('submit', function (event)
    {
        event.preventDefault();
        let element = $(this);

        const course = {
            title: $('#Title').val(),
            description: $('#Description').val(),
            category: $('#Category option:selected').val(),
            fee: $('#Fee').val(),
            createdOn: $('#CreatedOn').val(),
            duration: $('#duration').val(),
            labs: $('#Labs').val(),
            lectures: $('#Lectures').val(),
            isFeatured: $('#IsFeatured').is(':checked'),
            isActive: $('#IsActive').is(':checked'),
            levels: $('input[name="Levels"]:checked').val()
        };
        console.log(course);
    });
});