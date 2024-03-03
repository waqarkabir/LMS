
$(function ()
{
    $('#LoginForm').on('submit', function (event)
    {
        event.preventDefault();
        let element = $(this);

        let form = $('#LoginForm');
        console.log(form.attr('action'));
        console.log(form.attr('method'));
        let userName = $('#UserName').val();
        let password = $('#Password').val();
        alert(`User:${userName}, Password:${password}`);

        //jQuery API call to POST data to server side
    });
});