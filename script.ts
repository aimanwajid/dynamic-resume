document.getElementById('resumeForm')?.addEventListener('submit', function(event) {event.preventDefault();
 
   const nameElement = document.getElementById('name')  as HTMLInputElement;
   const emailElement = document.getElementById('email')  as HTMLInputElement;
   const phoneElement = document.getElementById('phone')  as HTMLInputElement;
   const educationElement = document.getElementById('education')  as HTMLInputElement;
   const experienceElement = document.getElementById('experience')  as HTMLInputElement;
   const skillsElement = document.getElementById('skills')  as HTMLInputElement;


      if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

        const name =nameElement . value;
        const email =emailElement . value; 
        const phone =phoneElement . value;
        const educatuon = educationElement . value;
        const experience = experienceElement . value;
        const skills = skillsElement . value; 
   
    

   const resumeOutputElement = document.getElementById('resumeOutput')
   if (resumeOutputElement){
      resumeOutputElement.innerHTML = resumeOutput
   } else {
      console.error('the resume output elements are missing')
   };
      
})