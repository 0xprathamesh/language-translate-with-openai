import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const translate = async (req, res) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${req.body.prompt}`,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(completion);
  const translatedOutput = completion.data.choices[0].text.trim();
  res.status(200).json({result: translatedOutput})
}
export default translate

