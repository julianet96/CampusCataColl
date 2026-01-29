export interface inscriptionData {
    type:string;
    label:string;
    value:string;
    options:string[]
}


export interface inscriptionStape {
    name:string
    icon:string
    order:number
    inscriptionData: inscriptionData []
}