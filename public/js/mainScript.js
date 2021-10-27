// Ajax test
$.post('/api/work/equipments/edit', { content: 'no content' })

$.ajax({
    url: '/api/work/equipments/edit',
    method: 'GET',
    contentType: 'application/json; charset=UTF-8',
    dataType: 'json',
    success: (data) => {
        console.log(data)
    }
})