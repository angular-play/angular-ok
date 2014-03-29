var app = angular.module("HelloApplication", []);

app.factory("DBService", function($http){

  function getDatas(conditon, callback) {
    var url = "http://10.0.0.67:3000/api/findAllByExample";

    var request = $http(
      {
        url: url,
        method: "POST",
        data: conditon
      }
    );

    request.success(function(data, status){
      callback(data);
    });

    request.error(function(err , status){
      console.log(err);
    });
  }

  return {
    getDatas: getDatas
  };

});

app.factory("GeneratorService", function(){

  function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isSelected = false;
  };

  return {
    books: [
      new Book("BookA", "AuthorA"),
      new Book("BookA", "AuthorA"),
      new Book("BookA", "AuthorA"),
      new Book("BookA", "AuthorA"),
      new Book("BookA", "AuthorA")
    ]
  };

});

app.controller("HelloController", function($scope, GeneratorService, DBService){
  $scope.message = "Hello AA";
  $scope.books = GeneratorService.books;
  $scope.selectedBook = null;

  $scope.selectBook = function(book){
    //$scope.selectedBook = book;
    book.isSelected = !book.isSelected;
  };

  $scope.isSelected = function(book){
    console.log(book);
    //return $scope.selectedBook === book;
    return book.isSelected;
  };


  $scope.getDevices = function() {
    var con = {
      entitry: "Devices",
      publish: true
    };

    DBService.getDatas(con, function(data){
      console.log(data);
    });

  }
});

















