app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruscetta',
      description: 'Grilled bread garlic tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Parma',
      description: 'Grilled Chicken.',
      price: 14.95
    },
    {
      name: 'Spag',
      description: 'Tomatoes and olive oil.',
      price: 10.95
    },
    {
      name: 'Iced Cream',
      description: 'Iced Cream.',
      price: 9.95
    }
  ];
  $scope.extras = [
    {
      name: 'Chippies',
      description: 'Tomatoes and olive oil.',
      price: 1.95
    },
    {
      name: 'Dognuts',
      description: 'Iced Cream.',
      price: 6.95
    }    
  ]
}]);