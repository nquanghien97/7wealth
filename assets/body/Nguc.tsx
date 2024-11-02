export default function Nguc(props: React.SVGProps<SVGSVGElement>) {
  const { ...rest } = props;
  return (
    <svg {...rest} version="1.1" xmlns="" x="0px" y="0px" viewBox="0 0 29.63 34.67" >
      <defs>
      </defs>
      <g data-bs-toggle="modal" data-bs-target="#breastModal" className="zoom" id="breastIcon">
        <path className="br0" d="M29.63,19.85c0,8.18-6.63,14.81-14.81,14.81S0,28.03,0,19.85S6.63,0,14.81,0S29.63,11.67,29.63,19.85z"></path>
        <ellipse transform="matrix(0.9733 -0.2297 0.2297 0.9733 -5.6117 5.2045)" className="br1" cx="19.54" cy="26.7" rx="2.4" ry="2.14"></ellipse>
        <ellipse transform="matrix(0.9959 -0.0907 0.0907 0.9959 -2.3758 1.9218)" className="br2" cx="19.96" cy="27.1" rx="1.08" ry="0.77"></ellipse>
      </g>
    </svg>
  );
}