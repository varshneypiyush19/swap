"use client";

import React, { useState } from "react";

const SwapUI = () => {
  const [fromToken, setFromToken] = useState({
    name: "🟣 Polygon",
    amount: "",
    balance: 1.17459,
    color: "bg-purple-600",
  });
  const [toToken, setToToken] = useState({
    name: "🔵 Ethereum",
    amount: "",
    balance: 1.17459,
    color: "bg-blue-600",
  });
  const [price, setPrice] = useState("1 WBTC = XX ETH");
  const [fee, setFee] = useState(102.34);
  const [loading, setLoading] = useState(false);

  const tokenOptions = [
    { name: "🟣 Polygon", color: "bg-purple-600" },
    { name: "🔵 Ethereum", color: "bg-blue-600" },
    { name: "🟡 Bitcoin", color: "bg-yellow-500" },
  ];

  const handleSwap = () => {
    setLoading(true);
    setTimeout(() => {
      setFromToken(toToken);
      setToToken(fromToken);
      setPrice((prevPrice) => {
        const [part1, part2] = prevPrice.split(" = ");
        return `${part2} = ${part1}`;
      });
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  const handleSelectChange = (tokenName, setToken) => {
    const selectedToken = tokenOptions.find(
      (token) => token.name === tokenName
    );
    setToken((prev) => ({
      ...prev,
      name: selectedToken.name,
      color: selectedToken.color,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex border-b border-gray-200 mb-4">
        {["Swap", "Buy", "Sell"].map((tab) => (
          <button
            key={tab}
            className={`w-1/3 py-2 text-center text-sm font-medium ${
              tab === "Swap"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <select
              className="bg-transparent text-sm font-medium"
              value={fromToken.name}
              onChange={(e) => handleSelectChange(e.target.value, setFromToken)}
            >
              {tokenOptions.map((token) => (
                <option key={token.name} value={token.name}>
                  {token.name}
                </option>
              ))}
            </select>
            <div className="text-sm text-gray-500">
              Balance: {fromToken.balance}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 border-b-2 border-gray-300">
            {loading ? (
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : (
              <input
                type="number"
                className="w-full text-right text-lg font-medium border-none focus:outline-none"
                value={fromToken.amount}
                onChange={(e) =>
                  setFromToken({
                    ...fromToken,
                    amount: e.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="text-right text-sm text-gray-500">$10,021.00</div>
        </div>

        <div className="flex justify-center">
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              fromToken.amount
                ? "bg-gray-200 cursor-pointer"
                : "bg-gray-100 cursor-not-allowed"
            }`}
            onClick={fromToken.amount ? handleSwap : null}
            disabled={!fromToken.amount}
          >
            ⇅
          </button>
        </div>

        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <select
              className="bg-transparent text-sm font-medium"
              value={toToken.name}
              onChange={(e) => handleSelectChange(e.target.value, setToToken)}
            >
              {tokenOptions.map((token) => (
                <option key={token.name} value={token.name}>
                  {token.name}
                </option>
              ))}
            </select>
            <div className="text-sm text-gray-500">
              Balance: {toToken.balance}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 border-b-2 border-gray-300">
            {loading ? (
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : (
              <input
                type="number"
                className="w-full text-right text-lg font-medium border-none focus:outline-none"
                value={toToken.amount}
                onChange={(e) =>
                  setToToken({
                    ...toToken,
                    amount: e.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="text-right text-sm text-gray-500">$10,021.00</div>
        </div>

        <div className="p-4 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>Max. Slippage</span>
            <span>0.5%</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Price</span>
            <span>{price}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Fee (0.XX%)</span>
            <span>${fee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Swap Provider</span>
            <span>Decent</span>
          </div>
        </div>
        <button
          className={`w-full py-3 rounded-lg font-medium text-sm ${
            fromToken.amount
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!fromToken.amount}
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default SwapUI;

// import React, { useState } from "react";

// const SwapUI = () => {
//   const [fromToken, setFromToken] = useState({
//     name: "Polygon",
//     amount: "",
//     balance: 1.17459,
//     color: "bg-purple-600",
//   });
//   const [toToken, setToToken] = useState({
//     name: "Ethereum",
//     amount: "",
//     balance: 1.17459,
//     color: "bg-blue-600",
//   });
//   const [price, setPrice] = useState("1 WBTC = XX ETH");
//   const [fee, setFee] = useState(102.34);
//   const [loading, setLoading] = useState(false);

//   const tokenOptions = [
//     { name: "Polygon", color: "bg-purple-600" },
//     { name: "Ethereum", color: "bg-blue-600" },
//     { name: "Bitcoin", color: "bg-yellow-500" },
//   ];

//   const handleSwap = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setFromToken(toToken);
//       setToToken(fromToken);
//       setPrice((prevPrice) => {
//         const [part1, part2] = prevPrice.split(" = ");
//         return `${part2} = ${part1}`;
//       });
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   const handleSelectChange = (tokenName, setToken) => {
//     const selectedToken = tokenOptions.find(
//       (token) => token.name === tokenName
//     );
//     setToken((prev) => ({
//       ...prev,
//       name: selectedToken.name,
//       color: selectedToken.color,
//     }));
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
//       <div className="flex border-b border-gray-200 mb-4">
//         {["Swap", "Buy", "Sell"].map((tab) => (
//           <button
//             key={tab}
//             className={`w-1/3 py-2 text-center text-sm font-medium ${
//               tab === "Swap"
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="space-y-4">
//         <div className="p-4 border border-gray-300 rounded-lg">
//           <div className="flex justify-between items-center">
//             <select
//               className="bg-transparent text-sm font-medium"
//               value={fromToken.name}
//               onChange={(e) => handleSelectChange(e.target.value, setFromToken)}
//             >
//               {tokenOptions.map((token) => (
//                 <option key={token.name} value={token.name}>
//                   {token.name}
//                 </option>
//               ))}
//             </select>
//             <div className="text-sm text-gray-500">
//               Balance: {fromToken.balance}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             {loading ? (
//               <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
//             ) : (
//               <input
//                 type="number"
//                 className="w-full text-right text-lg font-medium border-none focus:outline-none"
//                 value={fromToken.amount}
//                 onChange={(e) =>
//                   setFromToken({
//                     ...fromToken,
//                     amount: e.target.value,
//                   })
//                 }
//               />
//             )}
//             <button className="ml-2 text-blue-500 text-sm font-medium">
//               Max
//             </button>
//           </div>
//           <div className="text-right text-sm text-gray-500">$10,021.00</div>
//         </div>

//         <div className="flex justify-center">
//           <button
//             className={`w-8 h-8 flex items-center justify-center rounded-full ${
//               fromToken.amount
//                 ? "bg-gray-200 cursor-pointer"
//                 : "bg-gray-100 cursor-not-allowed"
//             }`}
//             onClick={fromToken.amount ? handleSwap : null}
//             disabled={!fromToken.amount}
//           >
//             ⇅
//           </button>
//         </div>

//         <div className="p-4 border border-gray-300 rounded-lg">
//           <div className="flex justify-between items-center">
//             <select
//               className="bg-transparent text-sm font-medium"
//               value={toToken.name}
//               onChange={(e) => handleSelectChange(e.target.value, setToToken)}
//             >
//               {tokenOptions.map((token) => (
//                 <option key={token.name} value={token.name}>
//                   {token.name}
//                 </option>
//               ))}
//             </select>
//             <div className="text-sm text-gray-500">
//               Balance: {toToken.balance}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             {loading ? (
//               <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
//             ) : (
//               <input
//                 type="number"
//                 className="w-full text-right text-lg font-medium border-none focus:outline-none"
//                 value={toToken.amount}
//                 onChange={(e) =>
//                   setToToken({
//                     ...toToken,
//                     amount: e.target.value,
//                   })
//                 }
//               />
//             )}
//           </div>
//           <div className="text-right text-sm text-gray-500">$10,021.00</div>
//         </div>

//         <div className="p-4 text-sm text-gray-500">
//           <div className="flex justify-between">
//             <span>Max. Slippage</span>
//             <span>0.5%</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Price</span>
//             <span>{price}</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Fee (0.XX%)</span>
//             <span>${fee.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Swap Provider</span>
//             <span>Decent</span>
//           </div>
//         </div>
//         <button
//           className={`w-full py-3 rounded-lg font-medium text-sm ${
//             fromToken.amount
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-500 cursor-not-allowed"
//           }`}
//           disabled={!fromToken.amount}
//           onClick={handleSwap}
//         >
//           Swap
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwapUI;

// import React, { useState } from "react";

// const SwapUI = () => {
//   const [fromToken, setFromToken] = useState({
//     name: "Polygon",
//     amount: 250,
//     balance: 1.17459,
//     color: "bg-purple-600",
//   });
//   const [toToken, setToToken] = useState({
//     name: "Ethereum",
//     amount: 4.2211,
//     balance: 1.17459,
//     color: "bg-blue-600",
//   });
//   const [price, setPrice] = useState("1 WBTC = XX ETH");
//   const [fee, setFee] = useState(102.34);

//   const handleSwap = () => {
//     setFromToken(toToken);
//     setToToken(fromToken);

//     setPrice((prevPrice) => {
//       const [part1, part2] = prevPrice.split(" = ");
//       return `${part2} = ${part1}`;
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
//       <div className="flex border-b border-gray-200 mb-4">
//         {["Swap", "Buy", "Sell"].map((tab) => (
//           <button
//             key={tab}
//             className={`w-1/3 py-2 text-center text-sm font-medium ${
//               tab === "Swap"
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="space-y-4">
//         <div className="p-4 border border-gray-300 rounded-lg">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className={`w-6 h-6 ${fromToken.color} rounded-full`}></div>
//               <span className="text-sm font-medium">{fromToken.name}</span>
//             </div>
//             <div className="text-sm text-gray-500">
//               Balance: {fromToken.balance}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             <input
//               type="number"
//               className="w-full text-right text-lg font-medium border-none focus:outline-none"
//               value={fromToken.amount}
//               onChange={(e) =>
//                 setFromToken({
//                   ...fromToken,
//                   amount: parseFloat(e.target.value) || 0,
//                 })
//               }
//             />
//             <button className="ml-2 text-blue-500 text-sm font-medium">
//               Max
//             </button>
//           </div>
//           <div className="text-right text-sm text-gray-500">$10,021.00</div>
//         </div>

//         <div className="flex justify-center">
//           <button
//             className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
//             onClick={handleSwap}
//           >
//             ⇅
//           </button>
//         </div>

//         <div className="p-4 border border-gray-300 rounded-lg">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className={`w-6 h-6 ${toToken.color} rounded-full`}></div>
//               <span className="text-sm font-medium">{toToken.name}</span>
//             </div>
//             <div className="text-sm text-gray-500">
//               Balance: {toToken.balance}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             <input
//               type="number"
//               className="w-full text-right text-lg font-medium border-none focus:outline-none"
//               value={toToken.amount}
//               onChange={(e) =>
//                 setToToken({
//                   ...toToken,
//                   amount: parseFloat(e.target.value) || 0,
//                 })
//               }
//             />
//           </div>
//           <div className="text-right text-sm text-gray-500">$10,021.00</div>
//         </div>

//         <div className="p-4 text-sm text-gray-500">
//           <div className="flex justify-between">
//             <span>Max. Slippage</span>
//             <span>0.5%</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Price</span>
//             <span>{price}</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Fee (0.XX%)</span>
//             <span>${fee.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mt-1">
//             <span>Swap Provider</span>
//             <span>Decent</span>
//           </div>
//         </div>
//         <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium text-sm">
//           Swap
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwapUI;
