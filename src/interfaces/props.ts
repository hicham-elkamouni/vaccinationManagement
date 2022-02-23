export interface headerProps {
    setTakeShot: (val: boolean) => void;
    takeShot: boolean;
}
export interface AgeProps {
    setAge: (val: number) => void;
}
export interface ShotProps {
    setShot: (val: number) => void;
    shot: number
}
export interface DiseaseOrTreatmentsProps {
    setDiseaseOrTreatments: (val: boolean) => void;
    diseaseOrTreatments: boolean;
}
export interface SideEffectsProps {
    setSideEffects: (val: boolean) => void;
    sideEffects: boolean;
}
export interface NextPrevBtnProps {
    name: string
}
export interface SnackBarProps {
    text: string,
    color : string,
    state : boolean,
    setState : Function
}