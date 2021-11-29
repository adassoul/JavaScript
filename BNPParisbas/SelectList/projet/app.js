const selectedList = document.querySelectorAll(".selected");
const optionsContainerList = document.querySelectorAll(".options-container");
const optionsList = document.querySelectorAll(".option");
var buttonsClicked = new Array(optionsContainerList.length).fill(0);
// buttonsClicked[0]=1;
var avancement = document.getElementById('avancement');


//to show or to hide quetions
const toShowQuestions = document.querySelectorAll(".to-show"); 

//enabling showing
const optionsEnablingQuestions = document.querySelectorAll(".one .option.showing"); 
//disabling showing
const optionsDisablingShowing = document.querySelectorAll(".one .option.hiding")

// Testing 
const haha = 2;


optionsEnablingQuestions.forEach((opt, indexOpt )=>{
    // console.log(opt);
    opt.addEventListener("click", () => {
        toShowQuestions.forEach((sho, indexSho) => {
            sho.classList.remove("not-shown");
            console.log(sho);
            // haha = haha + 2;
        })
    })
})
optionsDisablingShowing.forEach(opt => {
    opt.addEventListener("click", ()=>{
        toShowQuestions.forEach((sho, indexSho) => {
            sho.classList.add("not-shown");
            console.log(sho);
        })
    })
})

// if a selected.option is clicked, puts 1 in buttonsClicked[selected.idex]
selectedList.forEach((selected, index) => {
    let possibleOptions = selected.parentNode.querySelectorAll(".option");
    // console.log(possibleOptions);
    possibleOptions.forEach((option, index2) => {
        option.addEventListener("click", () => {
            buttonsClicked[index]=1;
            console.log(buttonsClicked);
            })
        })
})

// if a selected is clicked, checks if the previous selected was clicked
selectedList.forEach((selected, index) => {  
    selected.addEventListener("click", () => {
        if (((index>0) && buttonsClicked[index - 1])||index ==0){
            optionsContainerList[index].classList.toggle("active");
        }
    });
})


// if an option is clicked, puts option.label.innerHTML in selected.innerHTML and hides optionsContainer
optionsList.forEach((option, index) => {
    option.addEventListener("click", () => {
        
        let selected = option.parentNode.parentNode.querySelector(".selected");
        let optionsContainer = option.parentNode;
        selected.innerHTML = option.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");

        // avancement.innerHTML = "haha";
    })
})