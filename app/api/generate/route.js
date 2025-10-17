import clientPromise from '@/lib/mongodb'

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db('cuturl')
    const collection = db.collection('urls')

    const urlexists = await collection.findOne({ url: body.url })

    if (body.url === "" || body.shorturl === "") {
        return Response.json({ success: false, error: true, message: "URL or ShortURL can't be Empty" })
    }

    if (urlexists) {
        return Response.json({ success: false, error: true, message: `Url Already Used with shorturl: ${urlexists.shorturl}` })
    }

    const shortexists = await collection.findOne({ shorturl: body.shorturl })

    if (shortexists) {

        return Response.json({ success: false, error: true, message: "ShortUrl Already Exists" })
    }

    const result = await collection.insertOne({ url: body.url, shorturl: body.shorturl })

    if (!result.acknowledged) {
        return Response.json({ success: false, error: true, message: "Failed to shorten URL" })
    }

    return Response.json({ success: true, error: false, message: "URL shortened successfully" })
}

export async function GET() {
    const client = await clientPromise
    const db = client.db('cuturl')
    const collection = db.collection('urls')
    const urls = await collection.find({}).toArray()
    return Response.json(urls)
}