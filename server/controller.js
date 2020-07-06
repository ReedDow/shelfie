
module.exports={
    getInventory:(req,res) =>{
        const db = req.app.get('db');
        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },

    addItem:(req,res) =>{
        const {name, price, url} = req.body,
            db = req.app.get('db');
        db.add_item({name, price, url})
        .then(() => sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    editProduct:(req,res) =>{
        const{id} = req.params
        const{name, price, url} = req.body
            db = req.app.get('db');
        db.edit_product({name, price, url, id})
        .then(() => res.sendStateus('looks good yo'))
        .catch(err => res.status(500).send(err))
    },

    deleteItem:(req, res)=>{
        const{id} = req.params,
        db = req.app.get('db');
        db.delete_item({id})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }

}
    