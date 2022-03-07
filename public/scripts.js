async function getPicUrl(){
                     console.log("inside getPicUrl() funcio");   
    await fetch('https://picsum.photos/80')
    .then((result) => {
        console.log(result.url);
        document.getElementById('picUrl').value = result.url;
    })
    .catch((err) => console.warn(`Failed to fetch Pic: ${err}`));
}
//getPicUrl();

async function deleteUser(id){

await fetch(`/user/delete/${id}`, {method:'DELETE'})
.then((result) => result.json())
.then((data) => window.location.href = data.redirect)
.catch((err) => console.warn(err));
}

function toggleDiv(s){
                            
    const content = document.getElementById(s)
    const state = content.firstElementChild;
    console.log(`running now, current state: ${state.value}`)
   if(state.value === 'retracted'){
       content.classList.remove('retracted');
       state.value = 'expanded'
   }
   else{
       content.classList.add('retracted');
       state.value = 'retracted';
   }
}