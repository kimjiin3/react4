import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home(){
    let navigate = useNavigate()
    return(
        <>
        <Header></Header>
       <h2>갓생살기 프로젝트</h2>
       <button onClick={()=>{navigate("/writetodo")}}>갓생 추가하기</button>
        </>        
    )
}
export default Home; 