$(function ()
{
    let token = localStorage.getItem('token');

    if (token)
    {
        $('#login').hide();
        $('#logout').show();
    } else
    {
        $('#logout').hide();
        $('#login').show();
    }
});