import { Deserializable } from "./deserializable.model";
import { Injectable } from "@angular/core";
import { Commune } from "./commune";

@Injectable()
export class Departement implements Deserializable<Departement>{

    public nom : string;
    public listCommune : Commune[];

   deserialize(input: any): Departement {
       Object.assign(this, input);
       return this;
   }

}