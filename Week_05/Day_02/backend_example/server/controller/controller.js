let listArr = ['Apple','Banana','Cherry']

module.exports = {
    getList: (req,res) => {
        res.status(200).send(listArr)
    },
    deleteList: (req,res) => {
        let { item } = req.params
        listArr = listArr.filter(element => element != item)
        res.status(200).send(listArr)
    }
}