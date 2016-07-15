import QuestionBase from "./QuestionBase"

/**
 * Allows multiple choice questions
 */
export default class MultipleChoice extends QuestionBase<string> {
    /**
     * the options available to the user for selection
     */
    options: Array<string>;

    constructor(text: string, correctAnswer: string, selectedAnswer: string, options: Array<string>) {
        super(text, correctAnswer, selectedAnswer);
        this.options = options;
    }
}