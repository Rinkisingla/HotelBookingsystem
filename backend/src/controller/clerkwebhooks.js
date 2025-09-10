import { User } from '../models/user.models.js'
import {webhooks} from 'svix'

const clerkwehbook = async(req, res)=>{
    try {
         const whook= new webhooks(process.env.CLERK_WEBHOOK_SECRET);
         const headers={
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
         };
        
        //now verify
         await  whook.verify(JSON.stringify(req.body),headers)
          const {data,type} = req.body
            const userdata={
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username:data.first_name+" "+data.last_name,
            image: data.image_url,
        }
        switch(type){
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
             case "user.deleted":{
                await User.findByIdAndDelete(data.id, userData);
                break;
            }
            default:break;
        }
        res.json({success:true, message:"webhook received"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message})

    }
}
 export default clerkwehbook;