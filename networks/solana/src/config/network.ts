/**
 * Solana Network Configuration
 */

export interface SolanaNetworkConfig {
  name: string;
  chainId: string;
  rpcEndpoint: string;
  wsEndpoint?: string;
  explorerUrl?: string;
  faucetUrl?: string;
}

export const SOLANA_NETWORKS: Record<string, SolanaNetworkConfig> = {
  mainnet: {
    name: 'Mainnet Beta',
    chainId: 'mainnet-beta',
    rpcEndpoint: 'https://api.mainnet-beta.solana.com',
    wsEndpoint: 'wss://api.mainnet-beta.solana.com',
    explorerUrl: 'https://explorer.solana.com'
  },
  devnet: {
    name: 'Devnet',
    chainId: 'devnet',
    rpcEndpoint: 'https://api.devnet.solana.com',
    wsEndpoint: 'wss://api.devnet.solana.com',
    explorerUrl: 'https://explorer.solana.com?cluster=devnet',
    faucetUrl: 'https://faucet.solana.com'
  },
  testnet: {
    name: 'Testnet',
    chainId: 'testnet',
    rpcEndpoint: 'https://api.testnet.solana.com',
    wsEndpoint: 'wss://api.testnet.solana.com',
    explorerUrl: 'https://explorer.solana.com?cluster=testnet'
  },
  localhost: {
    name: 'Localhost',
    chainId: 'localhost',
    rpcEndpoint: 'http://127.0.0.1:8899',
    wsEndpoint: 'ws://127.0.0.1:8900',
    explorerUrl: 'http://localhost:3000'
  }
};
