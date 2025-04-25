import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Moon, Sun } from 'lucide-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 transition-colors duration-300">
              <Wallet className="h-6 w-6 text-black dark:text-white transition-colors duration-300" />
            </div>
            <h1 className="text-xl font-bold text-black dark:text-white transition-colors duration-300">
              Vault View
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-white transition-colors duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-black transition-colors duration-300" />
              )}
            </button>
            <div className='hidden md:block'>
            <WalletMultiButton className="!bg-black dark:!bg-white !text-white dark:!text-black hover:!bg-black/90 dark:hover:!bg-white/90 !rounded-lg !py-2 !px-4 !transition-colors !duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;