console.log("gg")

import * as s from "@saberhq/solana-contrib";
import * as anchor from "@project-serum/anchor";
import {QuarrySDK} from "@quarryprotocol/quarry-sdk";

const makeSdk = (): QuarrySDK => {
        const anchorProvider = anchor.AnchorProvider.env();
        anchor.setProvider(anchorProvider);
        const provider = s.SolanaProvider.load({
        connection: anchorProvider.connection,
        sendConnection: anchorProvider.connection,
        wallet: anchorProvider.wallet,
        opts: anchorProvider.opts,
        });
        return QuarrySDK.load({
        provider,
        });
    };

console.log(makeSdk())