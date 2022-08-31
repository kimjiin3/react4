import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(){
    let navigate = useNavigate()
    let [입력값, 입력값변경]=useState({
        username: "",
        title: "",
        body: "",
    })

    function onChangeHandler(event){
      const {name, value} = event.target;
        입력값변경({
            ...입력값, 
            [name]: value,}
        )
    }
    
    // const onChangeHandler = (event) => {
    //     const { name, value } = event.target;
    //     입력값변경({
    //       ...입력값,
    //       [name]: value,
    //     });
    //   };


return(
    <>
    <h3>갓생 추가하기</h3> 
    <h5>작성자<input 
    required
    type="text"
    name="username"
    value={입력값.username}
    minLength={2}
    maxLength={5}   
    placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
    onChange={onChangeHandler}
    /></h5> 


    <h5>제목<input
    required
    type="text"
    name="title"
    value={입력값.title}
    maxLength={50}   
    placeholder="제목을 입력해주세요. (50자 이내)"
    onChange={onChangeHandler}
    /></h5> 

   
    <h5>내용 <input 
    required
    type="text"
    name="body"
    value={입력값.body}
    maxLength={200}
    onChange={onChangeHandler}
    placeholder="내용을 입력해주세요. (200자 이내)"
    /></h5> 


    <button onClick={(e) => {navigate("/")}} >추가하기👍🏻</button>
    </>
    )
}


export default Form; 