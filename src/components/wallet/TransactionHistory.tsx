import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, RefreshCcw, ExternalLink } from 'lucide-react';

// Mock transaction data for demonstration
const mockTransactions = [
  {
    id: 'tx1',
    type: 'send',
    amount: 0.25,
    token: 'SOL',
    address: '7FL2CQ5YT1N7DLC1zWxKPZxJRZUmYjXKLTLvxNL5mVPr',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    status: 'confirmed'
  },
  {
    id: 'tx2',
    type: 'receive',
    amount: 125.5,
    token: 'USDC',
    address: '4Zx9MqgU4NVXFCt1sakn2fY9wPjWVh5YXXQBdiAHv3yQ',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: 'confirmed'
  },
  {
    id: 'tx3',
    type: 'swap',
    amount: 0.5,
    token: 'SOL',
    toAmount: 75,
    toToken: 'USDC',
    address: 'Jupiter Aggregator',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: 'confirmed'
  },
  {
    id: 'tx4',
    type: 'receive',
    amount: 500000,
    token: 'BONK',
    address: '8SRD2vWJnM3a6mwRQSiNYwWkFwKHPCNxpXr8XkwHf2WB',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    status: 'confirmed'
  },
];

const TransactionHistory: React.FC = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTruncatedAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send':
        return <ArrowUpRight className="h-4 w-4 text-error-500" />;
      case 'receive':
        return <ArrowDownLeft className="h-4 w-4 text-success-500" />;
      case 'swap':
        return <RefreshCcw className="h-4 w-4 text-primary-500" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  const getTransactionLabel = (tx: any) => {
    switch (tx.type) {
      case 'send':
        return `Sent ${tx.amount} ${tx.token} to ${getTruncatedAddress(tx.address)}`;
      case 'receive':
        return `Received ${tx.amount} ${tx.token} from ${getTruncatedAddress(tx.address)}`;
      case 'swap':
        return `Swapped ${tx.amount} ${tx.token} for ${tx.toAmount} ${tx.toToken}`;
      default:
        return 'Unknown transaction';
    }
  };

  return (
    <motion.div 
      className="glass-card rounded-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-dark-800">
                <th className="pb-3 text-dark-400 font-medium">Type</th>
                <th className="pb-3 text-dark-400 font-medium">Transaction</th>
                <th className="pb-3 text-dark-400 font-medium text-right">Date</th>
                <th className="pb-3 text-dark-400 font-medium text-right">Status</th>
                <th className="pb-3 text-dark-400 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx, index) => (
                <motion.tr 
                  key={tx.id}
                  className="border-b border-dark-800/50 hover:bg-dark-800/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-dark-800">
                        {getTransactionIcon(tx.type)}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-dark-200">
                    {getTransactionLabel(tx)}
                  </td>
                  <td className="py-4 text-dark-400 text-right">
                    {formatDate(tx.date)}
                  </td>
                  <td className="py-4 text-right">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-success-500/10 text-success-500">
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <a 
                      href={`https://explorer.solana.com/tx/${tx.id}?cluster=devnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex p-1.5 hover:bg-dark-700 rounded transition-colors"
                      aria-label="View on Solana Explorer"
                    >
                      <ExternalLink className="h-4 w-4 text-dark-400" />
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionHistory;