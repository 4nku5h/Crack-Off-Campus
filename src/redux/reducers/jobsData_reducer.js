let initialState = {
  totalJobsCount: null,
  jobs: [{
    JobCompanyName: "",
    JobRequirement: "",
    jobLevel: "",
    jobImageUrl: "",
    jobLink: "",
    jobadditionalText: "",
    jobPostedDate: "",
    jobReportCount: "",
    jobLocation: "",
    jobSalary: "",
    jobLikeCount: "",
    jobDesignation: ""
  }
  ]
}
let initialState_filter =  [{
    JobCompanyName: "",
    JobRequirement: "",
    jobLevel: "",
    jobImageUrl: "",
    jobLink: "",
    jobadditionalText: "",
    jobPostedDate: "",
    jobReportCount: "",
    jobLocation: "",
    jobSalary: "",
    jobLikeCount: "",
    jobDesignation: ""
  }
  ]


let jobsData = (state = initialState, action) => {
  switch (action.type) {
    case "JOBS_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export { jobsData };

let jobsFilterData = (state = initialState_filter, action) => {
  switch (action.type) {
    case "JOBS_DATA_FILTER":
      return action.payload;
    default:
      return state;
  }
}

export {jobsFilterData };