import React from 'react';
function Page() {
  return (
    <div className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">We Are Conserving Our Heritage Join us in Our Mission</p>
      </div>
      
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src="https://tse3.mm.bing.net/th?id=OIP.PSiEDFtUdbyRmZ2uqTiGuAAAAA&pid=Api&P=0&h=180" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-2">Venus Chaudhary</h3>
          <p className="text-gray-600">Developer</p>
        </div>
        
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src="https://tse1.mm.bing.net/th?id=OIP.53tpipDfpRLX8XWq8Z-egQHaHZ&pid=Api&P=0&h=180" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vidhi Walia</h3>
          <p className="text-gray-600">Developer</p>
        </div>
        
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src="https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-2">Om chillure</h3>
          <p className="text-gray-600">Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Page;