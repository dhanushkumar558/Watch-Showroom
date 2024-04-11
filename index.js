
        document.addEventListener('scroll',()=>
    {
        const header =document.querySelector('header');
        if(scrollY>100)
        {
            header.classList.add('scrolled');
        }
        else
        {
            header.classList.remove('scrolled');
        }
 });
   





 const observer = new IntersectionObserver((entries) =>
{

    entries.forEach((entry) =>
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });




    




    
});




const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));


  
