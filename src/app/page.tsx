import Image from "next/image";
import icon1 from "../../public/icon1.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between lg:flex flex-row">
        <div>
          <h1 className="text-5xl">How does this tool Works?</h1>
          <p className="max-w-3xl font-normal font-sans text-2xl mt-8 leading-10">This tool is a comprehensive data-driven tool designed to help students understand the real return on investment (ROI) for studying abroad. It takes into account various factors, including the opportunity cost, actual costs, and potential future earnings, to provide a detailed analysis.        </p>
        </div>
        <div>
          <Image src="https://s3-alpha-sig.figma.com/img/4400/2942/5ea5587c169ec4d135f1f582f9a74966?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUEzuredN7kAQI244Im4bqcJzak1gM9vkyDo7UG-smMNt3taGtZU5qZUgl16SyL76hYrbctGKfMnbxVzK0zZajTN5z9tLlDd8H8Hw3Vj9vRKmDNieE9FlDLvKfM~jo1TB0S1T4C-XmAe7NW8k0HF3MnF9sFJTUgn-JRUeofopfAxPgya~HE3V1j23EL3~IYM24mHzQS14KbSYYyer5HFXZxVaPFhnN6ENp974aLaL7Iqev6-tGfKpcD3TbNev7uIiKNNroWkdnmAI5NSDzUK48B92lhLiWURlgOQhJLoMvcJUY70xMjbxnmEwk9mlAOy532sQk1UgXbkJ4WyNBunUg__" alt="some image" width={450} height={300} />
        </div>
      </div>
      
      <div className="text-center pt-12 my-10">
        <h1 className="text-4xl my-12">Input Parameters</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-y-[120px] gap-x-[65px]">
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Country: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">The tool allows you to select the country where you plan to study.</p>
          </div>
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Loan Amount: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">You can specify the amount of loan you will take for your education abroad.</p>
          </div>
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Expected Salary: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">The salary that one can expect after course completion.</p>
          </div>
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Rate of Interest: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">Enter the interest rate associated with your education loan.</p>
          </div>
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Course Duration: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">Specify the duration of the course you plan to pursue abroad.</p>
          </div>
          <div className="min-w-[400px] min-h-[160px] bg-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center text-xl">Course Field: </h3>
            <Image src={icon1} alt="some image" width={40} height={40} 
              className="absolute right-4 top-4" />
            <p className="font-sans pt-7 text-left px-4 text-lg">The output will depend on the field of your course.</p>
          </div>
        </div>
      </div>

      <div className="my-24">
        <h1 className="text-center text-3xl">Assumptions and Calculations</h1>
      </div>
    </main>
  );
}
