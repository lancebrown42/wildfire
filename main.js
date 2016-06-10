var MainController = function($scope,$interval){
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
    e.preventDefault()
    mainCtrl.clickTarget = e.target.id
  }
  // console.log(mainCtrl.class)
  // console.log (mainCtrl.clickState)
  // mainCtrl.water = function(e){
  //   // console.log('click')
  //   // e.preventDefault()
  //   // console.log('water check')
  //   // console.log(mainCtrl.clickState)
  //   return waterActive

  // }
  // mainCtrl.fire = function(e){
  //   // e.preventDefault()
  //   // console.log('fire check')
  //   // console.log(mainCtrl.clickState)
  //   return fireActive

  // }
  mainCtrl.toggle = function(state){
    if (state == 'water'){
        if(mainCtrl.clickState == 'water'){
            mainCtrl.clickState = 'default'
            fireActive = false
            // waterActive = !waterActive
            return
        }
        mainCtrl.clickState = 'water'
        console.log('we water now fam')
    }
    if (state == 'fire'){
        if(mainCtrl.clickState == 'fire'){
            mainCtrl.clickState == 'default'
            waterActive = false
            // fireActive = !fireActive
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
            console.log("tile number "+index +" is in danger")
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
  mainCtrl.spread = $interval(function($interval){
    for (tile in mainCtrl.land){
        // console.log (tile)
        var currentClass = mainCtrl.class[tile]
        var next = eval(tile)+1
        var prev = tile-1
        // console.log('next = '+next)
        // console.log('prev = '+prev)
        // console.log(currentClass[1])

        if (currentClass[1] == 'btn-danger'){
            if(mainCtrl.class[next][1]=='btn-info'||mainCtrl.class[next][1]=='btn-danger'){
                continue
            }
            else{
                // console.log('burning')
                mainCtrl.clickTarget = next
                mainCtrl.clickState = 'fire'
                console.log(next)
                mainCtrl.change(next)
            }
            if(mainCtrl.class[prev][1]=='btn-info'||mainCtrl.class[prev][1]=='btn-danger'){
                continue
            }
            else{
                mainCtrl.clickTarget = prev
                mainCtrl.clickState = 'fire'
                mainCtrl.change(prev)
            }
        }
    }
  },1000)
  // window.setInterval(mainCtrl.spread,1000)
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
  .controller('MainController', ['$scope', '$interval',MainController])


