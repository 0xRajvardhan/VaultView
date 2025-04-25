import React from 'react';
import { motion } from 'framer-motion';

// Mock data for demonstration purposes
const mockTokens = [
  { 
    symbol: "SOL", 
    name: "Solana", 
    balance: 2.5, 
    value: 375.00, 
    change: 3.2, 
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" 
  },
  { 
    symbol: "USDC", 
    name: "USD Coin", 
    balance: 145.75, 
    value: 145.75, 
    change: 0, 
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png" 
  },
  { 
    symbol: "BONK", 
    name: "Bonk", 
    balance: 1250000, 
    value: 25.50, 
    change: -1.8, 
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png" 
  },
];

const TokenHoldings: React.FC = () => {
  const totalValue = mockTokens.reduce((acc, token) => acc + token.value, 0);
  
  return (
    <motion.div 
      className="glass-card rounded-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Token Holdings</h2>
          <p className="text-dark-300">
            Total Value: <span className="text-white font-medium">${totalValue.toFixed(2)}</span>
          </p>
        </div>
        
        <div className="space-y-4">
          {mockTokens.map((token, index) => (
            <motion.div 
              key={index}
              className="p-4 bg-dark-800/50 rounded-lg flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-10 w-10 rounded-full mr-4 overflow-hidden flex-shrink-0">
                <img 
                  src={token.icon} 
                  alt={token.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{token.name}</p>
                    <p className="text-dark-400 text-sm">{token.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${token.value.toFixed(2)}</p>
                    <p className={`text-sm ${token.change >= 0 ? 'text-success-500' : 'text-error-500'}`}>
                      {token.change >= 0 ? '↗' : '↘'} {Math.abs(token.change)}%
                    </p>
                  </div>
                </div>
                
                <div className="mt-2 flex justify-between text-sm">
                  <p className="text-dark-400">
                    Balance: <span className="text-dark-200">{token.balance.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TokenHoldings;