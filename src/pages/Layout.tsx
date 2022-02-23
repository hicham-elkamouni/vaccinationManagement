import { NextPrevBtn, Age, ChoiceShot, DiseaseOrTreatments, SideEffects, UserFormCIN, UserInfoValidation } from "../components"
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import axios from 'axios';


const Layout = () => {
    const steps = ['Age', 'Vaccine', "CIN", "Validation"];
    const [age, setAge] = useState<number>(0);
    const [activeStep, setActiveStep] = useState<number>(1)
    const [shot, setShot] = useState<number>(0)
    const [diseaseOrTreatments, setDiseaseOrTreatments] = useState<boolean>(false)
    const [sideEffects, setSideEffects] = useState<boolean>(false)
    const [cin, setCin] = useState<string | null>(null)
    const handleNextStep = () => {

        switch (activeStep) {

            case 1:
                if (age >= 12) {

                    setActiveStep(activeStep + 1)
                } else {
                    console.log("nn");

                }
                break;
            case 2:
                if (shot != 0) {
                    setActiveStep(activeStep + 1)
                } else {
                    console.log("nn")

                }
                break;
            case 3:
                if (cin != null) {
                    axios.get(`http://localhost:8000/api/user/check/${cin}/${shot}`)
                    .then((res) => {
                        if(res.data.next){
                            setActiveStep(activeStep + 1)
                            console.log("res")
                        }else{

                            console.log("axios nn")
                        }
                    }).catch((e) => {
                        console.log(e.message)
                    })
                } else {
                    console.log("nn")

                }

        }
    }
    return (
        <div className=" flex justify-center items-center">
            <div className="  drop-shadow-2xl h-100 md:w-2/3 lg:w-1/2 w-full bg-sky-100  flex flex-col justify-center items-center rounded">
                <Box className="mt-3" sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep - 1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <div className="h-4/5 w-4/5 flex flex-col w-full h-full items-center  justify-center">
                    {activeStep == 1 && <Age setAge={setAge} />}
                    {activeStep == 2 && <ChoiceShot setShot={setShot} shot={shot} />}
                    {activeStep == 2 && shot == 1 ? <DiseaseOrTreatments setDiseaseOrTreatments={setDiseaseOrTreatments} diseaseOrTreatments={diseaseOrTreatments} /> : null}
                    {activeStep == 2 && (shot == 2 || shot == 3) ? <SideEffects setSideEffects={setSideEffects} sideEffects={sideEffects} /> : null}
                    {activeStep == 3 && <UserFormCIN cin={cin} setCin={setCin} />}
                    {activeStep == 4 && <UserInfoValidation />}
                </div>
                <div className="flex w-3/5 justify-between mb-5">
                    <div onClick={() => setActiveStep(activeStep - 1)}>
                        {activeStep > 1 && < NextPrevBtn name="Previous" />}
                    </div>
                    <div onClick={() => handleNextStep()}>
                        {activeStep < steps.length && <NextPrevBtn name="Next" />}
                    </div>
                    <div onClick={() => console.log("test")}>
                        {activeStep === 4 && <NextPrevBtn name="Submit" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Layout }