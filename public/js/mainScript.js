// Ajax test
$.ajax({
    url: '/api/work/equipments/edit',
    method: 'POST',
    contentType: 'application/json; charset=UTF-8',
    dataType: 'json',
    data: JSON.stringify({ content: 'nocontent' }),
    success: (data) => {
        console.log(data)
    }
})