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

                $scope.addComment = function() {
                    var newText=$scope.helpText;
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
            }]);

