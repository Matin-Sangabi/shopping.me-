const TermOfServices = ({setTerms}) => {
    return (
      <div className="">
        <div className="w-screen  h-full fixed top-0 left-0 opacity-60 bg-gray-600 z-10"></div>
        <div className="max-w-lg mx-auto text-slate-900 absolute inset-0 m-3 z-20 bg-slate-50 shadow-2xl rounded-lg p-4 overflow-auto">
          <h1 className="text-center font-bold font-xl ">
            TERMS OF SERVICE AGREEMENT
          </h1>
          <p>
            PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY
            ACCESSING OR USING OUR SITES AND OUR SERVICES, YOU HEREBY AGREE TO
            BE BOUND BY THE TERMS AND ALL TERMS INCORPORATED HEREIN BY
            REFERENCE. IT IS THE RESPONSIBILITY OF YOU, THE USER, CUSTOMER, OR
            PROSPECTIVE CUSTOMER TO READ THE TERMS AND CONDITIONS BEFORE
            PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF
            THE TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITES
            OR OUR SERVICES. THIS TERMS OF SERVICE AGREEMENT IS EFFECTIVE AS OF{" "}
          </p>
          <h2 className="font-bold font-xl">
            DESCRIPTION OF WEBSITE SERVICES OFFERED
          </h2>
          <p>
            Any and all visitors to our site shall be deemed as "users" of the
            herein contained Services provided for the purpose of this TOS. The
            user acknowledges and agrees that the Services provided and made
            available through our website and applications, which may include
            some mobile applications and that those applications may be made
            available on various social media networking sites and numerous
            other platforms and downloadable programs, are the sole property of
            ________________________. At its discretion,
            ________________________ may offer additional website Services
            and/or products, or update, modify or revise any current content and
            Services, and this Agreement shall apply to any and all additional
            Services and/or products and any and all updated, modified or
            revised Services unless otherwise stipulated.
            ________________________ does hereby reserve the right to cancel and
            cease offering any of the aforementioned Services and/or products.
            You, as the end user acknowledge, accept and agree that
            ________________________ shall not be held liable for any such
            updates, modifications, revisions, suspensions or discontinuance of
            any of our Services and/or products. Your continued use of the
            Services provided, after such posting of any updates, changes,
            and/or modifications shall constitute your acceptance of such
            updates, changes and/or modifications, and as such, frequent review
            of this Agreement and any and all applicable terms and policies
            should be made by you to ensure you are aware of all terms and
            policies currently in
          </p>
          <hr />
          <div className="flex gap-4 mt-8 w-full">
            <button type="button" className="p-2 w-full bg-orange-400 rounded-md text-slate-100 " onClick={() => setTerms(false)}>
              close
            </button>
          </div>
        </div>
      </div>
    );
}
 
export default TermOfServices;