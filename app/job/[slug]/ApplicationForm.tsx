'use client';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"

const schema = yup.object().shape({
  full_name: yup.string().required("Tên không được để trống"),
  email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
  phone_number: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Số điện thoại không hợp lệ").required("Số điện thoại không được để trống"),
  date_of_birth: yup.string().required("Địa chỉ không được để trống"),
  content: yup.string(),
  education: yup.string().required("Bạn phải chọn trình độ học vấn"),
  current_address: yup.string().required("Địa chỉ không được để trống"),
  years_of_experience: yup.string().required("Bạn phải chọn số năm kinh nghiệm"),
  salary_expect: yup.string().required("Mức thu nhập mong muốn không được để trống"),
  availability_time: yup.string().required("Thời gian dự kiến nhận việc không được để trống"),
  file: yup
    .mixed()
    .required('Bạn cần đính kèm CV')
    .test('required', 'Bạn cần đính kèm CV', (value: any) => {
      return !!value.length
    })
    .test('fileSize', 'File có dung lượng quá lớn', (value: any) => {
      if (!value.length) return
      return value[0].size < 300000
    })
})

function ApplicationForm() {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    try {
      const formData = new FormData()
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">ApplicationForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Full Name <span className="text-[red]">*</span></p>
          <input type="text" {...register('full_name')} placeholder="e.g. Nguyen Van A" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.full_name?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Email Address  <span className="text-[red]">*</span></p>
          <input type="text" {...register('email')} placeholder="e.g. you@example.com" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Phone Number <span className="text-[red]">*</span></p>
          <input type="text" {...register('phone_number')} placeholder="e.g. 09123*****" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.phone_number?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Date of Birth <span className="text-[red]">*</span></p>
          <input type="text" {...register('date_of_birth')} placeholder="e.g. dd/mm/yy" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.date_of_birth?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Nội dung</p>
          <input type="text" {...register('content')} placeholder="Nội dung" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Trình độ học vấn</p>
          <select id="" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" {...register('education')}>
            <option value="" disabled>-- Trình độ học vấn --</option>
            <option value="Chưa tốt nghiệp">Chưa tốt nghiệp</option>
            <option value="Phổ thông">Phổ thông</option>
            <option value="Trung cấp">Trung cấp</option>
            <option value="Cao Đẳng">Cao Đẳng</option>
          </select>
          <p className="text-[red] text-xs">{errors.education?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Địa chỉ hiện tại <span className="text-[red]">*</span></p>
          <input type="text" {...register('current_address')} className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.content?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Số năm kinh nghiệm <span className="text-[red]">*</span></p>
          <select {...register('years_of_experience')} id="" className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm">
            <option value="" disabled>-- Số năm kinh nghiệm --</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p className="text-[red] text-xs">{errors.years_of_experience?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Mức thu nhập mong muốn <span className="text-[red]">*</span></p>
          <input type="text" {...register('salary_expect')} className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.salary_expect?.message}</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Thời gian dự kiến nhận việc <span className="text-[red]">*</span></p>
          <input type="text" {...register('availability_time')} className="p-2 border border-[#ccc] rounded-md outline-0 w-full mb-1 placeholder:text-sm" />
          <p className="text-[red] text-xs">{errors.availability_time?.message}</p>
        </div>
        <div className="mb-4">
          <div className="flex flex-col mb-2 relative">
            <p className="mb-2 font-semibold">Đính kèm cv của bạn*</p>
            <label htmlFor="resume" className="w-full py-8 border-2 border-[#ccc] border-dashed text-center hover:bg-[#f8f8f8] duration-300 cursor-pointer">
              <div className="flex flex-col">
                <input accept="application/pdf" type="file" id="resume" className="inline-block m-auto" {...register('file')} />
              </div>
            </label>
          </div>
          <p className="text-[red] text-xs">{errors.file?.message}</p>
        </div>
        <div>
          <button type="submit" className="bg-[#589f46] py-4 w-full rounded-md text-white font-semibold">Ứng tuyển</button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationForm