const fs = require("fs")
var input = process.argv.slice(2)
var username = "Jason"
var password = "memek"


// node index.js login <username> <password> read <filePath>
// kalo langsung `node index.js read <filePath>` gini doang, bakal minta login duls dpn nya
// console.log(input)

if (input[0] === 'login' && input[1] === username && input[2] === password) {


    if (input[3] === "write") {
        if (input[4] === undefined){
            console.log("Please input the first parameter for the name of the file you wish to write")
        }
        else if (input[5] === undefined) {
            console.log("Please input the third paramater to write the content of the file")
        }
        else {
            fs.writeFile("./asset/" + input[4], input[5], (err) => {
            if (err) {
                console.log(err)
                }
            else {
                console.log("File have been successfully addedd!")
                }
            })
        }
    }
    else if (input[3] === "read") {
        fs.readFile("./asset/" + input[4], (err, data) => {
            if (err) {
                console.log(err)
            }
            else if (data) {
                console.log(data.toString())
            }
        })
    }
    else if (input[3] === "delete"){
        fs.unlink("./asset/" + input[4], (err) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Deleted!")
            }
        })
    }
    else if (input[3] === "update"){
            if (input[4]  === undefined){
                console.log("Please input the file name you wished to modify in the first parameter")
            }
            else if (input[5] === undefined){
                console.log("Please input the second paratameter to modify the content of the file")
            }
            else {
            fs.appendFile("./asset/" + input[4], input[5], (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Updated Your File!")
                }
            })
        }
    }
}
else if (input[1] !== username && input[2] !== password) {
    console.log("Please input the correct username and password")
}
else if (input[0] === "help") {
    console.log("please use write, read & delete commmand")

}
else if (input[0] === "Exit") {
    console.log(window.stop)
}
else {
    console.log("Unknown command please type " + '"help"' + " for more info")
}


