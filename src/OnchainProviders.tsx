'use client';
// TODO: Why do we need use client here? App breaks without it.

import { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig } from './wagmi';
 
type Props = { children: ReactNode };
 
const queryClient = new QueryClient();
 
function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
        //   apiKey={process.env.CDP_API_KEY}
        apiKey='KkgONfLFgUZKI8nnrttLbI78U2vyhtXg'
          chain={base}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
 
export default OnchainProviders;