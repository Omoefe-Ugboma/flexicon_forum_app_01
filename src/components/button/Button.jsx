const Button = ({icon, replies}) => {
    return ( <button>
      {icon()} <p>{replies}</p> 
    </button> );
}
 
export default Button;