const prismaClient = require("@prisma/client")
const prisma = new prismaClient.PrismaClient()

exports.create = async(req, res) => {
	const note = {
		title: req.body.title,
		location: req.body.title,
		description: req.body.description
	}

	try{
		const createdNote = await prisma.note.create({
			data: note
		})
		res
			.status(201)
			.json(createdNote)
	} catch(e){
		console.error(e)
		res.status(500)
	}
}

exports.getAll = async(req, res) => {
	try{
		const notes = await prisma.note.findMany()
		res
			.status(200)
			.json(notes)
	} catch(e){
		console.error(e)
		res.status(500)
	}
}

exports.get = async(req, res) => {
	try{
		const note = await prisma.note.findUnique({
			where: {
				id: Number(req.params.id)
			}
		}) 
		res
			.status(200)
			.json(note);
	} catch(e){
		console.error(e)
		res.code(500);
	}
}

exports.update = async(req, res) => {
	try{
		const updatedNote = await prisma.note.update({
			where: {
				id: Number(req.params.id)
			},
			data: {
				title: req.body.title,
				location: req.body.location,
				description: req.body.description,
				updated_at: new Date(Date.now()).toISOString()
			}
		});
		res
			.status(200)
			.json(updatedNote);
	} catch(e){
		console.error(e)
		res.status(500);
	}
}

exports.delete = async(req, res) => {
	try{
		const deletedNote = await prisma.Note.delete({
			where: {
				id: Number(req.params.id)
			}
		})
		res
			.status(200)
			.json(deletedNote);
	} catch(e){
		console.error(e)
		res.status(500);
	}
}