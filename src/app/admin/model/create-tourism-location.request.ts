import { RealLocationModel } from "src/app/Core/real-location.model";

export interface TourismLocation{
    id:string|null,
    name:string,
    description:string,
    tourismType:number |null,
    latitude:number | null,
    longitude:number | null,
    file:File | null|string,
    nearestRestourant:RealLocationModel | null,
    nearestMall:RealLocationModel | null,
    nearestHospital:RealLocationModel | null,
    nearestPharmacy:RealLocationModel | null
}