export interface SeedCar {
   model: string;
   type: string;
   fuelType: string;
   price: string;
   stock: number;
   image: string;
   brand: string;
   portraitImage: string;
   sales?: number;
}
export interface ReqWithToken extends Request {
   uid?: string;
   name?: string;
}
