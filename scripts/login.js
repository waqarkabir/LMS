
$(function ()
{
    let baseUrl = "https://localhost:44329";
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

        //jQuery API call to POST data to server side
        // let data = {
        //     "email": userName,
        //     "password": password
        // }
        // $.ajax({
        //     url: url,
        //     data: JSON.stringify(data),
        //     type: type,
        //     contentType: "application/json",
        //     success: function (response)
        //     {
        //         localStorage.setItem('token', 'sometoken');
        //         window.location = '/index.html';
        //     },
        //     error: function ()
        //     {
        //         console.log("error connecting Web Api");
        //         localStorage.removeItem('token');
        //         window.location = 'login.html';
        //     }
        // });
        if (userName == "admin" && password == "admin")
        {
            localStorage.setItem('token', 'sometoken');
            window.location = '/index.html';
        } else
        {
            localStorage.clear();
            window.location = "/account/login.html";
        }


    });
});