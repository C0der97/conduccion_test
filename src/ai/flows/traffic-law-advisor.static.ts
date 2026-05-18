// Browser-safe stub used when building for static export (GitHub Pages).
// The AI advisor feature requires a server and is not available in this deployment.

export type TrafficLawAdvisorInput = {
  questionText: string;
  options: { value: string; text: string }[];
  correctAnswerValue: string;
  correctAnswerText: string;
};

export type TrafficLawAdvisorOutput = {
  explanation: string;
  codeReference: string;
};

export async function trafficLawAdvisor(
  _input: TrafficLawAdvisorInput
): Promise<TrafficLawAdvisorOutput> {
  throw new Error('AI features are not available in this deployment.');
}
