import React, { useState } from 'react';

const dataList = [
    {id:1,name:'chk1',text:'나이확인',isChk:true},
    {id:2,name:'chk2',text:'약관확인',isChk:false},
    {id:3,name:'chk3',text:'정보수집확인',isChk:false},
    {id:4,name:'chk4',text:'혜택확인',isChk:false},
]

function Checkbox(props) {

    const [data,setData] = useState(dataList);

    const changeInput = (e) => {
        const {checked,name} = e.target;
        if(name === 'all'){
        setData(data.map(item => {
            return {
                ...item,
                isChk:checked,
            }
        }));
    } else {
        setData(
            data.map(item => item.name === name ? {...item, isChk : checked }:item)
        )
    }
    }
    
    return (
        <>
         <input type="checkbox" name='all'onChange={changeInput} checked={data.filter(item => item.isChk !== true).length < 1} />
         <label>전체동의</label>   
         <hr />

        {data.map(info => <p key={info.id}>
            <input type='checkbox' checked={info.isChk} name={info.name} onChange={changeInput}/>
            <label>{info.text}</label> </p>)}

       {/*   <input type="checkbox" />
         <label>나이확인</label>
         <input type="checkbox" />
         <label>약관확인</label>
         <input type="checkbox" />
         <label>정보수집확인</label>
         <input type="checkbox" />
         <label>혜택확인</label> */}

        </>
    );
}

export default Checkbox;