const prismaClient = require("@prisma/client")

const prisma = new prismaClient.PrismaClient()

exports.create = async (req, res) => {
	try {
		const result = await prisma.geosite.create({
			data: {
				site_category: req.body.site_category,
				name: req.body.name,
				description: req.body.description,
				location: req.body.location,
				created_at: new Date(Date.now()),
				updated_at: new Date(Date.now())
			}
		})
		res.json(result)
	} catch (e) {
		console.error(e)
		res.status(500).send('error')
	}
}

exports.getAll = async (req, res) => {
	try {
		const schemaGetAll = await prisma.geosite.findMany()
		res.json(schemaGetAll)
	} catch (e) {
		console.error(e)
		res.status(500).send('error')
	}
}

exports.get = async (req, res) => {
	try {
		const schemaGet = await prisma.geosite.findUniqueOrThrow({
			where: {id: Number(req.params.id)}
		})
		res.json(schemaGet)
	} catch (e) {
		console.error(e)
		res.status(500).send('error')
	}
}

exports.update = async (req, res) => {
	try {
		const schemaUpdate = await prisma.geosite.update({
			where: {
				id: Number(req.params.id)
			},
				data: {
				site_category: req.body.site_category,
				name: req.body.name,
				description: req.body.description,
				location: req.body.location,
				updated_at: new Date(Date.now())
			}
		})
		res.json(schemaUpdate)
	} catch (e) {
		console.error(e)
		res.status(500).send('error')
	}
}

exports.delete = async (req, res) => {
	try {
		const schemaDelete = await prisma.geosite.delete({
			where: {
				id: Number(req.params.id)
			}
		})
		res.json(schemaDelete)
	} catch (e) {
		console.error(e)
		res.status(500).send('error')
	}
}