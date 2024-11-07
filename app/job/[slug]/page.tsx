import { JobEntity } from '@/entities/job.entity'
import { getJobsBySlug } from '@/services/job'
import Link from 'next/link'
import React from 'react'
import ApplicationForm from './ApplicationForm'

export const dynamic = 'force-dynamic'
async function Slug({ params, searchParams }: { params: any, searchParams: any }) {
  const { data } = await getJobsBySlug(params.slug) as unknown as { data: JobEntity }

  return (
    <main className="mb-8 scroll-smooth">
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
            <Link href={`#apply`} className="bg-[#589f46] px-4 py-2 rounded-md text-white hover:opacity-85 duration-300 w-full inline-block text-center">Apply now</Link>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-3xl text-[#589f46] mb-5">Job Description</h2>
          <div className="description" dangerouslySetInnerHTML={{ __html: data.job_description }} />
        </div>
        <ApplicationForm job_id={data.id} />
      </div>
    </main>
  )
}

export default Slug