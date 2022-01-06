import React from 'react';
import { GeoAltFill, CurrencyExchange, Calendar2WeekFill } from 'react-bootstrap-icons';
function handleCardClick(data){
    console.log(data)
    window.open(data.jobLink)
}
function JobCardComponent(data) {
    return (
        <div className="JobsCardComponent" onClick={()=>handleCardClick(data)}>
            <div className="Card">
                <div className="JobsCardComponent_divider">
                    <div className="JobsCardComponent_divider_first">
                        <img className="JobsCardComponent_company_image" variant="top" src={data.jobImageUrl} />
                        <p className="cardTitle">{data.JobCompanyName} </p>
                    </div>
                    <div className="JobsCardComponent_divider_second">
                        <h1 className="job_apply_Button">{data.jobDesignation} </h1>
                        <p className="job_level">{data.jobLevel}</p>
                        <p className="job_description">Bachelor's degree or equivalent practical experiance...</p>
                        <div className="JobComponent_Details">

                            <div className='JobsCardComponent_icon_div_Group'>
                                <GeoAltFill className="jobsCard_icon" id="jobsCard_icon_location"  />
                                <p className="list-group-flush">{data.jobLocation}</p>
                            </div>
                            <div className='JobsCardComponent_icon_div_Group'>
                                <CurrencyExchange className="jobsCard_icon" id="jobsCard_icon_salary" />
                                <p className="list-group-flush">{data.jobSalary}</p>
                            </div>
                            <div className='JobsCardComponent_icon_div_Group'>
                                <Calendar2WeekFill className="jobsCard_icon" id="jobsCard_icon_date"  />
                                <p className="list-group-flush">{data.jobPostedDate}</p>
                            </div>



                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default JobCardComponent;