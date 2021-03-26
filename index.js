// Code your solution here

function findMatching (drivers, string) {
    let matchedDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matchedDrivers
}

function fuzzyMatch (drivers, string) {
    let fuzzyMatched = drivers.filter(driver => {
        return driver.startsWith(string)
    })
    return fuzzyMatched
}

function matchName(drivers, string) {
    let matchedNames = drivers.filter(obj => {
        return obj.name === string
    })
    return matchedNames
}