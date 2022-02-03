import React from "react";

const Transactions = () => {
    return ( 
        <div className="flex h-screen bg-gray-200">
        <div className="w-full max-w-xs m-auto bg-gray-50 rounded p-5">
          <div className=" text-blue-500 ">
            <h2>New Transaction</h2>
          </div>
          <div>
            <form>
                <label className="block mb-2 text-cyan-400" htmlFor="username">Sender</label>
                <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 "  type="text" name="sender"/>
                <label className="block mb-2 text-cyan-400" htmlFor="username">Reciever</label>
                <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 "  type="text" name="reciever"/>
                <label className="block mb-2 text-cyan-400" htmlFor="username">exchange</label>
                <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 "  type="text" name=""/>

            {/* Source currency, exchange rate, target currency */}

                <label className="block mb-2 text-cyan-400" htmlFor="username">Amount</label>
                <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 "  type="number" name="amount"/>

            </form>
          </div>  
          </div>        
        </div>
     );
}
 
export default Transactions;