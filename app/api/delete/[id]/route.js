import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export async function DELETE(req, { params }) {

    const client = await clientPromise;
    const db = client.db("cuturl")
    const collection = db.collection("urls")

    const result = await collection.deleteOne({ _id: new ObjectId(params.id) })

    if (!params.id) {
        return Response.json({ success: false, message: "Missing ID" }, { status: 400 })
    }

    if (result.deletedCount == 0) {
        return Response.json({ success: false, error: true, message: "Couldn't find the URL" })
    }
    return Response.json({ success: true, error: false, message: "URL Deleted Successfully" })

}

