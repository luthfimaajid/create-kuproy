const prismaClient = require("@prisma/client")

const prisma = new prismaClient.PrismaClient()

exports.get = async (req, res) => {
        try {
                const schemaGet = await prisma.geoarea.findUnique({
                        where: {
                                id: Number(req.params.id)
                        }
                })
                res.json(schemaGet)
        } catch (e) {
                console.error(e)
                res.status(500).send('error')
        }
}

exports.getAll = async (req, res) => {
        try {
                let schemaGetAll
                if (!req.query.siteid) {
                        schemaGetAll = await prisma.geoarea.findMany()
                        res.json(schemaGetAll)
                } else {
                        schemaGetAll = await prisma.geoarea.findMany({
                                where: {
                                        geosite_id: Number(req.query.siteid)
                                }
                        })
                        res.json(schemaGetAll)
                }
        } catch (e) {
                console.error(e)
                res.status(500).send('error')
        }
}

exports.create = async (req, res) => {
        try {
                const schemaCreate = await prisma.geoarea.create({
                        data: {
                                geosite_id: Number(req.body.geosite_id),
                                area_category: req.body.area_category,
                                name: req.body.name,
                                banner_img: req.body.banner_img,
                                thumbnail_img: req.body.thumbnail_img,
                                description: req.body.description,
                                ticket_price: Number(req.body.ticket_price),
                                operational_time: req.body.operational_time,
                                location: req.body.location,
                                coordinate: req.body.coordinate,
                                created_at: new Date(Date.now()),
                                updated_at: new Date(Date.now())


                        }
                })
                res.json(schemaCreate);
        } catch (e) {
                console.error(e)
                res.status(500).send('error')
        }
}

exports.update = async (req, res) => {
        try {
                const schemaUpdate = await prisma.geoarea.update({
                        where: {
                                id: Number(req.params.id)
                        },
                        data: {
                                geosite_id: Number(req.body.geosite_id),
                                area_category: req.body.area_category,
                                name: req.body.name,
                                banner_img: req.body.banner_img,
                                thumbnail_img: req.body.thumbnail_img,
                                description: req.body.description,
                                ticket_price: Number(req.body.ticket_price),
                                operational_time: req.body.operational_time,
                                location: req.body.location,
                                coordinate: req.body.coordinate,
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
                const schemaDelete = await prisma.geoarea.delete({
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