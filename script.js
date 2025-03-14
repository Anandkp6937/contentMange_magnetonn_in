// selectors of the form
const createdDate=document.getElementById('createdDate');
const title=document.getElementById('title');
const description=document.getElementById('Description');
const url=document.getElementById('url');
const imageUrl=document.getElementById('imgUrl');
const catagory=document.getElementById('catagory');
const upload=document.getElementById('upload');
const view=document.querySelector('.fa-eye');
const modal=document.querySelector('.modelView');
const dateC=document.querySelector('.dateC')
const titleC=document.querySelector('.titleC');
const descC=document.querySelector('.descC');
const catoC=document.querySelector('.cato');
const urlC=document.querySelector('.urlC');
const imgURl=document.querySelector('.urlimg');
const close=document.querySelector('.fa-circle-xmark');
view.addEventListener('click',()=>{
  modal.style.transform='translateY(0em)';
  dateC.innerHTML=createdDate.value;
  titleC.innerHTML=title.value;
  descC.innerHTML=description.value;
  catoC.innerHTML=catagory.value;
  urlC.innerHTML=url.value;
  urlimg.innerHTML=imageUrl.value;

})
close.addEventListener('click',()=>{
    modal.style.transform='translateY(-80em)';
})
upload.addEventListener('click',(e)=>{
    e.preventDefault();
    if(createdDate.value!='' && url.value!='' && title.value!='' &&  description.value!='' && catagory.value!='')
    {
        let postData={
        CreatedOn:createdDate.value,
        Title:title.value,
        Description:description.value,
        URL:url.value,
        Catagory:catagory.value,
        Imageurl:imageUrl.value
        }
//this data is been sharing to the server
        
    
    if(confirm(`are you sure want to upload`))
        {
            
        fetch('https://magnetonn-in-backend.vercel.app/addnewpost',{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(postData)
            })
            .then(response=>response.json())
            .then(datas=>alert(datas.message))
            .catch((err)=>console.log(err));   

            createdDate.value=''
            title.value=''
            description.value=''
            url.value=''
            catagory.value=''
            imageUrl.value=''

    }
   

    }


    else{
        alert('please fill the fields first')
    }

   
});
