require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const{CONNECTION_STRING}=process.env;
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false
}
}).then(db => {
    app.set('db',db);
    console.log('db connected');
});


app.get('api/inventory', controller.getInventory);
app.post('api/inventory', controller.addItem);
app.put('api/inventory/:id', controller.editProduct);
app.delete('api/inventory/:id', controller.deleteItem);

app.listen(7000, () => console.log('Server is running on 7000'));