import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import WalletConnect from '../components/wallet/WalletConnect';
import WalletInfo from '../components/wallet/WalletInfo';
import TokenHoldings from '../components/wallet/TokenHoldings';
import TransactionHistory from '../components/wallet/TransactionHistory';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const { connected } = useWallet();

  return (
    <div className="max-w-6xl mx-auto">
      {!connected ? (
        <WalletConnect />
      ) : (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WalletInfo />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TokenHoldings />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TransactionHistory />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;