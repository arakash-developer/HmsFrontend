import { Link } from "react-router";

const NotFound = () => {
  return <>
  
          {/* <!-- Not Found --> */}
        <div className="bg-white dark:bg-[#0a0e19] py-[30px] h-screen overflow-x-hidden">
            <div className="w-full h-full table">
                <div className="table-cell align-middle">
                    <div className="mx-auto max-w-[960px] text-center">
                        <img src="/images/error.png" className="inline-block" alt="error-image" />
                        <h4 className="text-[19px] md:text-[21px] mt-[25px] md:mt-[33px] mb-[13px]">
                            Looks like we did not find this page, please try again later.
                        </h4>
                        <p>
                            But no worries! Our team is looking ever where while you wait safely.
                        </p>
                        <Link to="/" className="inline-block font-medium rounded-md md:text-md mt-[2px] md:mt-[10px] py-[12px] px-[25px] text-white bg-primary-500 transition-all hover:bg-primary-400">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Not Found --> */}
  
  </>;
};

export default NotFound;
