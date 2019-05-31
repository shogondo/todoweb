$(() => {
    $('#form').submit((e) => {
        e.preventDefault();
        let data = {
            username: $('#username').val(),
            password: $('#password').val()
        };
        let options = {
            url: BASE_URL + '/users',
            method: 'POST',
            data: data
        };
        $.ajax(options)
            .then(() => {
                window.location.href = 'signin.html?message=created';
            })
            .catch((error) => {
                console.error(error);
                alert('サインアップできません。');
            });
    });
});