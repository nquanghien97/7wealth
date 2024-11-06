import { JobEntity } from '@/entities/job.entity'
import { getJobsBySlug } from '@/services/job'
import Link from 'next/link'
import React from 'react'
import ApplicationForm from './ApplicationForm'

async function Slug({ params }: { params: any }) {
  const { data } = await getJobsBySlug(params.slug) as unknown as { data: JobEntity }
  return (
    <main className="mb-8">
      <div className="max-w-[1100px] m-auto">
        <div className="flex justify-between border-dotted border-b border-[#ccc] py-8">
          <div className="w-3/4">
            <h2 className="text-3xl text-[#589f46] mb-2">{data.job_name}</h2>
            <ul>
              <li>
                <span className="font-bold">Salary:</span> {data.salary}
              </li>
              <li>
                <span className="font-bold">Location:</span> {data.location}
              </li>
              <li>
                <span className="font-bold">Deadline:</span> {data.time_open} - {data.time_close}
              </li>
              <li></li>
            </ul>
          </div>
          <div className="w-1/4">
            <Link href={`/`} className="bg-[#589f46] px-4 py-2 rounded-md text-white hover:opacity-85 duration-300 w-full inline-block text-center">Apply now</Link>
          </div>
        </div>
        <div>
          <div className="border-dotted border-b border-[#ccc] py-8">
            <div className="">
              <h2 className="text-3xl text-[#589f46] mb-2">Job Description</h2>
              <div dangerouslySetInnerHTML={{ __html: data.job_description }} />
            </div>
          </div>
        </div>
        <ApplicationForm />
      </div>
    </main>
  )
}

export default Slug