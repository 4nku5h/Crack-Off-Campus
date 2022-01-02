import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { FilterCircleFill, Search } from 'react-bootstrap-icons';
import { setJobsFilter } from '../../../redux/actions/actions';
import { jobsData } from '../../../redux/reducers/jobsData_reducer';

function JobFilterComponent() {
    let ref_filter = useRef(null)
    let map_Companies = new Map();
    let map_Locations = new Map();
    let map_Experiance = new Map();
    const data = useSelector(state => state.jobsData);

    const filter_data = useSelector(state => state.jobsFilterData);

    //const [key_filter, setKey_filter] = useState("")
    //const [location_filter, setLocation_filter] = useState("")
    //const [exp_filter, setExp_filter] = useState("")
    let key_filter="";
    let location_filter=""
    let exp_filter=""

    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    getFilterProperties(data);

    function handleFilterToggle() {
        setState((pre) => {
            if (pre == true) {
                // v.ref_List.current.style.display="flex"
                ref_filter.current.classList.remove('active')
                return false;
            } else {
                // v.ref_List.current.style.display="none"
                ref_filter.current.classList.add('active')
                return true;
            }
        })

    }
    function handleLocationFilter(e) {
        let raw = e.target.value.split(',')[0];

    }

    function handleSearchFilter(e) {
        //setKey_filter(e.target.value.trim().toUpperCase())
        key_filter=e.target.value.trim().toUpperCase()
        handleFilter()
    }
    function handleLocationFilter(e) {
        let val=e.target.value.trim().toUpperCase().split(",")[0]
        if(val=="NONE") location_filter=""
        else location_filter=val
        handleFilter()
    }
    function handleExperianceFilter(e) {
        let val=e.target.value.trim().toUpperCase().split(",")[0]
        if(val=="NONE")  exp_filter=""
        else exp_filter=val
        handleFilter()
        
    }

    function handleFilter() {
        let res
        if (key_filter =="") {
            res = data.jobs;
            dispatch(setJobsFilter(res))
        }

        res = data.jobs.filter((i) => {
            let companyname=i.JobCompanyName.toUpperCase()
            let title=i.jobDesignation.toUpperCase()
            if (companyname.includes(key_filter)) return true
            if( title.includes(key_filter)) return true
            return false;
        })
        res=res.filter((i)=>{
            let location=i.jobLocation.toUpperCase()
            if(location.includes(location_filter))
               return true
            return false
        })
        res=res.filter((i)=>{
            let experiance=i.jobLevel.toUpperCase()
            if(experiance.includes(exp_filter))  
                return true
            
            return false
        })

        dispatch(setJobsFilter(res))
    }



    return (
        <>
            <div class='JobFilterFloat' ref={ref_filter}>
                <div className="JobFilterFloat_Main">
                    <p id="JobFilter_Title">Filter</p>
                    <p id="JobFilter_Type">Enter Keyword</p>
                    <input id="input_filter_keyword" type='text' onChange={(e) => { handleSearchFilter(e) }}></input>
                    {/* //////////////////////// FILTER LOCATION ///////////////////////////////////////// */}
                    <br></br>
                    <p id="JobFilter_Type">Location</p>
                    {/* Locations  should be sorted 'map_Locations' : To be Added */}
                    <div className="JobFilter_divider_column">
                        <select name="JobFilter_items" id="JobFilter_items" onChange={(e) => { handleLocationFilter(e) }}>
                            {Array.from(map_Locations).map((key, value) => {
                                return <option value={key}>{key}</option>
                            })}
                        </select>
                    </div>

                    {/* ////////////////////////FILTER Experience Level ///////////////////////////////// */}
                    <br></br>
                    <p id="JobFilter_Type">Experience</p>
                    <div className="JobFilter_divider_column">
                        <select name="JobFilter_items" id="JobFilter_items" onChange={(e) => {handleExperianceFilter(e)}}>
                            {/* Locations  should be sorted 'map_Locations' : To be Added */}
                            {Array.from(map_Experiance).map((key, value) => {
                                return <option value={key}>{key}</option>
                            })}
                        </select>
                    </div>
                    <br></br>
                    {/*//////////////////////// FILTER COMPANIES NAME ///////////////////////////////////*/}
                    {/* <p className="divider_line"></p> */}

                    <div className='filter_buttons'>
                        <button id="btn_filter_showResult">Cancel</button>
                        <button id="btn_filter_clearResult">Filter</button>
                    </div>
                </div>


            </div>
            <div className='JobsComponent_filter_div'>
                <FilterCircleFill className='JobsComponent_btn_filter_icon' onClick={handleFilterToggle} />
            </div>

        </>
    )

    function getFilterProperties(data) {
        map_Locations.set("None");
        map_Experiance.set("None");
        data.jobs.forEach((job) => {
            map_Locations.set(job.jobLocation);
            map_Experiance.set(job.jobLevel);
        })
    }
}



export default JobFilterComponent;
