System.register(["./QuestionBase"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var QuestionBase_1;
    var TextInput;
    return {
        setters:[
            function (QuestionBase_1_1) {
                QuestionBase_1 = QuestionBase_1_1;
            }],
        execute: function() {
            /**
             * Allows multiple choice questions
             */
            TextInput = (function (_super) {
                __extends(TextInput, _super);
                function TextInput(text, correctAnswer, selectedAnswer) {
                    _super.call(this, text, correctAnswer, selectedAnswer);
                }
                return TextInput;
            }(QuestionBase_1.default));
            exports_1("default", TextInput);
        }
    }
});
//# sourceMappingURL=TextInput.js.map