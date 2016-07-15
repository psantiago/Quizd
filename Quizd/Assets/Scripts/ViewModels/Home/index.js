System.register(["../../Models/Questions/MultipleChoice", "../../Data/Countries"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MultipleChoice_1, Countries_1;
    var Quiz, quiz;
    return {
        setters:[
            function (MultipleChoice_1_1) {
                MultipleChoice_1 = MultipleChoice_1_1;
            },
            function (Countries_1_1) {
                Countries_1 = Countries_1_1;
            }],
        execute: function() {
            Quiz = (function () {
                function Quiz() {
                }
                Quiz.prototype.getNextPage = function () {
                    this.question.selectedAnswer = document.getElementById("form").option.value;
                    if (this.question.isCorrect()) {
                        this.score++;
                        this.question = this.generateMultipleChoice();
                    }
                    else {
                        this.question = null;
                    }
                    document.getElementById("alpha").innerHTML = this.generatePageHtml();
                    return false;
                };
                Quiz.prototype.generateMultipleChoice = function () {
                    var selectedCountry = this.getRandomCountry();
                    var capitals = [
                        selectedCountry.capital,
                        this.getRandomCountry().capital,
                        this.getRandomCountry().capital,
                        this.getRandomCountry().capital,
                        this.getRandomCountry().capital
                    ];
                    capitals.sort(function () { return .5 - Math.random(); });
                    return new MultipleChoice_1.default("What is the capital of " + selectedCountry.country, selectedCountry.capital, null, capitals);
                };
                /**
                 * You should never do this in real life. Sorry.
                 */
                Quiz.prototype.generatePageHtml = function () {
                    if (this.question == null) {
                        return "<p>you scored: <b>" + this.score + "</b> before failing.</p>";
                    }
                    var html = "<p>current score: " + this.score + "</p>";
                    html += "<p>" + this.question.text + "</p>";
                    html += '<form id="form" onsubmit="return window.home.index.quiz.getNextPage()">';
                    for (var index in this.question.options) {
                        var value = this.question.options[index];
                        html += "<label><input name=\"option\" type=\"radio\" value=\"" + value + "\" />" + value + "</label>";
                    }
                    html += '<br /><input type="submit" value="Submit"" />';
                    html += '</form>';
                    return html;
                };
                Quiz.prototype.getRandomCountry = function () {
                    var randomIndex = this.getRandomInt(0, Countries_1.countries.length);
                    return Countries_1.countries[randomIndex];
                };
                Quiz.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                };
                return Quiz;
            }());
            quiz = new Quiz();
            quiz.score = 0;
            quiz.question = quiz.generateMultipleChoice();
            document.getElementById("alpha").innerHTML = quiz.generatePageHtml();
            exports_1("quiz", quiz);
        }
    }
});
//# sourceMappingURL=index.js.map