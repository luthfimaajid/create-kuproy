
exports.create = async(req, res) => {
	const note = {
		title: req.body.title,
		location: req.body.location,
		description: req.body.description
	}

	try{
		const createdNote = await req.prisma.note.create({
			data: note
		})
		res
			.code(201)
			.send(createdNote)
	} catch(e){
		console.error(e)
		res.code(500)
	}
}

exports.getAll = async(req, res) => {
	try{
		const notes = await req.prisma.note.findMany()
		res
			.code(200)
			.send(notes)
	} catch(e){
		console.error(e)
		res.code(500)
	}
}

exports.get = async(req, res) => {
	try{
		const note = await req.prisma.note.findUnique({
			where: {
				id: Number(req.params.id)
			}
		}) 
		res
			.code(200)
			.send(note);
	} catch(e){
		console.error(e)
		res.code(500);
	}
}

exports.update = async(req, res) => {
	try{
		const updatedNote = await req.prisma.note.update({
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
			.code(200)
			.send(updatedNote);
	} catch(e){
		console.error(e)
		res.code(500);
	}
}

exports.delete = async(req, res) => {
	try{
		const deletedNote = await req.prisma.Note.delete({
			where: {
				id: Number(req.params.id)
			}
		})
		res
			.code(200)
			.send(deletedNote);
	} catch(e){
		console.error(e)
		res.code(500);
	}
}

