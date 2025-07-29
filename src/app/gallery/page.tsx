import Image from "next/image";


const GallerPage = () => {
    return (
        <div className="text-center">
            <h1>Next js image optimaization</h1>

            <Image className="mx-auto" src="https://i.ibb.co/FL02WpvK/d5f9d2133a0f053d5ab67895b6d74568df288c0e.png" width={400} height={400} alt="" />
        </div>
    );
};

export default GallerPage;