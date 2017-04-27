angular.module('JacobLonghurst')
    .controller('MortgageCalcController', ['$scope', '$http', function($scope, $http) {

        $scope.mortgage = {
            principal: null,
            interest: null,
            years: null,
            down: null
        };
        $scope.result = {
            interest: null,
            full: null,
            monthly: null,
            monthlyDiff: null
        };
        $scope.success = false;


        $scope.reset = function(Object) {
            angular.copy({}, Object);
            $scope.success = false;
            $scope.monthlyPayment = "";
            $scope.totalInterest = "";
        };

        $scope.calculate = function(Object) {
            $scope.success = true;
            $scope.interest = calculateInterest(Object);
            console.log(calculateInterest(Object));
            $scope.full = calculateFull(Object);
            $scope.monthly = monthlyPayment(Object);
            $scope.monthlyDiff = monthlyDifference(Object);

        };
        //     M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

        $scope.calculateMonthly = function(home) {
            $scope.success = true;
            var principal = parseFloat(home.principal);
            var interest = parseFloat(home.interest);
            var interestAdjusted = (interest / 100) / 12;
            var terms = parseFloat(home.years);
            terms = terms * 12;
            var down = parseFloat(home.down);
            principal = principal - down;

            var top = (interestAdjusted * (Math.pow((1 + interestAdjusted), terms)));
            var bottom = (Math.pow((1 + interestAdjusted), terms) - 1);
            var divider = top / bottom;
            var monthly = principal * divider;
            $scope.monthlyPayment = monthly;

            $scope.totalInterest = ($scope.monthlyPayment * terms) - principal;
        };


        var monthlyPayment = function(Object) {
            var interest = Object.interest / 100;
            var growth = (Math.pow((1 + interest), (Object.years * Object.interest)) / (Math.pow((1 + interest), Object.years)) - 1);
            var monthly = getPrincipal(Object) * growth;
            return monthly;
        };

        var calculateInterest = function(Object) {
            return (monthlyPayment(Object) * getTime(Object)) - getPrincipal(Object);
        };

        var calculateFull = function(Object) {
            return calculateInterest(Object) + getPrincipal(Object);
        };

        var monthlyDifference = function(Object) {
            var monthly = [];
            var intPay = calculateInterest(Object) / getTime(Object);
            var princPay = monthlyPayment(Object) - intPay;

            monthly[0] = intPay;
            monthly[1] = princPay;
            return monthly;
        };

        var getPrincipal = function(Object) {
            return Object.principal - getDown(Object);
        };

        var getRate = function(Object) {
            return Object.interest;
        };

        var getTime = function(Object) {
            return Object.years;
        };

        var getDown = function(Object) {
            return Object.down;
        }

    }]);

