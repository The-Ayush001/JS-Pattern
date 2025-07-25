const box = document.querySelector("pre")
function pattern() {
    number = prompt("Enter the number")
    let str = "";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j <= i; j++) {
            str += "*"
            console.log("*")
        }
        str += ("\n")
        console.log("\n");
    }
    console.log(str)
    box.innerHTML = str;
    
        setTimeout(() => {
            if (confirm("Try-Again")) {
                pattern()
            }
        },3000);
}
pattern();