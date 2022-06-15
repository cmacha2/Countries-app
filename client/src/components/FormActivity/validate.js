export default function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Activity name required';
   
    } else if (!/^(?=.{3,20}$)[a-zA-Z]+$/.test(input.name)) {
      errors.name = 'Activity name is invalid, It must only contain letters';
    }
    
    if(!input.duration){
        errors.duration = 'Duration is required'
    }else if(!/^(?=.*[A-Za-z ])(?=.*\d)[A-Za-z \d]{6,}$/.test(input.duration)){
        errors.duration = 'Duration is invalid, minimum one number and 6 letters'
    } 
    
    if(!input.difficulty){
        errors.difficulty = 'Duration is required'
    }/* else if(!/^\+?(0|[1-9]\d*)$/.test(input.difficulty)){
        errors.difficulty = 'Duration is invalid, must be between 1 and 5'
    } */

    if(!input.season){
        errors.season = 'Duration is required'
    }/* else if(!/^\+?(0|[1-9]\d*)$/.test(input.season)){
        errors.season = 'Duration is invalid, must be just seasons of the year'
    } */
    
  
    return errors;
  };
  