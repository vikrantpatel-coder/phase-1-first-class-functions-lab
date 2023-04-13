
const returnFirstTwoDrivers = function(){
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
drivers.pop('Antonia', 'Nuru')
return ['Antonia', 'Nuru']

}

const returnLastTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    drivers.pop ('Amari', 'Mo')
    return ['Amari', 'Mo']
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (a) => { //fare multiplier function
    return(fare) => a*a
}

function fareDoubler(createFareMultiplier){
return createFareMultiplier*2
}

function fareTripler(createFareMultiplier){
    return createFareMultiplier*3
}

function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers(drivers)

}















    

     




    
    




    

    

