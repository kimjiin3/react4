import { HiHome } from 'react-icons/hi';
import {useNavigate}  from 'react-router-dom'

function Header(){
    let navigate = useNavigate()

    return(
    <>
    <HiHome onClick={()=>{navigate("/")}}/><div>홈으로 이동하기</div>
    </> 
    
    );
}
export default Header;