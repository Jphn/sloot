// Ajax test
$.ajax({
    url: 'http://localhost:3000/about',
    type: 'GET',
    dataType: 'text',
    success: (data) => {
        console.log(data)
    }
})