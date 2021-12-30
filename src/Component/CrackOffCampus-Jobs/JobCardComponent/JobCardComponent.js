import React from 'react';
function JobCardComponent(data) {
    return (
        <div className="JobsCardComponent">
            <div class="Card">
                <div className="JobsCardComponent_divider">
                    <div className="JobsCardComponent_divider_first">
                        <img className="JobsCardComponent_company_image" variant="top" src={data.jobImageUrl} />
                        <p className="cardTitle">{data.JobCompanyName} </p>
                    </div>
                    <div className="JobsCardComponent_divider_second">
                        <h1 className="job_apply_Button">{data.jobDesignation} </h1>
                        <div className="JobComponent_Details">
                            <p className="list-group-flush">{data.jobLocation}</p>
                            <p className="list-group-flush">{data.jobSalary}</p>
                            <p className="list-group-flush" style={{fontWeight:600}}>{data.jobLevel}</p>
                            <p className="job_postedDate">{data.jobPostedDate}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default JobCardComponent;