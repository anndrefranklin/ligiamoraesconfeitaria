

import { Adicionais } from "../components/Adicionais";
import { Bolos } from "../components/Bolos";
import { Kits } from "../components/Kits";
import { RedesSociais } from "../components/RedesSociais";

export function Cardapio() {
    return (
        <div>
            <Bolos />
            <Kits />
            <Adicionais/>  
            <RedesSociais /> 
        </div>
    )     
}