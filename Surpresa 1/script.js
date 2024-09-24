let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () { 
    let question = document.getElementById("question");
    let message = document.getElementById("answer");
    
    card.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8G832QKA4dyasOmtrM4vubrDVYFN3iS9Ew&s')";
    question.style.display = "none";
    question.style.display = "flex";
});

//movimento alatorio no botão 'não'
document.querySelector("#no").addEventListener('mouseover' , function () {
    let width = window.innerWidth - 30;
    let height = window.innerHeight - 30;

    this.style.position = 'absolute'
    this.style.top = Math.random() * width + 'px'
    this.style.left = Math. random() * height + 'px'
});
