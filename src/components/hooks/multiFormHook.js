import { useState } from 'react';


const useMultiFormHook = (arrayOfComponents) => {
let numberOfComponents = arrayOfComponents.length
const [step, setStep] = useState(0);
let currentComponent = arrayOfComponents[step];

let textsToDisplay = [
                        { 
                            text1: "Welcome! First Things first...", 
                            text2:'You can always change them later'}, 
                        {
                            text1: "Let's setup a home for all your work", 
                            text2: 'You can always create another workspace later'
                        }, 
                        {   
                            text1: 'How are you planning to use Eden?', 
                            text2: "We'll streamline your setuo accordingly."
                        }, 
                        null
                    ]

function next(){
    setStep(step + 1)
}
function back(){
    setStep(step - 1)
}
function goTo(i){
    setStep(i)
}

return [step, numberOfComponents, next, goTo, arrayOfComponents, currentComponent, textsToDisplay[step] ]

}

export default useMultiFormHook;