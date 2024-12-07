// selectors of the form
const createdDate=document.getElementById('createdDate');
const title=document.getElementById('title');
const description=document.getElementById('Description');
const url=document.getElementById('url');
const catagory=document.getElementById('catagory');
const upload=document.getElementById('upload');
const view=document.querySelector('.fa-eye');
const modal=document.querySelector('.modelView');

view.addEventListener('click',()=>{
  modal.style.display='block'
    
})
upload.addEventListener('click',(e)=>{
    e.preventDefault();

    let postData={
        CreatedOn:createdDate.value,
        Title:title.value,
        Description:description.value,
        URL:url.value,
        Catagory:catagory.value
    }

    fetch('https://magnetonn-in-backend.vercel.app/addnewpost',{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(postData)
    })
    .then(console.log('uploaded'))
    .catch((err)=>console.log(err));
});
