function findMatching(names, string){
    const drivers = [];
    for (const name of drivers) {
        if (string === name)
        {
            return drivers.push(drivers)
        }
    }
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function (drivers)
    { return drivers.toLowerCase().substring(0,string.length) === string.toLowerCase()})

}

function matchName(objects, string) {
    return objects.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}