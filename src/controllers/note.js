const Note = require("../models/note");

exports.create = async(req, res) => {
	const note = new Note({
		title: req.body.title,
		location: req.body.location,
		description: req.body.description
	})

	try{
		const createdNote = await note.save()
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
		const notes = await Note.find()
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
		const note = await Note.findOne({_id: req.params.id})
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
		const updatedNote = await Note.updateOne({_id: req.params.id}, {
			title: req.body.title,
			location: req.body.location,
			description: req.body.description,
			updated_at: Date.now()
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
		const deletedNote = await Note.deleteOne({_id: req.params.id})
		res
			.code(200)
			.send(deletedNote);
	} catch(e){
		console.error(e)
		res.code(500);
	}
}

