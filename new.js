$(() => {
    const BASE_URL = 'https://4523461960124972800a7fc18c933004.vfs.cloud9.us-east-1.amazonaws.com';    
    $('#form').submit((e) => {
        e.preventDefault();
        let data = {
            title: $('#title').val(),
            description: $('#description').val(),
            priority: $('#priority').val() || undefined
        };
        let options = {
            url: BASE_URL + '/tasks',
            method: 'POST',
            data: data
        };
        $.ajax(options).then(() => {
            window.location.href = 'index.html?message=created';
        });
    });
});