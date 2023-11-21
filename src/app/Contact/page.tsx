import React from 'react'

const page = () => {
  return (
    // <div className="border-2 w-[50%] flex justify-evenly flex-wrap align-middle">
    //   <div className="w-56 h-56 border-2 bg-blue-800"></div>
    //   <div className="w-56 h-56 border-2 bg-blue-800"></div>
      
    // </div>
    <div className="w-[100wh] h-[100vh] small:w-[100%] medium:w-[100%] small:flex flex-wrap justify-center">
      <div className="w-[80%] flex flex-wrap justify-evenly ">
        {/* section 1 */}
        <div className="w-[400px] h-[400px] bg-red-300 rounded-[50px]">
          <div>
            <h1 className="">Contact Information</h1>
            <h3>Say something to start a live chat!</h3>
          </div>
          
        </div>

        {/* section 2 */}
        <div  className="w-[40%] h-[90%] bg-red-300 rounded-[50px]">
          
        </div>
      </div>
    </div>
  )
}

export default page;
