
$(function ()
{
    let baseUrl = "localhost";
    $('#LoginForm').on('submit', function (event)
    {
        event.preventDefault();
        let element = $(this);

        let form = $('#LoginForm');
        let url = baseUrl + form.attr('action');
        let type = form.attr('method');
        console.log(url);
        console.log(type);
        let userName = $('#UserName').val();
        let password = $('#Password').val();
        if (userName == "admin" && password == "admin")
        {
            localStorage.setItem('token', 'sometoken');
            window.location = '/index.html';
        } else
        {
            localStorage.clear();
            window.location = "/account/login.html";
        }

        //jQuery API call to POST data to server side
    });
});