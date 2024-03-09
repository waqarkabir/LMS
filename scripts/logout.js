$(function ()
{
    localStorage.removeItem('token');
    $.ajax({
        url: "https://localhost:44329/Authentication/Logout",
        type: "post",
        contentType: "application/json",
        success: function (response)
        {
            console.log(response);
        },
        error: function ()
        {
            console.log('fallback logout')
        }
    });
    window.location = 'login.html';
});