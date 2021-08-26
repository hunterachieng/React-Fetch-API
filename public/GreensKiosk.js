// GreensKiosk.js
let products = [
    {
        id:1,
        name: 'Mangoes',
        category: 'fruits'
    },
    {
        id:2,
        name: 'Apples',
        category: 'fruits'
    },
    {
        id:3,
        name: 'Bananas',
        category: 'fruits'
    },
    {
        id:4,
        name: 'Oranges',
        category: 'fruits'
    },
    {
        id:5,
        name: 'Grapes',
        category: 'fruits'
    },
    {
        id:6,
        name: 'Kales',
        category: 'vegetables'
    },
    {
        id:7,
        name: 'Onions',
        category: 'vegetables'
    },
    {
        id:8,
        name: 'Tomatoes',
        category: 'vegetables'
    },
    {
        id:9,
        name: 'Cabbages',
        category: 'vegetables'
    },
    {
        id:10,
        name: 'Spinach',
        category: 'vegetables'
    },
    ];
    
    function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        return filteredProducts;
    }
    return products;
    }
    
    GreensKiosk = {
    getItems: getItems
    };
    
    module.exports = GreensKiosk;
    
    