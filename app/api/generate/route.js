// app/api/generate/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("cuturl");
    const collection = db.collection("urls");

    // Validate input
    if (!body.url || !body.shorturl) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: "URL or ShortURL can't be empty" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the URL already exists
    const urlexists = await collection.findOne({ url: body.url });
    if (urlexists) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: `URL already used with shorturl: ${urlexists.shorturl}` }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the shorturl already exists
    const shortexists = await collection.findOne({ shorturl: body.shorturl });
    if (shortexists) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: "ShortURL already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert into database
    const result = await collection.insertOne({ url: body.url, shorturl: body.shorturl });
    if (!result.acknowledged) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: "Failed to shorten URL" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, error: false, message: "URL shortened successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in /api/generate:", error);
    return new Response(
      JSON.stringify({ success: false, error: true, message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cuturl");
    const collection = db.collection("urls");
    const urls = await collection.find({}).toArray();

    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/generate:", error);
    return new Response(
      JSON.stringify({ success: false, error: true, message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
