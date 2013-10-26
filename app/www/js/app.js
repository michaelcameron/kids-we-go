var angulargap = angular.module("angulargap", []);
angulargap.controller("HomeController", function ($scope) {
        $scope.message = "AngularJS!";
});

angulargap.controller("PrepopulatedPageController", function ($scope) {
    $scope.message = "MGN controller replaced";
    
    switch (getURLParameter("id"))
    {
        case "cherry":
            $scope.title = "Minneapolis Sculpture Garden";
            $scope.locationCopy = "The Minneapolis Sculpture Garden is one of the crown jewels of the city’s park system, uniting two of Minnesota’s most cherished resources—its greenspace and its cultural life. The 11-acre site Directions, home to the iconic Spoonbridge and Cherry, showcases more than 40 works from the Walker Art Center’s renowned collection. A partnership with the Minneapolis Park & Recreation Board, the Garden is a top destination for visitors, who enjoy not only the art but also the seasonal displays in the Cowles Conservatoryi and the Alene Grossman Memorial Arbor and Flower Garden.";
            $scope.stockPhotoUrl = "img/CherryStockPhoto.png";

            $scope.fullScreenImageUrl = "img/MSG-spoon-completed.png"
            $scope.nextPageId = "fish";
            break;
        case "fish":
            $scope.fullScreenImageUrl = "img/MSG-fish-completed.png"
            $scope.nextPageId = "fish";
            break;
        case "cherryTakePicture":
            $scope.fullScreenImageUrl = "img/MSG-takeapictureCTA.png";
            break;
        default:
            alert("no id parameter found on the url!");
            return;
    }

    
});

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}
