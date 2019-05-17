const BASE_URL = 'https://samurai-lesson-todoapi.herokuapp.com';

$(() => {
    let options = {
        url: BASE_URL + '/tasks',
        method: 'GET'
    };
    $.ajax(options).then((response) => {
        let html = '';
        response.tasks.forEach((o) => {
            html +=
                `<tr>` +
                `    <td><a href="edit.html?id=${o.id}">${o.title}</td>` +
                `    <td>${convertPriority(o.priority)}</td>` +
                `</tr>`;
        });
        $('#task-table').html(html);
    });
});

function convertPriority(value) {
    switch (value) {
        case 'low':
            return '低';
        case 'medium':
            return '中';
        case 'high':
            return '高';
        default:
            return '';
    }
}