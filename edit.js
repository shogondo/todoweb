$(() => {
    const BASE_URL = 'https://4523461960124972800a7fc18c933004.vfs.cloud9.us-east-1.amazonaws.com';
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
            data: data
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
                method: 'DELETE'
            };
            $.ajax(options).then(() => {
                window.location.href = 'index.html?message=deleted';
            });
        }
    });
});
    
function loadTask(id) {
    let options = {
        url: 'https://4523461960124972800a7fc18c933004.vfs.cloud9.us-east-1.amazonaws.com/tasks/' + id,
        method: 'GET'
    };
    $.ajax(options).then((response) => {
        $('#title').val(response.title);
        $('#description').val(response.description);
        $('#priority').val(response.priority);
    });
}