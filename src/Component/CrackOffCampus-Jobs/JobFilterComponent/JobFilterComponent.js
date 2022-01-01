import React, { useRef, useState } from 'react'
import { useSelector } from "react-redux";

import { FilterCircleFill, Search } from 'react-bootstrap-icons';

function JobFilterComponent() {
    let ref_filter = useRef(null)
    let map_Companies = new Map();
    let map_Locations = new Map();
    let map_Experiance = new Map();
    const data = useSelector(state => state.jobsData);
    const [state, setState] = useState(false);
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
    return (
        <>
            <div class='JobFilterFloat' ref={ref_filter}>
                <div className="JobFilterFloat_Main">
                    <p id="JobFilter_Title">Filter</p>
                    <p id="JobFilter_Type">Enter Keyword</p>
                    <input id="input_filter_keyword" type='text'></input>
                    {/* //////////////////////// FILTER LOCATION ///////////////////////////////////////// */}
                    <br></br>
                    <p id="JobFilter_Type">Location</p>
                    {/* Locations  should be sorted 'map_Locations' : To be Added */}
                    <div className="JobFilter_divider_column">
                        <select name="JobFilter_items" id="JobFilter_items" onChange={(e) => handleLocationFilter(e)}>
                            {Array.from(map_Locations).map((key, value) => {
                                return <option value={key}>{key}</option>
                            })}
                        </select>
                    </div>

                    {/* ////////////////////////FILTER Experience Level ///////////////////////////////// */}
                    <br></br>
                    <p id="JobFilter_Type">Experience</p>
                    <div className="JobFilter_divider_column">
                        <select name="JobFilter_items" id="JobFilter_items">
                            {/* Locations  should be sorted 'map_Locations' : To be Added */}
                            {Array.from(map_Experiance).map((key, value) => {
                                return <option value={key}>{key}</option>
                            })}
                        </select>
                    </div>
                    <br></br>
                    {/*//////////////////////// FILTER COMPANIES NAME ///////////////////////////////////*/}
                    {/* <p className="divider_line"></p> */}
                    <p id="JobFilter_Type">Companies</p>
                    {/* Companies name should be sorted 'map_Companies' : To be Added */}
                    {Array.from(map_Companies).map((key, value) => {
                        return (
                            <div className="JobFilter_divider_column">
                                <input id="filter_company_checkbox" type="checkbox" value="checkedA" />
                                <h1 id="JobFilter_items">{key}</h1>
                            </div>
                        )
                    })}
                    <div className='filter_buttons'>
                        <button id="btn_filter_showResult">Remove Filter</button>
                        <button id="btn_filter_clearResult">Show Results</button>
                    </div>
                </div>


            </div>
            <div className='JobsComponent_filter_div'>
                <FilterCircleFill className='JobsComponent_btn_filter_icon' onClick={handleFilterToggle} />
            </div>

        </>
    )

    function getFilterProperties(data) {
        data.jobs.forEach((job) => {
            map_Companies.set(job.JobCompanyName)
            map_Locations.set(job.jobLocation);
            map_Experiance.set(job.jobLevel);
        })
    }
}



export default JobFilterComponent;
