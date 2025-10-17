import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {

    // ✅ Check ID first
    if (!params.id) {
        return new Response(
            JSON.stringify({ success: false, message: "Missing ID" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const client = await clientPromise;
    const db = client.db("cuturl");
    const collection = db.collection("urls");

    const result = await collection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
        return new Response(
            JSON.stringify({ success: false, error: true, message: "Couldn't find the URL" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(
        JSON.stringify({ success: true, error: false, message: "URL Deleted Successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );

}
