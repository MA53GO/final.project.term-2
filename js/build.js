let wrapOrder = [];

makeWrap = () => {

    let cost = 0;

    let roll = document.getElementById("roll").value; 
    let flesh = document.getElementById("flesh").value;
    let spread = document.getElementById("spread").value;

    if(roll === "wheat bread"){
        cost = cost + 15
    } else if(roll === "white bread"){
        cost = cost +15
    } else if(roll === "sourdough bread"){
        cost = cost +15
    }  else if(roll === "rye bread"){
        cost = cost +15
    } else if(roll === "flat bread"){
        cost = cost +15
    } else if(roll === "gluten free wrap"){
        cost = cost +15
    } else if(roll === "multigrain bread"){
        cost = cost +15
    }
     
    if(flesh === "ham slices"){
        cost = cost + 25
    } else if(flesh === "salami slices"){
        cost = cost + 20
    } else if(flesh === "polony"){
        cost = cost + 15
    }  else if(flesh === "turkey"){
        cost = cost + 28
    } else if(flesh === "lamb slices"){
        cost = cost + 35
    } else if(flesh === "chicken slices"){
        cost = cost + 25
    } else if(flesh === "meatballs"){
        cost = cost + 15
    }

    if(spread === "hummus"){
        cost = cost + 25
    } else if(spread === "spicy avocado spread"){
        cost = cost + 20
    } else if(spread === "creamy cheese and chives"){
        cost = cost + 15
    }  else if(spread === "mayonnaise"){
        cost = cost + 28
    } 
    
    let topPings = document.getElementsByName("tops");
    let topArray = [];
    for(let i = 0;i < topPings.length; i++){
        if(topPings[i].checked){
            topArray.push(topPings[i].value) 
            cost = cost + +topPings[i].dataset.price
        }
    }
  console.log(topArray)


  let topSauces = document.getElementsByName("sauce")
    let TopArray = []
    for(let i = 0;i < topSauces.length; i++){
        if(topSauces[i].checked){
            TopArray.push(topSauces[i].value)
            cost = cost + +topSauces[i].dataset.fee
        }
    }

    wrapOrder.push({
        roll:roll
        
        
    })
    console.log(TopArray, cost, wrapOrder)

} 

realTimeCost = () => {

    realTimePrice = 0;

    let roll = document.getElementById("roll").value; 
    let flesh = document.getElementById("flesh").value;
    let spread = document.getElementById("spread").value;


    if(roll === "wheat bread"){
        cost = cost + 15
    } else if(roll === "white bread"){
        realTimePrice = realTimePrice +15
    } else if(roll === "sourdough bread"){
        realTimePrice = realTimePrice +15
    }  else if(roll === "rye bread"){
        realTimePrice = realTimePrice +15
    } else if(roll === "flat bread"){
        realTimePrice = realTimePrice +15
    } else if(roll === "gluten free wrap"){
        realTimePrice = realTimePrice +15
    } else if(roll === "multigrain bread"){
        realTimePrice = realTimePrice +15
    }
     
    if(flesh === "ham slices"){
        realTimePrice = realTimePrice + 25
    } else if(flesh === "salami slices"){
        realTimePrice = realTimePrice + 20
    } else if(flesh === "polony"){
        realTimePrice = realTimePrice + 15
    }  else if(flesh === "turkey"){
        realTimePrice = realTimePrice + 28
    } else if(flesh === "lamb slices"){
        realTimePrice = realTimePrice + 35
    } else if(flesh === "chicken slices"){
        realTimePrice = realTimePrice + 25
    } else if(flesh === "meatballs"){
        realTimePrice = realTimePrice + 15
    }

    if(spread === "hummus"){
        realTimePrice = realTimePrice + 25
    } else if(spread === "spicy avocado spread"){
        realTimePrice = realTimePrice + 20
    } else if(spread === "creamy cheese and chives"){
        realTimePrice = realTimePrice + 15
    }  else if(spread === "mayonnaise"){
        realTimePrice = realTimePrice + 28
    } 

    let topPings = document.getElementsByName("tops");
   
    for(let i = 0;i < topPings.length; i++){
        if(topPings[i].checked){    
            realTimePrice = realTimePrice + +topPings[i].dataset.price
        }
    }
  


  let topSauces = document.getElementsByName("sauce")
    for(let i = 0;i < topSauces.length; i++){
        if(topSauces[i].checked){
            realTimePrice = realTimePrice+ +topSauces[i].dataset.fee
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"
}

showOrder = () => {

    let area = document.getElementById("ogCard")
    let total = document.getElementById("orderTotal")

    let grossTotal = 0;


}


