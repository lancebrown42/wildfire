var MainController = function($scope){
  mainCtrl = this
  mainCtrl.land = [
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees'
  ]
  mainCtrl.clickState = 'default'
  mainCtrl.defaultState = true
  mainCtrl.fireState = false
  mainCtrl.waterState = false
  mainCtrl.class = {}
  console.log(mainCtrl.land.length)
  var classSetter = function(){
    for (var i = 0; i < mainCtrl.land.length; i++){
        mainCtrl.class[i] = 
            ['btn','btn-default']
        
        }
    }()
  mainCtrl.click = function(e){
    mainCtrl.clickTarget = e.target.id
  }
  // console.log(mainCtrl.class)
  // console.log (mainCtrl.clickState)
  // mainCtrl.water = function(e){
  //   // console.log('click')
  //   // e.preventDefault()
  //   console.log('water check')
  //   // console.log(mainCtrl.clickState)
  //   return mainCtrl.spread(e,'water')

  // }
  // mainCtrl.fire = function(e){
  //   // e.preventDefault()
  //   console.log('fire check')
  //   // console.log(mainCtrl.clickState)
  //   return mainCtrl.spread(e,'fire')

  // }
  mainCtrl.toggle = function(state){
    if (state == 'water'){
        if(mainCtrl.clickState == 'water'){
            mainCtrl.clickState = 'default'
            return
        }
        mainCtrl.clickState = 'water'
        console.log('we water now fam')
    }
    if (state == 'fire'){
        if(mainCtrl.clickState == 'fire'){
            mainCtrl.clickState == 'default'
            return
        }
        mainCtrl.clickState = 'fire'
        console.log('this mixtape is straight fire')
    }

  }
  mainCtrl.change = function(index){
    // console.log(mainCtrl.class[index])
    var currentClass = mainCtrl.class[index]
    // console.log(currentClass[1])
    if(mainCtrl.clickTarget == index){
        if (mainCtrl.clickState == 'water'){
            currentClass[1] = 'btn-info'
        }
        else if (mainCtrl.clickState == 'fire'){
            currentClass[1] = 'btn-danger'
        }

        mainCtrl.clickTarget = undefined
    }
    // console.log(mainCtrl.class.index)
    return currentClass
    // console.log(mainCtrl.clickTarget)
    // if(mainCtrl.clickTarget == index){
    //     var answer
    //     console.log('im checking for '+state)
    //     // console.log(mainCtrl.clickTarget)
    //     if(state == 'water' && mainCtrl.clickState == 'water'){
    //         console.log('watered')
    //         mainCtrl.clickTarget = undefined
    //         answer = true
    //         // mainCtrl.defaultState = false
    //     }
    //     else if(state == 'fire' && mainCtrl.clickState == 'fire'){
    //         console.log('fired')
    //         mainCtrl.clickTarget = undefined
    //         answer = true
    //         // mainCtrl.defaultState = false
    //     }
    //     else if(state =='default'&& (mainCtrl.clickState =='water'||mainCtrl.clickState=='fire')){
    //         answer = false
    //     }

    //     else{
    //         // mainCtrl.clickTarget = undefined
    //         console.log(state+' check failed')
    //         answer = false
    //     }
    //     return answer
    // }
    // else if (state =='default'){
    //     answer = true
    // }
    // console.log(answer)
  }
  mainCtrl.default = function(e){
    // console.log('is it default')
    return mainCtrl.defaultState

  }
  // mainCtrl.spread = function(event,refer){
  //   console.log(event)
  //   if (event){
  //       console.log('event happened')
        
  //           console.log('check clickstate:')
  //           console.log(mainCtrl.clickState)
  //           if (mainCtrl.clickState == 'water'){
  //               return true
  //           }
  //           if (mainCtrl.clickState == 'fire'){
  //               return true
  //           }
        
  //   }
    // console.log(mainCtrl.waterState)

    // var btnClass = event.target.className
    // console.log(btnClass)
    // if (btnClass.includes('btn-default')){
    //     console.log('default')
    //     if(mainCtrl.clickState == 'water'){
    //         console.log('water')
    //         btnClass = btnClass.replace(/btn-default/,"btn-info")
    //         console.log(btnClass)
    //     }
    //     if(mainCtrl.clickState == 'fire'){
    //         console.log('fire')
    //         btnClass = btnClass.replace(/btn-default/,"btn-danger")
    //         console.log(btnClass)
    //     }

    // }
    // for (tile in mainCtrl.land){
    //     if (true){}
    // }

  // }


}

angular.module('app', [])
  .controller('MainController', ['$scope', MainController])


