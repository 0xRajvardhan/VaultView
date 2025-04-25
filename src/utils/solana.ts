import { PublicKey } from '@solana/web3.js';

/**
 * Formats a SOL balance with appropriate decimal places
 */
export const formatSolBalance = (balance: number): string => {
  return balance.toLocaleString(undefined, {
    minimumFractionDigits: 4,
    maximumFractionDigits: 9
  });
};

/**
 * Truncates a Solana public key for display
 */
export const truncatePublicKey = (publicKey: PublicKey | string): string => {
  const key = typeof publicKey === 'string' ? publicKey : publicKey.toString();
  return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
};

/**
 * Creates a Solana Explorer URL for an address or transaction
 */
export const getExplorerUrl = (
  address: string,
  type: 'address' | 'tx' = 'address',
  cluster: 'devnet' | 'testnet' | 'mainnet-beta' = 'devnet'
): string => {
  return `https://explorer.solana.com/${type}/${address}?cluster=${cluster}`;
};

/**
 * Parses an amount in lamports to SOL
 */
export const lamportsToSol = (lamports: number): number => {
  return lamports / 1000000000; // 1 SOL = 10^9 lamports
};

/**
 * Converts SOL to lamports
 */
export const solToLamports = (sol: number): number => {
  return sol * 1000000000;
};