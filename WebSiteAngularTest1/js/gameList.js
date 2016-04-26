// js/gameList.js
'use strict';


/**
 * Déclaration de l'application demoApp
 */
var demoApp = angular.module('demoApp', [
    // Dépendances du "module"
    'gameList'
]);

/**
 * Déclaration du module gameList
 */
var gameList = angular.module('gameList', []);

/**
 * Contrôleur de l'application "game List" 
 */
gameList.controller('gameCtrl', ['$scope',
    function ($scope) {

        // Pour manipuler plus simplement les jeux au sein du contrôleur
        // On initialise les jeux avec un tableau vide : []
        var games = $scope.games = [];

        // Ajouter un jeu
        $scope.addGame = function () {

            console.log("--> Submitting form");

            // .trim() permet de supprimer les espaces inutiles
            // en début et fin d'une chaîne de caractères
            //var newGame = $scope.newGame.trim();
            var newGame = {
                title: $scope.newGame.title,
                type: $scope.newGame.type
            };

            if (!newGame.length) {
                // éviter les jeux vides
                return;
            }
            games.push({
                // on ajoute le jeu au tableau des jeux
                //title: newGame.title,
                //type: newGame.type,
                game: newGame,
                completed: false
            });
            // Réinitialisation de la variable newJeu
            $scope.newGame = '';
        };

        // Enlever un jeu
        $scope.removeGame= function (game) {
            games.splice(games.indexOf(game), 1);
        };

        // Cocher / Décocher tous les jeux
        $scope.markAll = function (completed) {
            games.forEach(function (game) {
                game.completed = !completed;
            });
        };

        // Enlever tous les jeux cochés
        $scope.clearCompletedGames = function () {
            $scope.games = games = games.filter(function (game) {
                return !game.completed;
            });
        };
    }

]);