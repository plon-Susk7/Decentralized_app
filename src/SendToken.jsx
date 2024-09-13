import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { Transaction,LAMPORTS_PER_SOL,SystemProgram, PublicKey } from "@solana/web3.js";


export function SendToken(){

    const {connection} = useConnection();
    const wallet = useWallet();

    async function send() {
        let recipient = document.getElementById("public-key-recipient").value;
        let sols = document.getElementById("sols").value;
        
        const transaction = new Transaction();
        transaction.add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(recipient),
            lamports: sols * LAMPORTS_PER_SOL,
        })
        );

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (
        <div>
            <h3>Send Token</h3>
            <input id = "public-key-recipient" type='text' placeholder="public key of recipient"></input>
            <input id ="sols" type="text" placeholder="sols"></input>
            <button onClick={send}>send</button>
        </div>
    )
}