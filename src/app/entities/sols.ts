import { Deserializable } from "./deserializable.model";
import { Injectable } from "@angular/core";

@Injectable()
export class Sols implements Deserializable<Sols>{

    public nom : string;
    public carbone : string;
    public azote : string;
    public phosphore : string;
    public ph : string;
    public potassium : string;
    public ordreDeDominanace : number;
    public img: any

   deserialize(input: any): Sols {
       Object.assign(this, input);
       return this;
   }

}