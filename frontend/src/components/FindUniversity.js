import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import University from './University';
import { Link ,useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchIcon from '@material-ui/icons/Search';
function FindUniversity() {
    const universityList = useSelector((state) => state.universityList);
    const { loading, error, universities } = universityList;
    const [current,setcurrent]=useState('')
    const [url,seturl]=useState('')
    const uni=universities.map((university)=>{
        return(<option value={university.name}/>)
    })
    var uniid
    var history=useHistory()
    const logchange=(e)=>{
        setcurrent(e.target.value)
        console.log(uniid)
    }
    useEffect(() => {
        const uni=universities.find(university=>current===university.name)
        if(uni){
        uniid=uni._id
        seturl(`/university/${uniid}`)
        console.log(url)
        }
        console.log(uniid)
    }, [current,url])
    const submithandler=(e)=>{
        // e.preventDefault()
        history.push(url)
        console.log('hello')
    }
        return (
          <div>
              <div class="mb-3">
                <label for="exampleDataList" class="form-label">Datalist example</label>
                <input class="form-control" list="datalistOptions" id="exampleDataList"  placeholder="Type to search..."  onChange={logchange}/>
                    <datalist id="datalistOptions">
                        {uni}
                    </datalist> 
                    <input class="btn btn-primary" type="submit" value="Search" onClick={submithandler}></input>
                </div>
            </div>
        )
}

export default FindUniversity
