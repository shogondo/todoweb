$(() => {
    let params = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    console.log(params);
    let id = params.get('id');

    loadTask(id);
    
    $('#form').submit((e) => {
        e.preventDefault();
        let data = {
            title: $('#title').val(),
            description: $('#description').val(),
            priority: $('#priority').val() || undefined
        };
        let options = {
            url: BASE_URL + '/tasks/' + id,
            method: 'PUT',
            data: data,
            headers: {
                AUTHORIZATION: app.session.token
            }
        };
        $.ajax(options).then(() => {
            window.location.href = 'index.html?message=updated';
        });
    });
    
    $('#remove-button').click((e) => {
        e.preventDefault();
        if (confirm('このタスクを削除します。よろしいですか？')) {
            let options = {
                url: BASE_URL + '/tasks/' + id,
                method: 'DELETE',
                headers: {
                    AUTHORIZATION: app.session.token
                }
            };
            $.ajax(options).then(() => {
                window.location.href = 'index.html?message=deleted';
            });
        }
    });
});
    
function loadTask(id) {
    let options = {
        url: BASE_URL + '/tasks/' + id,
        method: 'GET',
        headers: {
            AUTHORIZATION: app.session.token
        }
    };
    $.ajax(options).then((response) => {
        $('#title').val(response.title);
        $('#description').val(response.description);
        $('#priority').val(response.priority);
    });
}