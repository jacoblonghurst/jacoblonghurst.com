angular.module('JacobLonghurst')
    .controller('AutoLoanController', ['$scope', '$http', function($scope, $http) {
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = true;
        $scope.isCollapsedHorizontal = true;

        $scope.autofinance = {
            principal: null,
            interest: null,
            down: null,
            months: null,
            tax: null
        };

        $scope.autolease = {
            principal: null,
            interest: null,
            down: null,
            residual: null,
            months: null,
            tax: null
        };
        $scope.successLease = false;
        $scope.successLoan = false;


        $scope.leaseLength = [
            { id: 24, length: '24 Months' },
            { id: 36, length: '36 Months' },
            { id: 48, length: '48 Months' },
            { id: 60, length: '60 Months' }
        ];

        $scope.financeLength = [
            { id: 24, length: '24 Months' },
            { id: 36, length: '36 Months' },
            { id: 48, length: '48 Months' },
            { id: 60, length: '60 Months' },
            { id: 72, length: '72 Months' }
        ];
        $scope.reset = function(Object) {
            angular.copy({}, Object);
            $scope.successLease = false;
            $scope.successLoan = false;
        };

        $scope.calculateLease = function(auto) {
            $scope.success = true;
            var principal = parseFloat(auto.principal);
            var interest = parseFloat(auto.interest);
            var down = parseFloat(auto.down);
            var residual = parseFloat(auto.residual);
            var tax = ((parseFloat(auto.tax).toFixed(2) / 100) + 1);
            var residualValue = (principal * (residual / 100));
            console.log("Residual Value " + residualValue);
            var grossCost = (principal + 1200);
            console.log("Gross Cost " + grossCost);
            var capCostRedux = down;
            console.log("Capital Cost Reduction " + capCostRedux);
            var adjustedGross = (grossCost - capCostRedux);
            console.log("Adjusted Total " + adjustedGross);
            var depreciationAmount = (adjustedGross - residualValue);
            console.log("Depreciation amount " + depreciationAmount);
            var term = parseInt(auto.months);
            console.log(term);
            var basePay = (depreciationAmount / term);
            console.log("Base Payment " + basePay);
            var rentCharge = ((adjustedGross + residualValue) * interest);
            console.log("Rent Charge " + rentCharge);
            var pretaxLease = (basePay + rentCharge);
            console.log("PreTax Lease " + pretaxLease);
            var monthly = (pretaxLease * tax);
            $scope.monthlyLease = monthly.toFixed(2);
        };

        $scope.calculateLoan = function(auto) {
            $scope.successLoan = true;
            var principal = parseFloat(auto.principal);
            console.log("Principal " + principal);
            var interest = parseFloat(auto.interest / 100);
            var interestAdjusted = parseFloat(auto.interest);
            interestAdjusted = (interestAdjusted / 12) / 100;
            console.log("Interest " + interestAdjusted);
            var down = parseFloat(auto.down);
            console.log("Down Payment " + down);
            // var tax = ((parseFloat(auto.tax).toFixed(2) / 100));
            var term = parseInt(auto.months);
            console.log("Term in months " + term);
            // var loan = ((principal - down) * tax);
            principal = principal - down;
            console.log("Principal munis down " + principal);
            var top = (interestAdjusted * (Math.pow((1 + interestAdjusted), term)));
            console.log("Top section " + top);
            var bottom = ((Math.pow((1 + interestAdjusted), term)) - 1);
            console.log("Bottom section " + bottom);
            var division = top / bottom;
            $scope.monthlyFinance = (principal * division);
            $scope.totalLoan = ($scope.monthlyFinance * term);
            $scope.totalInterest = ($scope.totalLoan - principal);

            calculateLoanInterest(auto);
        };

        var calculateLoanInterest = function(auto) {
            var principal = parseFloat(auto.principal - auto.down);
            var interest = parseFloat(auto.interest / 100);
            var tempInterest = (interest / 12) * principal;
            console.log("First Months Interest " + tempInterest);
            var interestYear = tempInterest;
            var tempMonthly = $scope.monthlyFinance - tempInterest;
            var newPrincipal = principal - tempMonthly;
            for (var i = 0; i < 11; i++) {
                tempInterest = (interest / 12) * newPrincipal;
                interestYear += tempInterest;
                tempMonthly = $scope.monthlyFinance - tempInterest;
                newPrincipal = newPrincipal - tempMonthly;
            }
            $scope.interestOneYear = interestYear;
            for (var i = 0; i < 12; i++) {
                tempInterest = (interest / 12) * newPrincipal;
                interestYear += tempInterest;
                tempMonthly = $scope.monthlyFinance - tempInterest;
                newPrincipal = newPrincipal - tempMonthly;
            }
            $scope.interestTwoYears = interestYear;
            for (var i = 0; i < 12; i++) {
                tempInterest = (interest / 12) * newPrincipal;
                interestYear += tempInterest;
                tempMonthly = $scope.monthlyFinance - tempInterest;
                newPrincipal = newPrincipal - tempMonthly;
            }
            $scope.interestThreeYears = interestYear;
            console.log("Interest for a year " + interestYear);
        }



    }]);