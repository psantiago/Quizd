System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuestionBase;
    return {
        setters:[],
        execute: function() {
            /**
             * Base class for all question types
             */
            QuestionBase = (function () {
                function QuestionBase(text, correctAnswer, selectedAnswer) {
                    var _this = this;
                    this.isCorrect = function () { return _this.selectedAnswer === _this.correctAnswer; };
                    this.text = text;
                    this.correctAnswer = correctAnswer;
                    this.selectedAnswer = selectedAnswer;
                }
                return QuestionBase;
            }());
            exports_1("default",QuestionBase);
        }
    }
});
//# sourceMappingURL=QuestionBase.js.map