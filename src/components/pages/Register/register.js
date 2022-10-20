import {useState} from 'react';
import React from 'react'
import Button from "../../atoms/button/button";
import Input, { InputWithLabelLeft, InputWithLabel } from "../../atoms/input";
import RegistrationForm from "../../organisms/registrationForm/registrationForm";
import InputContainer from '../../molecules/InputContainer/InputContainer';
import Circle from '../../atoms/circle/circle';
import Card from './../../atoms/card/card';
import Text from './../../atoms/text/text';
import CustomComponent from './../../hoc/customComponent';
import ComponentRenderer from './../../molecules/ComponentRenderer/componentRenderer';
import SimpleCard from './../../molecules/SimpleCard/simpleCard';
import useMultiFormHook from './../../hooks/multiFormHook';
import tickImage from '../../../assets/tick.png'
import team from '../../../assets/team.png'
import person from '../../../assets/person.png'
import Image from '../../atoms/image/image';

const Register = (props) => {
    
    const [formDetails, setFormDetails] = useState({
        'form1' : {userName:'', password: '', errors: []},
        'form2' : {workspaceName:'', workspaceUrl: '', errors: []}, 
        'form3' : {myself: true, team: false, errors: [],} ,
        'form4' : {value:'',  errors: [],}
    })


    const onChange = (e, identifier, step) => {
        
        setFormDetails((prevState)=>{return {...prevState, [step]: {...prevState[step], [identifier]: e.target.value} }})
        console.log("Update", identifier, step)
        
    }   
    const onSelect = (identifier, step) => {
        console.log("HERE", identifier)

        setFormDetails((prevState)=>{
            return {
                            ...prevState, 
                            [step]: {...prevState[step], 
                            'myself':identifier === 'myself',
                            'team': identifier === 'team'
    
    } }})
        console.log("Update")
        
    }   
    
    
    const [step, numberOfComponents, next, goTo, arrayOfComponents, currentComponent, textsToDisplay] = useMultiFormHook([ 
        <InputContainer 
            components={[
                {Component: <InputWithLabel label={"Username"} value={formDetails['form1']['userName']}  onChange={(e)=>onChange(e, "userName", "form1")}/>}, 
                {Component: <InputWithLabel label={"Password"} type="password" value={formDetails['form1']['password']} onChange={(e)=>onChange(e, "password", "form1")}/>}
            ]}  
        />, 
        
        <InputContainer  
        components={[
            {Component: <InputWithLabel label={"Workspace Name"}  value={formDetails['form2']['workspaceName']} onChange={(e)=>onChange(e, "workspaceName", "form2")} step='form2'/>}, 
            {Component: <InputWithLabel  label={"Workspace Url"}  value={formDetails['form2']['workspaceUrl']} onChange={(e)=>onChange(e, "workspaceUrl", "form2")}  step='form2'/>}
        ]}  
        /> ,
        
        <InputContainer
          style={{gridAutoFlow: 'column' }}
          components={[
            {Component: <SimpleCard icon={person} onClick={()=>onSelect('myself', 'form3')} step='form3' value={formDetails['form3']['myself']} header={"For myself"} description={"Write better. Think more clearly. Stay organized."}/>},
            {Component: <SimpleCard icon={team} onClick={()=>onSelect('team', 'form3')} value={formDetails['form3']['team']} header={"With my team"} description={"Wikis, docs, tasks and projects, all in one place"} identifier= {'team'}/>}
          ]}/> , 
        
          <InputContainer 
          style={{display:'grid', justifyItems: 'center'}}
            components={[
                {Component:<Image source={tickImage} alt='tick' style={{height:'100px', width: '100px'}}/>},
                {Component:<Text level={1}>Congratulations Eren</Text> },
                {Component:<Text className="text-gray mb-1" level={6}>You have completed onboarding, you can start using Eden</Text> },
        ]}
          />   
        ]);

    console.log(numberOfComponents)

    console.log(formDetails)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(step === arrayOfComponents.length - 1 ){
            return;
        }
        next()
    }

    const onMoveStep = (i) => {
        goTo(i)
    }

 

    return (
        <div className={props.className}>
        <div className='dot-center mb-3'>
        {arrayOfComponents.map((_, index)=>{
            return <Circle key={index} text={index} onClick={()=>onMoveStep(index)} />
        })}
        </div>
       
            <RegistrationForm className={'center'} onSubmit={onSubmit}>

 
                            <div className={'center-container'}>
                            <div className={'center'}>
                            {textsToDisplay?<Card>
                                    <Text level={1}>{textsToDisplay.text1}</Text>
                                    <Text className="text-center text-gray" level={4}>{textsToDisplay.text2}</Text>
                            </Card>: null }
                            </div>
                            <div className={'center-container'}>
                                {currentComponent}
                                    <Button type="submit" title="Create Work Space"/>
                                </div>

                                </div>
                            

        

            </RegistrationForm>
        
        </div>
            )
            
}

export default Register;