angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
      },
      {
        title: 'Chill',
        id: 2
      },
      {
        title: 'Dubstep',
        id: 3
      },
      {
        title: 'Indie',
        id: 4
      },
      {
        title: 'Rap',
        id: 5
      },
      {
        title: 'Cowbell',
        id: 6
      }
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {})
  .controller('ManagerApprovalCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);

  })
.controller('MyPaySlipCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate, $ionicModal,$sce) {
    $ionicSideMenuDelegate.canDragContent(false);
    console.log('My Pay Slip');
    $scope.variables = {};
    $scope.variables.month = '';
var PDFUrl = 'http://www.seemasystems.com/bin/downloads/hpms/PaySlip_and_Employee_account.pdf';
// var PDFUrl = 'http://infolab.stanford.edu/pub/papers/google.pdf';
// $scope.googleDocViewer = "http://docs.google.com/gview?url="+PDFUrl+"&embedded=true";
    $ionicModal
      .fromTemplateUrl('templates/pdf-viewer.html', {
        scope: $scope,
        animation: 'slide-in-up'
      })
      .then(function (modal) {
        console.log(modal)
        $scope.pdfModal = modal;
$scope.googleDocViewer = $sce.trustAsResourceUrl("http://docs.google.com/gview?url=" + PDFUrl + "&embedded=true");

      });
    // $scope.openPDFModal = function () {
    //   console.log('openPDFModal')
    //   $scope.pdfModal.show();
    // };
    // $scope.closePDFModal = function () {
    //   $scope.pdfModal.hide();
    // };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope
        .pdfModal
        .remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

  })
  .controller('TravelApprovalCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);

  })
  .controller('EmployeeCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
    $scope.gridIcons = [{
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Manager Approvals (EP)',
        img: 'img/employee-drawer/2.png',
        sref: 'app.managerapproval'
      },
      {
        label: 'Travel Approval',
        img: 'img/employee-drawer/3.png',
        sref: 'app.travelapproval'
      },
      {
        label: 'My Payslip',
        img: 'img/employee-drawer/1.png',
        sref: 'app.mypayslip'
      },
      {
        label: 'Salary Card',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Flexi Pay',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Income Tax',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Performance Letter',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'ESOP',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'PF Balance',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Credit Society',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'Superannuation',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
      {
        label: 'My Space',
        img: 'img/employee-drawer/1.png',
        sref: ''
      },
    ]
    $scope.grid = _.chunk($scope.gridIcons, 3);
    console.log($scope.grid)
  })
  .controller('SearchCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
    $scope.swipeLeft = function (name) {
      window
        .CP[name]
        .nextSwipe();
    }
    $scope.swipeRight = function (name) {
      window
        .CP[name]
        .previousSwipe();
    }
    console.log('search')
    $scope.canDrag = true
    $scope.dragged = function (ev, name) {
      //       if($scope.canDrag){
      //         $scope.canDrag = false;
      // _.debounce(function () {
      //   $scope.canDrag = true;
      //   console.log('hey')
      // console.log(ev);
      // window.CP[name].drag(ev.gesture,ev.gesture);

      // }, 1000)
      //     }

    }
    // $(document)
    // .ready(function () {



    // });
  });
