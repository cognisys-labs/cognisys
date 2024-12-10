import { PublicKey } from "@solana/web3.js";
import * as nacl from "tweetnacl";
import bs58 from "bs58";

export async function verifyMessageSignature(
  signedMessage: string,
  publicKey: string,
  message: string
): Promise<string | false> {
  try {
    const decodedSignature = bs58.decode(signedMessage);
    const verified = nacl.sign.detached.verify(
      new TextEncoder().encode(message),
      decodedSignature,
      new PublicKey(publicKey).toBytes()
    );

    return verified ? publicKey : false;
  } catch (error) {
    console.error("Error verifying signature:", error);
    return false;
  }
}
