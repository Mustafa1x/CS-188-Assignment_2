const {
    selectItems,
    selectItemByItemId,

} = require('../repositories/item-repository');

const mapToModel = (item) => ({
    itemId: item['itemId'],
    name: item['name'],
    description: item['description'],
    price: item['price']
});

const getAllItems = () => {
    const {rows} = selectItems();

    return rows.map(mapToModel);
};

const getItemByItemId = (itemId) => {
    const item = selectItemByItemId(itemId);

    return mapToModel(item);
};


module.exports = {
    getAllItems,
    getItemByItemId,
}; 