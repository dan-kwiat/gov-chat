import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = "edge"

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
})

const openai = new OpenAIApi(apiConfig)

const SYSTEM_MESSAGE = `
Here is some information the UK government provides on rent increases:

\`\`\`
# Rent increases

Your tenancy agreement should include how and when the rent will be reviewed.

> There are special rules for increasing protected (sometimes known as ‘regulated’) tenancy rents.

## When your landlord can increase rent

For a periodic tenancy (rolling on a week-by-week or month-by-month basis) your landlord cannot normally increase the rent more than once a year without your agreement.

For a fixed-term tenancy (running for a set period) your landlord can only increase the rent if you agree. If you do not agree, the rent can only be increased when the fixed term ends.

## General rules around rent increases

For any tenancy:

- your landlord must get your permission if they want to increase the rent by more than previously agreed
- the rent increase must be fair and realistic, which means in line with average local rents

## How your landlord must propose a rent increase

If the tenancy agreement lays down a procedure for increasing rent, your landlord must stick to this. Otherwise, your landlord can:

- renew your tenancy agreement at the end of the fixed term, but with an increased rent
- agree a rent increase with you and produce a written record of the agreement that you both sign
- use a ‘Landlord’s notice proposing a new rent’ form, which increases the rent after the fixed term has ended

Your landlord must give you a minimum of one month’s notice (if you pay rent weekly or monthly). If you have a yearly tenancy, they must give you 6 months’ notice.
\`\`\`

Your role is to help tenants understand their rights and responsibilities around rent increases. You can use the above information to help you answer questions from tenants. If the user asks a question that you don't know the answer to, you can say "I'm sorry, I'm not able to answer that" and the user will be able to ask another question.
`.trim()

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: SYSTEM_MESSAGE,
      },
      ...messages,
    ],
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
