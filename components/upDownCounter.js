function upDown() {
    this.count = 0;
    this.goUp = ()=>{
        this.count++
    } 
    this.goDown = ()=> {
        this.count--
    }
}

angular.module('upDownApp').component('upDownCounter', 
    {
        template:
        ` 
            <div class="box">
                <button ng-click="$ctrl.goUp()">Up</button>
                <span>{{$ctrl.count}}</span>
                <button ng-click="$ctrl.goDown()">Down</button>
            </div>
        `, // or use templateUrl
        controller: upDown
    });