export default function TuyenTienLiet(props: React.SVGProps<SVGSVGElement>) {
  const { ...rest } = props;
  return (
    <svg {...rest} version="1.1" xmlns="" x="0px" y="0px" viewBox="0 0 6.42 3.92" style={{ overflow: 'visible' }} xmlSpace="preserve">
      <defs>
      </defs>
      <path data-bs-toggle="modal" data-bs-target="#prostateModal" id="prostateOutline" className="zoom pros0" d="M3.21,3.92c0.59,0,3.21-0.63,3.21-2.26S5.3,0,5.16,0C5.03,0,4.18,0.02,3.21,1.34C3.01,1.08,2.25,0,1.23,0
      S0,1.24,0,1.59C0,3.6,2.63,3.92,3.21,3.92z"></path>
    </svg>
  );
}