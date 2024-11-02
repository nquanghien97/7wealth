import BachCauIcon from "@/assets/body/icons/Bach-cau";
import BuongTrungIcon from "@/assets/body/icons/BuongTrung";
import DauVaCoIcon from "@/assets/body/icons/DauVaCo";
import DuongRuotIcon from "@/assets/body/icons/DuongRuot";
import GanIcon from "@/assets/body/icons/Gan";
import HacToDaIcon from "@/assets/body/icons/HacToDa";
import NaoIcon from "@/assets/body/icons/Nao";
import NgucIcon from "@/assets/body/icons/Nguc";
import NoiMacTuCungIcon from "@/assets/body/icons/NoiMacTuCung";
import PhoiIcon from "@/assets/body/icons/Phoi";
import TeBaoLymphoIcon from "@/assets/body/icons/Te-bao-lympho";
import ThanIcon from "@/assets/body/icons/Than";
import ThucQuanIcon from "@/assets/body/icons/ThucQuan";
import TuyenGiapIcon from "@/assets/body/icons/Tuyen-giap";
import TuyenTuyIcon from "@/assets/body/icons/TuyenTuy";

type bodyPart = 'não' | 'bạch cầu' | 'đầu và cổ' | 'đường ruột' | 'ngực' | 'tuyến tụy' | 'tuyến giáp' | 'thực quản' | 'phổi' | 'gan' | 'hắc tố da' | 'thận' | 'tế bào lympho' | 'buồng trứng' | 'nội mạc tử cung'

export const ListBodyData: Record<bodyPart, { title: string; image: JSX.Element, description: string[]; infomation: { name: string; link: string } }> = {
  "não": {
    title: 'Não',
    image: <NaoIcon width={70} height={70} />,
    description: [
      'severe headaches',
      'weakness on one side of the body',
      'seizures',
      'disturbed vision or speech'
    ],
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "ngực": {
    title: 'Ngực',
    image: <NgucIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
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
    infomation: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "buồng trứng": {
    title: 'Buồng trứng',
    image: <BuongTrungIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    infomation: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
  "nội mạc tử cung": {
    title: 'Nội mạc tử cung',
    image: <NoiMacTuCungIcon width={70} height={70} />,
    description: [
      'unexplained pain in the mouth, upper teeth, throat, neck, face, ear or chin',
      'a lump or sore that does not go away',
      'difficulty or pain when swallowing or chewing',
      'coughing up blood, or a cough that doesn’t go away',
      'bleeding in the mouth or through the nose'
    ],
    infomation: {
      name: 'leukaemia.canceraustralia.gov.au',
      link: '/'
    }
  },
}