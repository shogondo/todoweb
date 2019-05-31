$(() => {
    $('#form').submit((e) => {
        e.preventDefault();
        let data = {
            username: $('#username').val(),
            password: $('#password').val()
        };
        let options = {
            url: BASE_URL + '/sessions',
            method: 'POST',
            data: data
        };
        $.ajax(options)
            .then((result) => {
                localStorage.setItem('session', JSON.stringify(result));
                window.location.href = 'index.html?message=created';
            })
            .catch((error) => {
                console.error(error);
                alert('サインインできません。');
            });
    });
});