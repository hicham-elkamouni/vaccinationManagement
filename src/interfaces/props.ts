export interface headerProps {
    setTakeShot: (val: boolean) => void;
    takeShot: boolean;
}
export interface AgeProps {
    setAge: (val: string | null) => void;
}
export interface ShotProps {
    setShot: (val: number) => void;
    shot: number
}
export interface DiseaseOrTreatmentsProps {
    setDiseaseOrTreatments: (val: boolean) => void;
    diseaseOrTreatments: boolean;
}
export interface NextPrevBtnProps {
    name: string
}