import Image from "next/image";

interface TechStackImagesProps {
    src: string;
    width: number;
    height: number;
}

const TechStackImages = (props: TechStackImagesProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center hover:scale-120 transition-transform duration-300">  
      <Image src={props.src} alt={props.src + " icon"} width={props.width} height={props.height} />
    </div>
  );
};

export default TechStackImages;