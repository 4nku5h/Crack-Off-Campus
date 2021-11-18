let initialState={
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


let jobsData= (state=initialState, action)=>{
    switch (action.type) {
      case "JOBS_DATA":
        return {...state,...action.payload};
      default:
        return state;    
    }
  }

  export {jobsData};