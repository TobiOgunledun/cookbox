const buttons = document.querySelector('.buttons')

buttons.addEventListener("click", changeCategory );
function changeCategory(e){
    console.log(e.target);
   
    const selectedButton = e.target;
    const selected = selectedButton.classList[0];
    
    const boxModel = document.getElementsByClassName("boxModel");
    const grill = document.getElementsByClassName("grill");
    const soup = document.getElementsByClassName("soup");
    const healthy = document.getElementsByClassName("healthy");



    for(let i=0; i<boxModel.length; i++){
        boxModel[i].style.display = "none";
    }

    switch(selected){
        case "all":
            console.log("all Catege")
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            }
            break;
        case "grill":
            console.log("grill catege")
            for(let i=0; i<grill.length; i++){
                grill[i].style.display = "block";
            }
            break;
        case "soup":
            console.log("soup catege")
            for(let i=0; i<soup.length; i++){
                soup[i].style.display = "block";
            }
            break; 
        case "healthy":
            console.log("healthy catege")
            for(let i=0; i<healthy.length; i++){
                healthy[i].style.display = "block";
            }
            break; 
        case "groc":
            console.log("groceries catege")
            for(let i=0; i<groc.length; i++){
                groc[i].style.display = "block";
            }
            break;   
        default:
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            };
    }
   
}