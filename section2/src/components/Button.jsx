import './Button.css'
export default function Button({color,text,childern}){
     return (
          <button 
               style={{
                    backgroundColor : color,
               }}
               className="button">
                    {childern}
               </button>
     );
}