/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";


// Types
interface Protocol {
  name: string;
  symbol: string;
  tvl: number;
  change_1d: number;
  change_7d: number;
  chainTvls: {
    Starknet: number;
  };
  chains: string[];
  logo: string;
  url: string;
}

interface StarknetMetrics {
  starknetData: {
    market_data: {
      current_price: { usd: number };
      circulating_supply: number;
      total_supply: number;
      total_volume: { usd: number };
      ath: { usd: number };
      atl: { usd: number };
      market_cap: { usd: number };
    };
  };
  protocols: number;
  topProtocol: {
    name: string;
    tvl: number;
  };
}

interface MetricRowProps {
  label: string;
  value: string | number;
  formatter?: (value: number) => string;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, formatter = (v) => String(v) }) => (
  <div className="flex justify-between items-center">
    <p className="font-medium">{label}</p>
    <p className="text-[#BCD5FF] text-[20px]"> - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
    <div className="flex gap-2">
      <p className="font-medium">
        {typeof value === 'number' ? formatter(value) : value}
      </p>
    </div>
  </div>
);

// API Functions with improved error handling
async function fetchStarknetProtocols(): Promise<Protocol[]> {
  const response = await fetch('https://api.llama.fi/protocols');
  if (!response.ok) {
    throw new Error(`Failed to fetch protocols: ${response.statusText}`);
  }
  const data: Protocol[] = await response.json();
  return data.filter(protocol => 
    protocol.chains.includes('Starknet') || protocol.chains.includes('starknet')
  );
}


async function fetchStarknetData(): Promise<any> {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/starknet', {
    headers: {
      'Content-Type': 'application/json',
      'x-cg-demo-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Starknet data: ${response.statusText}`);
  }
  return response.json();
}

const formatNumber = (num: number): string => {
  if (!num) return '0';
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
  return num.toFixed(2);
};

const formatUSD = (num: number): string => `$ ${formatNumber(num)}`;

const Prices = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Starknet's Key Metrics");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<StarknetMetrics | null>(null);
  const [protocols, setProtocols] = useState<Protocol[]>([]);

  const categories = [
    "Starknet's Key Metrics", 
    "Starknet's Defi Protocols", 
    "Starknet's NFT Collections"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [protocolsData, tvlData] = await Promise.all([
          fetchStarknetProtocols(),
          fetchStarknetData()
        ]);

        const sortedByTVL = [...protocolsData].sort((a, b) => 
          (b.chainTvls?.Starknet || 0) - (a.chainTvls?.Starknet || 0)
        );

        setMetrics({
          starknetData: tvlData,
          protocols: protocolsData.length,
          topProtocol: {
            name: sortedByTVL[0]?.name || '',
            tvl: sortedByTVL[0]?.chainTvls?.Starknet || 0
          }
        });

        setProtocols(protocolsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderMetrics = () => {
    if (!metrics?.starknetData.market_data) return null;

    const metricsData = metrics.starknetData.market_data;
    
    const rows = [
     
      { label: '$STRK Price', value: metricsData.current_price.usd, formatter: formatUSD },
      { label: 'All Time High', value: metricsData.ath.usd, formatter: formatUSD },
      { label: 'All Time Low', value: metricsData.atl.usd, formatter: formatUSD },
      { label: 'Market Cap', value: metricsData.market_cap.usd, formatter: formatUSD },
      { label: 'Circulating Supply', value: metricsData.circulating_supply, formatter: formatUSD },
      { label: 'Total Supply', value: metricsData.total_supply, formatter: formatUSD },
      { label: 'Total Trading Volume', value: metricsData.total_volume.usd, formatter: formatUSD },
      { label: 'Total Value Locked', value: '-' },
    ];

    return (
      <div className="flex flex-col gap-4 w-full px-8 py-4">
        {rows.map((row, index) => (
          <MetricRow 
            key={index}
            label={row.label}
            value={row.value}
            formatter={row.formatter}
          />
        ))}
      </div>
    );
  };

  const renderProtocols = () => (
    <div className="overflow-x-auto w-full">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="text-left border-b">
            <th className="py-4 px-4">Protocol</th>
            <th className="py-4 px-4">TVL</th>
            <th className="py-4 px-4">1d Change</th>
            <th className="py-4 px-4">7d Change</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol) => (
            <tr key={protocol.name} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  {protocol.logo && (
                    <Image 
                      src={protocol.logo} 
                      alt={protocol.name} 
                      width={24} 
                      height={24} 
                      className="rounded-full"
                    />
                  )}
                  <div className="font-medium">{protocol.name}</div>
                </div>
              </td>
              <td className="py-4 px-4">${formatNumber(protocol.chainTvls?.Starknet || 0)}</td>
              <td className={`py-4 px-4 ${protocol.change_1d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {protocol.change_1d?.toFixed(2)}%
              </td>
              <td className={`py-4 px-4 ${protocol.change_7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {protocol.change_7d?.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-96">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="mx-4 p-4 text-red-500 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      );
    }

    switch (activeCategory) {
      case "Starknet's Key Metrics":
        return renderMetrics();
      case "Starknet's Defi Protocols":
        return renderProtocols();
      case "Starknet's NFT Collections":
        return (
          <div className="mx-auto p-4 text-blue-500 bg-blue-50 border border-blue-200 rounded-lg">
            NFT data coming soon
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Navbar />
      <div className="py-6 px-4 mt-32 w-[85%]">
        <h2 className="text-4xl text-primary font-thin">Prices</h2>
        <div className="relative w-full min-h-[509px] rounded-2xl py-4 px-4 my-6 border border-[#BCD5FF]">
          <div className="w-[65%] h-24 bg-white py-2 px-2 rounded-full absolute -top-12 left-[24%] border border-[#BCD5FF] flex justify-between">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-12 py-2 rounded-full text-xl w-[30%] transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#BCD5FF]"
                    : "hover:bg-[#BCD5FF]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-12 w-full flex flex-col items-center p-4">
            {renderContent()}
          </div>
        </div>
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Prices;