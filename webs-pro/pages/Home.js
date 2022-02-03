import React from "react";
import Link from "next/link";

const HomePage = () => {
    return ( 
        <div className="container mt-6 px-1">
          <div className="flex  mx-1 border-b-2 border-gray-300">
                <h2 className="  text-cyan-300">Transactions</h2>
                <Link href='/transactions'><a className="ml-auto bg-blue-400 px-2 text-white hover:bg-blue-700 rounded py-1 mb-6 font-bold">New Transactions</a></Link>
          </div> 
          <div >
              <table className="table-fixed">
                <thead>
                    <tr>
                        <th>ID</th>                        
                        <th>From</th>
                        <th>To</th>
                        <th>Value</th>
                        <th>Currency</th>
                        <th>Created AI</th>
                        <th>Updated AI</th>
                    </tr>
                </thead>
                  <tbody>
                      <tr>
                          <td>2</td>                 
                          <td>Kogi</td>
                          <td>You</td>
                          <td>+500.0</td>
                          <td>EUR</td>
                          <td>April 16, 2019 17:37</td>
                          <td>April 16, 2019 17:37</td>
                          
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
     );
}
 
export default HomePage;