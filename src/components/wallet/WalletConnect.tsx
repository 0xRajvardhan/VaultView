import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const WALLET_FEATURES = [
  {
    title: "Track Balance",
    description: "Monitor your SOL and token holdings in real-time"
  },
  {
    title: "View History",
    description: "Review your transaction history on Solana"
  },
  {
    title: "Secure Access",
    description: "Connect safely with your preferred wallet"
  }
];

const WalletConnect: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full space-y-12"
      >
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex p-4 rounded-full bg-black/5 dark:bg-white/5 mb-6">
            <Wallet className="h-8 w-8 text-black dark:text-white" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight">
            Vault View
          </h1>
          <p className="text-black/60 dark:text-white/60 text-xl max-w-lg mx-auto">
            Your minimal interface to the Solana blockchain
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WALLET_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl hover-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-black/60 dark:text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center pt-8">
            <WalletMultiButton className="!rounded-xl !py-4 !px-8 !text-lg" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletConnect;