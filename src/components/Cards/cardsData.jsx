import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiWebstorm } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export const cardsData = [
    {
        title:'Programming Languages',
        tools:[
            { icon:<IoLogoJavascript/>,name:'Javascript' },
            { icon:<SiTypescript/>,name:'Typescript' },
            
        ]
    },
    {
        title:'Frontend Tools',
        tools:[
            { icon:<FaReact />,name:'React',},
            { icon:<FaReact />,name:'React Native'},
            { icon:<SiVite />,name:'Vite'},
            { icon:<RiTailwindCssFill/>,name:'Tailwind CSS'},
            { icon:<SiReactrouter />, name:'React-Router'},
        ]
    },
    {
        title:'Backend Tools',
        tools:[
            { icon:<FaNodeJs />,name:'Node.js',},
            { icon:<SiExpress /> ,name:'Express.js'},
        ]
    },
    {
        title:'Databases',
        tools:[
            { icon:<SiMongodb />,name:'MongoDB',},
            { icon:<IoLogoFirebase  /> ,name:'Firebase'},
        ]
    },
    {
        title:'Other Tools',
        tools:[
            { icon:<SiWebstorm />,name:'WebStorm',},
            { icon:<BiLogoVisualStudio /> ,name:'Visual Studio Code'},
            { icon:<SiPostman />,name:'Postman'},
            { icon:<SiXcode /> ,name:'XCode'},
            { icon:<SiAndroidstudio /> ,name:'Android Studio'},
        ]
    },
    {
        title:'Languages',
        tools:[
            { icon:'🇹🇷',name:'Turkish',},
            { icon:'🇬🇧' ,name:'English'},

        ]
    },

]
