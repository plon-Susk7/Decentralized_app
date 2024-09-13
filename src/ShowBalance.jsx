import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function ShowBalance(){
    
    const {connection} = useConnection();
    const wallet = useWallet();

    const [balance, setBalance] = useState(0);

    async function getBalance(){
        if(wallet.publicKey){
            let balance = await connection.getBalance(wallet.publicKey);
            setBalance(balance/LAMPORTS_PER_SOL);
        }
    }

    getBalance();

    return(
        <div>
            <br></br>
            <span> SOL Balance : </span>
            {!balance ? <span> Loading... </span> : <span> {balance} </span>}
        </div>
    )

}