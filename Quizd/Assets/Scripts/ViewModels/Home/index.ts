declare var document : any;

import MultipleChoice from "../../Models/Questions/MultipleChoice";
import TextInput from "../../Models/Questions/TextInput";
import { countries, Country } from "../../Data/Countries";

class Quiz {
    score: number;
    question: MultipleChoice;
    getNextPage() {
        this.question.selectedAnswer = document.getElementById("form").option.value;
        if (this.question.isCorrect()) {
            this.score++;
            this.question = this.generateMultipleChoice();
        } else {
            this.question = null;
        }

        document.getElementById("alpha").innerHTML = this.generatePageHtml();

        return false;
    }

    generateMultipleChoice() {
        const selectedCountry = this.getRandomCountry();

        var capitals = [
            selectedCountry.capital,
            this.getRandomCountry().capital,
            this.getRandomCountry().capital,
            this.getRandomCountry().capital,
            this.getRandomCountry().capital
        ];

        capitals.sort(() => .5 - Math.random());

        return new MultipleChoice(
            `What is the capital of ${selectedCountry.country}`,
            selectedCountry.capital,
            null,
            capitals);
    }

    /**
     * You should never do this in real life. Sorry.
     */
    generatePageHtml(): string {
        if (this.question == null) {
            return `<p>you scored: <b>${this.score}</b> before failing.</p>`;
        }

        let html = `<p>current score: ${this.score}</p>`;
        html += `<p>${this.question.text}</p>`;
        html += '<form id="form" onsubmit="return window.home.index.quiz.getNextPage()">';
        for (let index in this.question.options) {
            const value = this.question.options[index];
            html += `<label><input name="option" type="radio" value="${value}" />${value}</label>`;
        }
        html += '<br /><input type="submit" value="Submit"" />';
        html += '</form>';
        return html;
    }

    private getRandomCountry(): Country {
        const randomIndex = this.getRandomInt(0, countries.length);
        return countries[randomIndex];
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

var quiz = new Quiz();
quiz.score = 0;
quiz.question = quiz.generateMultipleChoice();
document.getElementById("alpha").innerHTML = quiz.generatePageHtml();
export { quiz };