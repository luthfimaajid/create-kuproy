const Geosite = require("../models/geosite");

exports.create = async(req, res) => {
	const schema = new Geosite({
		site_category: req.body.site_category,
		name: req.body.name,
		description: req.body.description,
		location: req.body.location,
		created_at: Date.now(),
		updated_at: Date.now()
	})
	try{
		const schemaCreate = await schema.save()
		res.json(schemaCreate)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.getAll = async(req, res) => {
	try{
		const schemaGetAll = await Geosite.find()
		res.json(schemaGetAll)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.get = async(req, res) => {
	try{
		const schemaGet = await Geosite.findOne({_id: req.params.id})
		res.json(schemaGet)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.update = async(req, res) => {
	try{
		const schemaUpdate = await Geosite.updateOne({_id: req.params.id}, {
			site_category: req.body.site_category,
			name: req.body.name,
			description: req.body.description,
			location: req.body.location,
			updated_at: Date.now()
		})
		res.json(schemaUpdate)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}

exports.delete = async(req, res) => {
	try{
		const schemaDelete = await Geosite.deleteOne({_id: req.params.id})
		res.json(schemaDelete)
	} catch(e){
		console.error(e)
		res.status(500).send('error')
	}
}