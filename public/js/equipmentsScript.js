$(document).ready(() => {
    // Table Equipments
    var clickableRow = document.querySelectorAll('#equipmentsTable .clickableRow')

    if (clickableRow) {
        // Get all modals
        var modals = document.querySelectorAll('.modal')

        for (let i = 0; i < clickableRow.length; i++) {
            const row = clickableRow[i]

            if (row) {
                // Trigger event
                row.addEventListener('click', () => {
                    // const url = 'http://localhost:3000/tools/work/equipments/edit/' + row.id
                    // window.location.href = url

                    for (let i = 0; i < modals.length; i++) {
                        const modal = modals[i]

                        if (modal.id == row.id) {
                            // Activates modal and clip the html
                            modal.classList.add('is-active')
                            document.documentElement.classList.add('is-clipped')

                            // Removes the modal "is-active" and html "is-clipped" when the close button is clicked
                            modal.lastElementChild.addEventListener('click', () => {
                                modal.classList.remove('is-active')
                                document.documentElement.classList.remove('is-clipped')
                            })

                            // Removes the modal "is-active" and html "is-clipped" when the background is clicked
                            modal.firstElementChild.addEventListener('click', () => {
                                modal.classList.remove('is-active')
                                document.documentElement.classList.remove('is-clipped')
                            })

                            // Does the same thing as the others above, but now using escape key
                            document.addEventListener('keydown', (e) => {
                                if (e.key == "Escape" && modal.classList.contains('is-active')) {
                                    modal.classList.remove('is-active')
                                    document.documentElement.classList.remove('is-clipped')
                                }
                            })
                        }
                    }
                })
            }
        }
    }

    // Form AJAX submit
    $('form').each((index, element) => {
        // Form submit AJAX event
        $(element).submit((event) => {
            event.preventDefault()
            const formValues = {
                id: element.id.value,
                type: element.type.value,
                subtype: element.subtype.value,
                name: element.name.value,
                qty: element.qty.value,
                comments: element.comments.value
            }
            $.ajax({
                url: '/api/work/equipments/update',
                method: 'POST',
                contentType: 'application/json; charset=UTF-8',
                dataType: 'json',
                data: JSON.stringify(formValues),
                success: (data) => {
                    setTimeout(() => {
                        location.reload()
                    }, 2500)
                }
            })
        })

        // Delete checkbox
        $(element.deleteCheck).change(() => {
            switch (element.deleteCheck.checked) {
                case true:
                    $(element.deleteButton).prop('disabled', false)
                    break;

                case false:
                    $(element.deleteButton).prop('disabled', true)
                    break;
            }
        })
        $(element.deleteButton).click((event) => {
            event.preventDefault()
            // $.ajax({
            //     url: '/api/work/equipments/delete',
            //     method: 'POST',
            //     contentType: 'application/json; charset=UTF-8',
            //     dataType: 'json',
            //     data: JSON.stringify({ id: element.id.value }),
            //     success: (data) => {
            //         setTimeout(() => {
            //             location.reload()
            //         }, 2500)
            //     }
            // })
        })
    })
})