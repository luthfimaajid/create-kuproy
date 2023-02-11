const Note = require("../models/note");

exports.create = async(req, res) => {
	const note = new Note({
		title: req.body.title,
		location: req.body.title,
		description: req.body.description
	})

	try{
		const createdNote = await note.save()
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
		const notes = await Note.find()
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
		const note = await Note.findOne({_id: req.params.id})
		res
			.status(200)
			.json(note);
	} catch(e){
		console.error(e)
		res.status(500);
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
			.status(200)
			.json(updatedNote);
	} catch(e){
		console.error(e)
		res.status(500);
	}
}

exports.delete = async(req, res) => {
	try{
		const deletedNote = await Note.deleteOne({_id: req.params.id})
		res
			.status(200)
			.json(deletedNote);
	} catch(e){
		console.error(e)
		res.status(500);
	}
}