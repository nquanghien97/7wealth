import BachCauIcon from "@/assets/body/icons/Bach-cau";
import DauVaCoIcon from "@/assets/body/icons/DauVaCo";
import DuongRuotIcon from "@/assets/body/icons/DuongRuot";
import GanIcon from "@/assets/body/icons/Gan";
import HacToDaIcon from "@/assets/body/icons/HacToDa";
import NaoIcon from "@/assets/body/icons/Nao";
import NgucMaleIcon from "@/assets/body/icons/NgucMaleIcon";
import PhoiIcon from "@/assets/body/icons/Phoi";
import TeBaoLymphoIcon from "@/assets/body/icons/Te-bao-lympho";
import ThanIcon from "@/assets/body/icons/Than";
import ThucQuanIcon from "@/assets/body/icons/ThucQuan";
import TinhHoanIcon from "@/assets/body/icons/TinhHoanIcon";
import TuyenGiapIcon from "@/assets/body/icons/Tuyen-giap";
import TuyenTienLietIcon from "@/assets/body/icons/TuyenTienLietIcon";
import TuyenTuyIcon from "@/assets/body/icons/TuyenTuy";

export type bodyPartMaleType = 'não' | 'bạch cầu' | 'đầu và cổ' | 'đường ruột' | 'ngực' | 'tuyến tụy' | 'tuyến giáp' | 'thực quản' | 'phổi' | 'gan' | 'hắc tố da' | 'thận' | 'tế bào lympho' | 'tuyến tiền liệt' | 'tinh hoàn'

export const ListBodyData: Record<bodyPartMaleType, { title: string; image: JSX.Element, description: string[]; information: { name: string; link: string } }> = {
  "não": {
    title: 'Não',
    image: <NaoIcon width={70} height={70} />,
    description: [
      'severe headaches',
      'weakness on one side of the body',
      'seizures',
      'disturbed vision or speech'
    ],
    information: {
      name: 'brain-cancer.canceraustralia.gov.au',
      link: '/'
    }
  },
  "bạch cầu": {
    title: 'Bạch cầu',
    image: <BachCauIcon width={70} height={70} />,
    description: [
      'unexplained weight loss or tiredness',
      'night sweats',
      'pain in the bones or joints',
      'enlarged lymph nodes'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "đầu và cổ": {
    title: 'Đầu và cổ',
    image: <DauVaCoIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "đường ruột": {
    title: 'Đường ruột',
    image: <DuongRuotIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "ngực": {
    title: 'Ngực',
    image: <NgucMaleIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "tuyến tụy": {
    title: 'Tuyến tụy',
    image: <TuyenTuyIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "tuyến giáp": {
    title: 'Tuyến giáp',
    image: <TuyenGiapIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "thực quản": {
    title: 'Thực quản',
    image: <ThucQuanIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "phổi": {
    title: 'Phổi',
    image: <PhoiIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "gan": {
    title: 'Gan',
    image: <GanIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "hắc tố da": {
    title: 'Hắc tố da',
    image: <HacToDaIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "thận": {
    title: 'Thận',
    image: <ThanIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "tế bào lympho": {
    title: 'Tế bào lympho',
    image: <TeBaoLymphoIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    information: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "tuyến tiền liệt": {
    title: 'Tuyến tiền liệt',
    image: <TuyenTienLietIcon width={70} height={70} />,
    description: [
      'a change in bladder habit, including pain when urinating, weak flow or blood in urine',
      'persistent unexplained pain in the back, hips, pelvis or chest',
      'unexplained tiredness'
    ],
    information: {
      name: 'prostate-cancer.canceraustralia.gov.au',
      link: '/'
    }
  },
  "tinh hoàn": {
    title: 'Tinh hoàn',
    image: <TinhHoanIcon width={70} height={70} />,
    description: [
      'a painless lump or swelling in either testicle',
      'a change in how the testicle feels',
      'persistent unexplained pain in the lower abdomen or groin',
      'pain or discomfort in a testicle or in the scrotum.',
    ],
    information: {
      name: 'testicular-cancer.canceraustralia.gov.au',
      link: '/'
    }
  },
}

export const ListBodyIcon: {title: bodyPartMaleType, icon: JSX.Element}[] = [
  {
    title: 'não',
    icon: <NaoIcon width={50} height={50} />
  },
  {
    title: 'bạch cầu',
    icon: <BachCauIcon width={50} height={50} />
  },
  {
    title: 'đầu và cổ',
    icon: <DauVaCoIcon width={50} height={50} />
  },
  {
    title: 'đường ruột',
    icon: <DuongRuotIcon width={50} height={50} />
  },
  {
    title: 'ngực',
    icon: <NgucMaleIcon width={50} height={50} />
  },
  {
    title: 'tuyến tụy',
    icon: <TuyenTuyIcon width={50} height={50} />
  },
  {
    title: 'tuyến giáp',
    icon: <TuyenGiapIcon width={50} height={50} />
  },
  {
    title: 'thực quản',
    icon: <ThucQuanIcon width={50} height={50} />
  },
  {
    title: 'phổi',
    icon: <PhoiIcon width={50} height={50} />
  },
  {
    title: 'gan',
    icon: <GanIcon width={50} height={50} />
  },
  {
    title: 'hắc tố da',
    icon: <HacToDaIcon width={50} height={50} />
  },
  {
    title: 'thận',
    icon: <ThanIcon width={50} height={50} />
  },
  {
    title: 'tế bào lympho',
    icon: <TeBaoLymphoIcon width={50} height={50} />
  },
  {
    title: 'tuyến tiền liệt',
    icon: <TuyenTienLietIcon width={50} height={50} />
  },
  {
    title: 'tinh hoàn',
    icon: <TinhHoanIcon width={50} height={50} />
  }
]