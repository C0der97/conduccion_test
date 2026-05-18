// Browser-safe stub used when building for static export (GitHub Pages).
// The intelligent review mode feature requires a server and is not available in this deployment.

export type IntelligentReviewModeInput = {
  weakTopics: string[];
  incorrectQuestionTexts?: string[];
};

export type IntelligentReviewModeOutput = {
  personalizedQuestions: Array<{
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>;
};

export async function intelligentReviewMode(
  _input: IntelligentReviewModeInput
): Promise<IntelligentReviewModeOutput> {
  throw new Error('AI features are not available in this deployment.');
}
