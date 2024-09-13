

import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';




function App() {

  return (
    // <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/cQZsSss5NGAllOlVXMk0Vy9d85n8RDmO"}>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                <div>
                   <h1>Creating First De-Centralized Application</h1>
                </div>
                <Airdrop/>
                { /* Your app's components go here, nested within the context providers. */ }
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);
}

export default App
