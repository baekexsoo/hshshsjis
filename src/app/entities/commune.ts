import { Deserializable } from "./deserializable.model";
import { Injectable } from "@angular/core";
import { Sols } from "./sols";

@Injectable()
export class Commune implements Deserializable<Commune>{

    public nom : string;
    public listTypeSol : Sols[];

   deserialize(input: any): Commune {
       Object.assign(this, input);
       return this;
   }

}