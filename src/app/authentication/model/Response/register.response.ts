export interface StudentRegisterResponse{
    value:{
        userId:string,
        role:string,
        username:string,
        jwtToken:string,
        type:number
    }
}

export interface DonorRegisterResponse{
    value:{
        userId:string,
        role:string,
        username:string,
        jwtToken:string
    }
}