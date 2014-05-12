/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

/* Controllers */

angular.module('QuestionnaireApp.controllers', []).
        controller('questionsCtrl', ['$scope', '$http', function($scope, $http) {
                $scope.question = '';
                $scope.helpText = '';
                $scope.questionType = '';
                $scope.questionsSet = [];
                $scope.questCount = 0;
                $scope.questionsTypes = [];
                $scope.showEdit = false;
                $scope.questionComp = "questions/openEnded.html";
                $scope.test = "Everything contained within this div is editable in browsers that support <code>HTML5</code>. Go on, give it a try: click it and start typing.";
                $scope.addQuestion = function() {
                    var currQuestion = $scope.question;
                    var questHelp = $scope.helpText;
                    var questtype = $scope.questionType;
                    var quest = [];
                    quest.push(currQuestion);
                    quest.push(questHelp);
                    quest.push(questtype);

                    console.log('JSON:' + angular.toJson(quest));

                    $scope.questionsSet.push(currQuestion);
                    $scope.questCount = $scope.questionsSet.length;
                    $scope.question = "";
                    $scope.helpText = '';
                    $scope.questionType = '';
                };

                $scope.showEditor = function() {
                    $scope.showEdit = true;
                };
                $scope.done = function() {
                    var currQuestion = $scope.question;
                    var questHelp = $scope.helpText;
                    var questtype = $scope.questionType;
                    var quest = [];
                    quest.push(currQuestion);
                    quest.push(questHelp);
                    quest.push(questtype);

                    console.log('JSON:' + angular.toJson(quest));

                    $scope.questionsSet.push(angular.toJson(quest));
                    $scope.questCount = $scope.questionsSet.length;
                    $scope.question = "";
                    $scope.helpText = '';
                    $scope.questionType = '';
                    console.log('JSON:' + angular.toJson($scope.questionsSet));
                };
                $scope.addComment = function() {
                    var newText = $scope.helpText;
                    $scope.questHelp = newText;
                };
                $scope.closer = function() {
                    if ($scope.showEdit) {
                        $scope.showEdit = false;
                        ;
                    } else {
                        $scope.showEdit = true;
                    }

                };

                $http.get('qtypes.json').
                        success(function(data) {
                            $scope.questionsTypes = data;
                        });

            }])
        .
        controller('ChoiceCtrl', ['$scope', function($scope) {
                $scope.newObject = {};
                $scope.options = [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}];


                $scope.items = [
                    {Name: "Soap", Price: "25", Quantity: "10"},
                    {Name: "Shaving cream", Price: "50", Quantity: "15"},
                    {Name: "Shampoo", Price: "100", Quantity: "5"},
                    {Name: "new option", Price: "100", Quantity: "5"}
                ];

                $scope.addItem = function(item) {
                    console.log('newItem: ' + item);
                    $scope.items.push(item);
                    console.log('JSON:' + angular.toJson($scope.items));
                    $scope.item = {};
                }

                $scope.addOption = function(newItem) {
                    console.log(newItem);
                    $scope.options.push(newItem);
                    console.log('JSON:' + angular.toJson($scope.options));
//                    $scope.choiceOptions.option='';
                };


            }


        ]).controller('ShoppingCartCtrl', ['$scope', function($scope) {

        $scope.items = [
            {Name: "Soap", Price: "25", Quantity: "10"},
            {Name: "Shaving cream", Price: "50", Quantity: "15"},
            {Name: "Shampoo", Price: "100", Quantity: "5"}
        ];

        $scope.addItem = function(item) {
//             console.alert('newItem: ' + item);
            $scope.items.push(item);
            console.log('JSON:' + angular.toJson($scope.items));
            $scope.item = {};
        }

        $scope.totalPrice = function() {
            var total = 0;
            for (count = 0; count < $scope.items.length; count++) {
                total += $scope.items[count].Price * $scope.items[count].Quantity;
            }
            return total;
        }

        $scope.removeItem = function(index) {
            $scope.items.splice(index, 1);
        }
    }]);

