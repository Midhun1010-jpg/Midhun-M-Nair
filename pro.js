alert("highly prohibited!");
function showAlert() {
        
    }

    const btn=document.grtElementbyid("btn1")

    btn.addEventListener('click',function handleClick(event){
        Event.preventDefault();
        const name1=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;

        console.log("button clicked");
        console.log(name1,email,pass)
    })