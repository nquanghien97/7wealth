export enum Job_type {
  Full_time,
  Part_time,
  Intern,
  Contract,
  Freelancer
}

export interface JobEntity {
  id: Number
  job_name: String
  location: String
  time_open: String
  time_close: String
  job_type: Job_type
  salary: String
  job_description: String
  number_of_recruitment: Number
  created_at: Date
}