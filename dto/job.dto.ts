import { Job_type } from "@/entities/job.entity"

export interface CreateJob {
  job_name: String
  location: String
  time_open: String
  time_close: String
  job_type: Job_type
  salary: String
  job_description: String
  number_of_recruitment: Number
}