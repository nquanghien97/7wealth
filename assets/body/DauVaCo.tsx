export default function DauVaCo(props: React.SVGProps<SVGSVGElement>) {
  const { ...rest } = props;
  return (
    <svg {...rest} data-bs-toggle="modal" data-bs-target="#headModal" version="1.1" xmlns="" x="0px" y="0px" viewBox="0 0 17.38 5.23">
      <defs>
      </defs>
      <path className="dauvaco" d="M8.82,5.23c-0.08,0-0.16,0-0.24,0c-4.96-0.14-8.4-4.7-8.54-4.9c-0.07-0.09-0.05-0.22,0.04-0.29
    C0.17-0.03,0.3-0.01,0.37,0.08C0.4,0.13,3.83,4.68,8.6,4.81c2.91,0.08,5.76-1.49,8.42-4.68c0.07-0.08,0.2-0.1,0.29-0.03
    c0.09,0.07,0.1,0.2,0.03,0.29C14.65,3.6,11.79,5.23,8.82,5.23z"></path>
    </svg>
  );
}