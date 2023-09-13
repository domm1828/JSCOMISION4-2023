'use client'

import { useThemeContext } from "../context/theme";

const about = ()=>{
const {color} = useThemeContext();
    return (
     
        <div className={color+' h-screen'}>Page About    {color} </div>
    );
    
}
export default about;