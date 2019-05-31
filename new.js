$(() => {
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