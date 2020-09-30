const fs = require("fs")
var input = process.argv.slice(2)

// console.log(input)

if (input[0] === "write") {
    if (input[1] === undefined){
        console.log("Please input the first parameter for the name of the file you wish to write")
    }
    else if (input[2] === undefined) {
        console.log("Please input the second paramater to write the content of the file")
    }
    else{
        fs.writeFile("./asset/" + input[1], input[2], (err) => {
        if (err) {
            console.log(err)
            }
        else {
            console.log("File have been successfully addedd!")
            }
        })
    }
}
else if (input[0] === "read") {
    if (input[1] === undefined){
        console.log("Please input the second parameter for the name of the file you wish to read")
    }
    else {
        fs.readFile("./asset/" + input[1], (err, data) => {
            if (err) {
                console.log(err)
            }
            else if (data) {
                console.log(data.toString())
            }
        })
    }
}
else if (input[0] === "delete"){
    fs.unlink("./asset/" + input[1], (err) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Deleted!")
        }
    })
}
else if (input[0] === "update"){
        if (input[1]  === undefined){
            console.log("Please input the file name you wished to modify in the first parameter")
        }
        else if (input[2] === undefined){
            console.log("Please input the second paratameter to modify the content of the file")
        }
        else {
        fs.appendFile("./asset/" + input[1], input[2], (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated Your File!")
            }
        })
    }
}
else if (input[0] === "help") {
    console.log("please use write, read & delete commmand")

}
else{
    console.log("Unknown command please type " + '"help"' + " for more info")
}
