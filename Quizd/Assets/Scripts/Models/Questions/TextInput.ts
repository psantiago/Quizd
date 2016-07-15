import QuestionBase from "./QuestionBase"

/**
 * Allows multiple choice questions
 */
export default class TextInput extends QuestionBase<string> {
    constructor(text: string, correctAnswer: string, selectedAnswer: string) {
        super(text, correctAnswer, selectedAnswer);
    }
}