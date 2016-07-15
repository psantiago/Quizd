/**
 * Base class for all question types
 */
abstract class QuestionBase<T> {
    private correctAnswer: T;

    text: string;
    selectedAnswer: T | null;

    constructor(text: string, correctAnswer: T, selectedAnswer: T) {
        this.text = text;
        this.correctAnswer = correctAnswer;
        this.selectedAnswer = selectedAnswer;
    }

    isCorrect = () => this.selectedAnswer === this.correctAnswer;
}

export default QuestionBase;