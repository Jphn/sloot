// Controller: Main
exports.main = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.render('tools/work/projectors/index', {
        pageValues: {
            title: 'Digital Projectors',
            subtitle: 'Here will have general infos about it',
            message: 'Here goes a lot of important stuff about Digital Projectors.'
        }
    })

}