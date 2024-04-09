
        document.addEventListener('scroll',()=>
    {
        const header =document.querySelector('header');
        if(scrollY>0)
        {
            header.classList.add('scrolled');
        }
        else
        {
            header.classList.remove('scrolled');
        }










    });


  
