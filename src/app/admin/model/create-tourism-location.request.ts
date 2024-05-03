import { BudgetModel } from "src/app/Core/model/budget.model";
import { RealLocationModel } from "src/app/Core/real-location.model";

export interface TourismLocation{
    id:string|null,
    name:string,
    description:string,
    tourismType:number |null,
    latitude:number | null,
    longitude:number | null,
    file:File | null|string,
    a:BudgetModel | null,
    b:BudgetModel | null,
    c:BudgetModel | null,
    nearestHotel:RealLocationModel | null,
    nearestRestourant:RealLocationModel | null,
    nearestMall:RealLocationModel | null,
    nearestHospital:RealLocationModel | null,
    nearestPharmacy:RealLocationModel | null
}