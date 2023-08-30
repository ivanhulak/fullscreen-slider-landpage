function loader(){
   const loader = document.getElementById('loader');

   window.addEventListener('load', () => {
      setTimeout(() => {
         loader.classList.add('loader-wrapper--hiden');
      }, 1000) 
   })
}

export default loader;