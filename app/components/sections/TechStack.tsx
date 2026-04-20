import React from "@/public/assets/react.svg";
import TypeScript from  "@/public/assets/typescript.svg";    
import NexJS from  "@/public/assets/nextjs.svg";
import Tailwind from "@/public/assets/tailwind.svg";
import Git from "@/public/assets/git.svg";
import NodeJS from "@/public/assets/nodejs.svg";
import HTML from "@/public/assets/html.svg";
import CSS from "@/public/assets/css.svg";
import Java from "@/public/assets/java.svg";
import Python from "@/public/assets/python.svg";
import JS from "@/public/assets/js.svg";
import Netlify from "@/public/assets/netlify.svg";
import Jira from "@/public/assets/jira.svg";
import Figma from "@/public/assets/figma.svg";
import Flutter from "@/public/assets/flutter.svg";
import Vitejs from "@/public/assets/vitejs.svg";
import TechStackImages from "@/app/components/cards/TechStackImages";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Tech Stack</h1>
        <div className="flex flex-wrap gap-6 justify-center">
            <TechStackImages src={React} width={50} height={50} />
            <TechStackImages src={TypeScript} width={50} height={50} />
            <TechStackImages src={NexJS} width={50} height={50} />
            <TechStackImages src={Tailwind} width={50} height={50} />
            <TechStackImages src={Git} width={50} height={50} />
            <TechStackImages src={NodeJS} width={50} height={50} />
            <TechStackImages src={HTML} width={50} height={50} />
            <TechStackImages src={CSS} width={50} height={50} />
            <TechStackImages src={Java} width={50} height={50} />
            <TechStackImages src={Python} width={50} height={50} />
            <TechStackImages src={JS} width={50} height={50} />
            <TechStackImages src={Netlify} width={50} height={50} />
            <TechStackImages src={Jira} width={50} height={50} />
            <TechStackImages src={Figma} width={50} height={50} />
            <TechStackImages src={Flutter} width={50} height={50} />
            <TechStackImages src={Vitejs} width={50} height={50} />
        </div>
    </div>
    ); 
};

export default TechStack;