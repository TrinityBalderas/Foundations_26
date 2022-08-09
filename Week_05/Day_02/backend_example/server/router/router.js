const { getList, deleteList } = require('../controller/controller.js')

module.exports = app => {
    app.get('/api/list', getList)
    app.delete('/api/list/:item', deleteList)
}