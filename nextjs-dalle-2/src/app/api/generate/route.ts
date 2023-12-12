import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration)

export const POST = async (request: Request) => {
    const body = await request.json()
    console.log(body)
    const promptString = body.prompt

    if (!promptString) {
        return new Response('you need a prompt', { status: 400 })
    }

    try {
        const airesponse = await openai.createImage({
            prompt: promptString,
            n: 1,
            size: '512x512'
        });
        return NextResponse.json(
            { url: airesponse.data.data[0].url },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }


}