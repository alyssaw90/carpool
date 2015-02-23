carpoolApp.factory('AlertService',[function(){
    console.log('AlertService loaded')
    var alerts=[];

    return {
        clear: function(){
            alerts=[];
        },
        add:function(type,text){
            alerts.push({type:type,text:text});
        },
        remove:function(idx){
            alerts.splice(idx,1);
        },
        get:function(){
            return alerts;
        }
    };

}]);
