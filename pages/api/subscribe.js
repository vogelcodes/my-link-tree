import { connectToDatabase } from '../../util/mongodb'



export default async function subscribeAPI(req, res) {
    const { method, body } = req

    const { db } = await connectToDatabase()
    
    switch (method){
        case 'POST':
            
                const isSubscribed = await db.collection('leads').findOne({email: body.email})
                if (isSubscribed){
                    res.status(200).json(isSubscribed);
                } else{
                console.log(isSubscribed)
                const lead = JSON.parse(await db.collection('leads').insertOne(body))
            res.status(201).json(lead.ops);
                }
         
            break
            
            default:
                const leads = await db.collection('leads').find({}).toArray()

                res.status(200).json({leads})
    }

  }