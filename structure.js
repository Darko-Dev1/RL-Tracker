let take_turns = 0
let take_title_score = document.querySelector("#hey h2")
let change_title_score = "";
let take_result = document.querySelector("#hey h1")
console.log(take_result.innerHTML)
let score = 0
let shots_taken = 0
function pluss() {
    console.log(take_title_score)

    if (take_title_score.innerHTML === "Select a category to start") {

        score = 0

    } else {

        console.log("hey")

        if (shots_taken > 99) {

            take_result.innerHTML = `${score} / 100`

        } else {
            shots_taken++
            score++


        }
        take_result.innerHTML = `${score} / ${shots_taken}`

    }

}
function minuss() {

    console.log("hey")

    if (take_title_score.innerHTML === "Select a category to start") {

        score = 0

    } else {

        if (score < 1) {

            score = 0
            shots_taken = 0
            take_result.innerHTML = `${score} / ${shots_taken}`

        } else {
            shots_taken--
            score--;
            take_result.innerHTML = `${score} / ${shots_taken}`

        }

    }
}

function misss() {

    if (take_title_score.innerHTML === "Select a category to start") {
        score = 0
    } else {

        if (shots_taken > 99) {

            take_result.innerHTML = `${score} / 100`

        } else {
            shots_taken++


        }
        take_result.innerHTML = `${score} / ${shots_taken}`

    }

}

let take_burger_opt = document.getElementById("menu_burger_opt")
function burger_menu_clicked() {

    if (take_turns === 0) {

        console.log("works?")
        take_burger_opt.style.display = "block"
        setTimeout(() => {
            take_burger_opt.style.left = "00%"
        }, 10)

        console.log("hey")
        take_turns = 1


    } else {
        take_burger_opt.style.left = "100%"
        setTimeout(() => {
                    take_burger_opt.style.display = "none"  
        }, 300)

        take_turns = 0

    }
    console.log(take_turns)


}


let take_plus = document.getElementById("plus")
let take_minus = document.getElementById("minus")

let take_category = document.getElementById("menu_burger_opt")

take_category.addEventListener("click", (event) => {


    console.log(event.target.innerHTML)
    if (event.target.innerHTML === "Shooting Drill") {
        take_burger_opt.style.display = "none"
        take_burger_opt.style.left = "100%"
        take_turns = 0
        take_btn.style.backgroundColor = "white"
        take_title_score.innerHTML = `Scored Goals of 100`
        change_title_score = `Scored Goals of 100`
        shots_taken = 0
        score = 0
        take_score.innerHTML = "0 / 0"


    } else if (event.target.innerHTML === "Flip Reset") {
        take_burger_opt.style.display = "none"
        take_burger_opt.style.left = "100%"
        take_turns = 0
        take_btn.style.backgroundColor = "white"
        take_title_score.innerHTML = `Flip Resets of 100`
        change_title_score = `Flip Resets of 100`
        shots_taken = 0
        score = 0
        take_score.innerHTML = "0 / 0"


    } else if (event.target.innerHTML === "Air Dribble") {

        take_burger_opt.style.display = "none"
        take_burger_opt.style.left = "100%"

        take_turns = 0
        take_btn.style.backgroundColor = "white"
        take_title_score.innerHTML = `Air Dribbles of 100`
        change_title_score = `Air Dribbles of 100`
        shots_taken = 0
        score = 0
        take_score.innerHTML = "0 / 0"


    } else if (event.target.innerHTML === "Flick") {
        take_burger_opt.style.display = "none"
        take_burger_opt.style.left = "100%"
        take_turns = 0
        take_btn.style.backgroundColor = "white"
        take_title_score.innerHTML = `Flicks of 100`
        change_title_score = `Flicks of 100`
        shots_taken = 0
        score = 0
        take_score.innerHTML = "0 / 0"


    }

})

function difficulty_selected() {

}

let take_difficulty = document.getElementById("difficultry_mode")

let take_btn = document.querySelector("#plus")

let take_score = document.querySelector("#hey h1")


take_difficulty.addEventListener("click", (event) => {

    console.log(event.target.innerHTML)

    if (event.target.innerHTML === "Easy") {

        if (change_title_score === "") {
            take_title_score.innerHTML = `Select a category to start`


        } else {

            take_btn.style.backgroundColor = "green"
            take_title_score.innerHTML = `${change_title_score} (${event.target.innerHTML}) `
            shots_taken = 0
            score = 0
            take_score.innerHTML = "0 / 0"
        }



    } else if (event.target.innerHTML === "Medium") {

        if (change_title_score === "") {
            take_title_score.innerHTML = `Select a category to start`


        } else {
            take_btn.style.backgroundColor = "orange"
            take_title_score.innerHTML = `${change_title_score} (${event.target.innerHTML})`
            shots_taken = 0
            score = 0
            take_score.innerHTML = "0 / 0"


        }

    } else {

        console.log(change_title_score)
        if (change_title_score === "") {
            take_title_score.innerHTML = `Select a category to start`


        } else {
            take_btn.style.backgroundColor = "red"
            take_title_score.innerHTML = `${change_title_score} (${event.target.innerHTML})`
            shots_taken = 0
            score = 0
            take_score.innerHTML = "0 / 0"


        }


    }

})

