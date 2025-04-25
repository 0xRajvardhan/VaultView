import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Copy, ExternalLink, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const WalletInfo: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, disconnect } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const fetchBalance = async () => {
    if (!publicKey) return;
    
    try {
      setIsLoading(true);
      const walletBalance = await connection.getBalance(publicKey);
      setBalance(walletBalance / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (publicKey) {
      fetchBalance();
    }
  }, [publicKey, connection]);

  const handleCopyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toString());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const truncatedAddress = publicKey 
    ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
    : '';

  const explorerUrl = publicKey 
    ? `https://explorer.solana.com/address/${publicKey.toString()}?cluster=devnet` 
    : '';

  return (
    <motion.div 
      className="glass-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wallet Info</h2>
          <button 
            onClick={fetchBalance} 
            className="p-2 hover:bg-dark-800 rounded-lg transition-colors"
            disabled={isLoading}
            aria-label="Refresh balance"
          >
            <RefreshCw className={`h-4 w-4 text-dark-300 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Balance */}
          <motion.div 
            className="p-4 bg-gradient-to-r from-dark-800 to-dark-800/50 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-dark-400 text-sm mb-1">Balance</p>
            {balance !== null ? (
              <p className="text-2xl font-bold">
                {balance.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 9 })} SOL
              </p>
            ) : (
              <div className="h-8 w-24 bg-dark-700 animate-pulse rounded"></div>
            )}
          </motion.div>
          
          {/* Address */}
          <div className="p-4 bg-dark-800/50 rounded-lg">
            <p className="text-dark-400 text-sm mb-1">Address</p>
            <div className="flex items-center justify-between">
              <p className="font-mono text-dark-200">{truncatedAddress}</p>
              <div className="flex gap-2">
                <button 
                  onClick={handleCopyAddress}
                  className="p-1.5 hover:bg-dark-700 rounded-md transition-colors"
                  aria-label="Copy address"
                >
                  {copySuccess ? (
                    <span className="text-success-500 text-xs">Copied!</span>
                  ) : (
                    <Copy className="h-4 w-4 text-dark-400" />
                  )}
                </button>
                <a 
                  href={explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:bg-dark-700 rounded-md transition-colors"
                  aria-label="View on Solana Explorer"
                >
                  <ExternalLink className="h-4 w-4 text-dark-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-dark-800 p-4">
        <button 
          onClick={() => disconnect()} 
          className="btn btn-outline w-full"
        >
          Disconnect Wallet
        </button>
      </div>
    </motion.div>
  );
};

export default WalletInfo;