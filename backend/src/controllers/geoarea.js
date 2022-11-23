const Geoarea = require("../models/geoarea");

// exports.getByGeositeId = async(req, res) => {
// 	try {
        
// 	} catch(e){
// 		console.error(e)
// 		res.status(500).send('error')
// 	}
// }

exports.get = async(req, res) => {
	try {
        const schemaGet = await Geoarea.findOne({_id: req.params.id})
        res.json(schemaGet)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.getAll = async(req, res) => {
	try {
                let schemaGetAll
                if(!req.query.siteid){
                        schemaGetAll = await Geoarea.find()
                        res.json(schemaGetAll)
                } else{
                        schemaGetAll = await Geoarea.find({geosite_id: req.query.siteid})
                        res.json(schemaGetAll)
                }
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.create = async(req, res) => {
    const schema = new Geoarea({
        geosite_id: req.body.geosite_id,
        area_category: req.body.area_category,
        name: req.body.name,
        banner_img: req.body.banner_img,
        thumbnail_img: req.body.thumbnail_img,
        description: req.body.description,
        ticket_price: req.body.ticket_price,
        operational_time: req.body.operational_time,
        location: req.body.location,
        coordinate: req.body.coordinate,
        created_at: Date.now(),
        updated_at: Date.now()
    })
	try {
        const schemaCreate = await schema.save()
        res.json(schemaCreate);
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.update = async(req, res) => {
	try {
        const schemaUpdate = await Geoarea.updateOne({_id: req.params.id}, {
            geosite_id: req.body.geosite_id,
            area_category: req.body.area_category,
            name: req.body.name,
            banner_img: req.body.banner_img,
            thumbnail_img: req.body.thumbnail_img,
            description: req.body.description,
            ticket_price: req.body.ticket_price,
            operational_time: req.body.operational_time,
            location: req.body.location,
            coordinate: req.body.coordinate,
            updated_at: Date.now()
        })
        res.json(schemaUpdate)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.delete = async(req, res) => {
	try {
        const schemaDelete = await Geoarea.deleteOne({_id: req.params.id})
        res.json(schemaDelete)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}