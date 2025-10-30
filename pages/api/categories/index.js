import Category from "@/models/Category";
import { dbConnect } from "@/utils/db";

const handler = async (req,res) => {
    const {method} = req;

    if(method === "GET") {
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            console.log(error)
        }
    };

    if(method === "POST") {
        try {
            const newCategory = await Category.create(req.body);
            res.status(200).json(newCategory)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler