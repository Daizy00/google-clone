import Image from 'next/image';
function Avatar({url,className}) {
    return (
        <Image
        loading="lazy"
        className={`rounded-full   cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        src={url}
        alt="profile pic"
        width={40}
        height={40}
        />
            
        
    );
}

export default Avatar;
