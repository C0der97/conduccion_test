'use server';
/**
 * @fileOverview A Genkit flow that acts as an AI-powered legal advisor for the Colombian traffic law exam.
 * It explains the reasoning behind correct answers, referencing the Colombian National Traffic Code.
 *
 * - trafficLawAdvisorFlow - A function that provides legal advice for traffic questions.
 * - TrafficLawAdvisorInput - The input type for the trafficLawAdvisorFlow function.
 * - TrafficLawAdvisorOutput - The return type for the trafficLawAdvisorFlow function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the flow
const TrafficLawAdvisorInputSchema = z.object({
  questionText: z.string().describe('The text of the traffic law question.'),
  options: z.array(z.object({
    value: z.string().describe('The identifier for the option (e.g., "a", "b").'),
    text: z.string().describe('The text content of the option.'),
  })).describe('An array of possible answer options.'),
  correctAnswerValue: z.string().describe('The value of the correct answer among the options.'),
  correctAnswerText: z.string().describe('The text of the correct answer.'),
});
export type TrafficLawAdvisorInput = z.infer<typeof TrafficLawAdvisorInputSchema>;

// Define the output schema for the flow
const TrafficLawAdvisorOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of why the answer is correct, based on Colombian traffic law.'),
  codeReference: z.string().describe('The specific article or section of the Colombian National Traffic Code that supports the explanation.'),
});
export type TrafficLawAdvisorOutput = z.infer<typeof TrafficLawAdvisorOutputSchema>;

// Define the prompt
const trafficLawAdvisorPrompt = ai.definePrompt({
  name: 'trafficLawAdvisorPrompt',
  input: { schema: TrafficLawAdvisorInputSchema },
  output: { schema: TrafficLawAdvisorOutputSchema },
  prompt: `You are an AI-powered legal advisor specializing in the Colombian National Traffic Code.
  Your task is to explain the reasoning behind a correct answer to a traffic law question.

  Provide a concise and accurate explanation. Crucially, you MUST reference the specific article or section of the Colombian National Traffic Code that supports your explanation. If you cannot find a specific article, state that it's based on general principles of the code.

  Here is the question and the correct answer:

  Question: {{{questionText}}}

  Options:
  {{#each options}}
  - {{{value}}}) {{{text}}}
  {{/each}}

  Correct Answer: {{{correctAnswerValue}}}) {{{correctAnswerText}}}

  Based on the Colombian National Traffic Code, explain why this is the correct answer and cite the relevant code section.`,
});

// Define the Genkit flow
const trafficLawAdvisorFlow = ai.defineFlow(
  {
    name: 'trafficLawAdvisorFlow',
    inputSchema: TrafficLawAdvisorInputSchema,
    outputSchema: TrafficLawAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await trafficLawAdvisorPrompt(input);
    if (!output) {
      throw new Error('Failed to get explanation from AI.');
    }
    return output;
  }
);

// Export the wrapper function
export async function trafficLawAdvisor(input: TrafficLawAdvisorInput): Promise<TrafficLawAdvisorOutput> {
  return trafficLawAdvisorFlow(input);
}
