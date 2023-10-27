const HomeContact = () => {
    return (
        <div className="my-10">
            <div className=" py-12 bg-black text-white flex justify-center items-center gap-8 rounded-lg">
           <div className="flex items-center gap-3">
            <div>
                <img src="/src/assets/icons/calender.svg" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div>
                <h3 className="text-lg">We are open monday-friday</h3>
                <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
            </div>
            </div> 
           <div className="flex items-center gap-2">
            <div>
                <img src="/src/assets/icons/contact.svg" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div>
                <h3 className="text-lg">Have a question?</h3>
                <h1 className="text-2xl font-bold">+2546 251 2658</h1>
            </div>
            </div> 
           <div className="flex items-center gap-2">
            <div>
                <img src="/src/assets/icons/location.svg" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div>
                <h3 className="text-lg">Need a repair? our address</h3>
                <h1 className="text-2xl font-bold">Liza Street, New York</h1>
            </div>
            </div> 
         
        </div>
        </div>
    );
};

export default HomeContact;