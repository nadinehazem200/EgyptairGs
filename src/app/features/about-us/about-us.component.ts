
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  phone: string;
  email: string;
}

interface DocumentLink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  aboutImages = [
    'https://gs.egyptair.com/en/images/about1.png',
    'https://gs.egyptair.com/en/images/about2.jpg'
  ];

  mission = [
    'To provide safe, secure and complete ground services package.',
    'Complete adherence and compliance to the international standards in ground handling.',
    'Accurate follow up for training courses, on-job training and awareness according to the curriculums needed for each job to ensure high performance of employees.',
    'Continuous development and upgrading the skills of all employees.',
    'Continuous renovation of equipment fleet according to the latest models and aviation industry developments.',
    'Confirming acknowledgment of all employees and stakeholders on the value of reaching full delightedness of our customers and beyond.',
    'Carrying out all ground services for aircraft inside and outside.',
    'Management and operation of technical and production workshops, maintenance and repair of all equipment.',
    "The company has the right to conduct its activities by itself or through third parties, and the right to establish new companies operating in its field of activity.",
    'Carrying out agency work for Egyptian and foreign companies operating in all Egyptian airports.',
    'Granting the right of advertising exploitation for the benefit of others on various property and equipment of the company inside and outside the ramp in Cairo and domestic stations.'
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Mr Khaled Abdel Haleem',
      position: 'Chairman & CEO',
      image: 'https://gs.egyptair.com/ourTeam/Khaled_Ahmed_Abdel_Haleem.jpg',
      phone: '(+202) 26964400/01',
      email: 'chairman.GS@egyptair.com'
    },
    {
      name: 'Eng Waleed Hussein Eldeeb',
      position: 'V.P Operation Sector',
      image: 'https://gs.egyptair.com/ourTeam/Eng_Waleed_Hussein_Eldeeb.png',
      phone: '(+202) 22656312',
      email: 'Operation.GS@egyptair.com'
    },
    {
      name: 'Eng Mohsen A.Abdein',
      position: 'V.P. Technical Support',
      image: 'https://gs.egyptair.com/ourTeam/Eng_Mohsen_Abdein.png',
      phone: '(+202) 22656450',
      email: 'gsts.vp@egyptair.com'
    },
    {
      name: 'Nancy Omar',
      position: 'Marketing & Agreements GM',
      image: 'https://gs.egyptair.com/ourTeam/Nancy_Omar.png',
      phone: '(+202) 26964406',
      email: 'HndlgContracts@egyptair.com'
    },
    {
      name: 'Ahmed Sayed Giuoshe',
      position: 'Financial Affairs GM',
      image: 'https://gs.egyptair.com/ourTeam/Ahmed_sayed_elgeoushy.png',
      phone: '(+202) 26964420',
      email: 'Financial.GS@egyptair.com'
    },
    {
      name: 'Abdalla Amin Ahmed Idris',
      position: 'GM of Communication and IT',
      image: 'https://gs.egyptair.com/ourTeam/Abdalla_Amin%20Ahmed_Idris.png',
      phone: '(+202) 26964578',
      email: 'gs.it@egyptair.com'
    },
    {
      name: 'Gehan Abdel-Sattar Ibrahim',
      position: 'G.M of procurement',
      image: 'https://gs.egyptair.com/ourTeam/Gehan_Abdel_Sattar_Ibrahim.png',
      phone: '(+202) 26964405',
      email: 'Procurment.GS@egyptair.com'
    },
    {
      name: 'Tarik Abdel Aziz',
      position: 'Human Resources GM',
      image: 'https://gs.egyptair.com/ourTeam/Tarik_Abdel_Aziz.png',
      phone: '(+202) 2657476',
      email: 'HR.GS@egyptair.com'
    },
    {
      name: 'Dr Hossam Salah El Din',
      position: 'Planning & Follow-UP GM',
      image: 'https://gs.egyptair.com/ourTeam/Dr_Hossam_SalahElDin_AlAyopI.png',
      phone: '(+202) 26964456',
      email: 'hoss_ayopi@egyptair.com'
    }
  ];

  statistics = [
    { value: '120+', label: 'Partners' },
    { value: '30M+', label: 'Passengers Handled' },
    { value: '225K+', label: 'Flights per Year' },
    { value: '75%', label: 'Egyptair Shares' }
  ];

  safetyDocuments: DocumentLink[] = [
    {
      title: 'EGYPTAIR Corporate Policy',
      url: 'https://gs.egyptair.com/en/pdf/EGYPTAIR_CORPORATE_POLICY.pdf'
    },
    {
      title: 'Ground Handling Operating Certificate (GHOC)',
      url: 'https://gs.egyptair.com/en/pdf/GHOC.jpeg'
    },
    {
      title: 'Agency Operation Certificate N19',
      url: 'https://gs.egyptair.com/en/pdf/Operation.pdf'
    },
    {
      title: 'EGYPTAIR ISAGO Corporate',
      url: 'https://gs.egyptair.com/en/pdf/ISAGO1.pdf'
    },
    {
      title: 'ISAGO - Cairo International Airport',
      url: 'https://gs.egyptair.com/en/pdf/ISAGO2.pdf'
    },
    {
      title: 'ISAGO - Borg El Arab Airport',
      url: 'https://gs.egyptair.com/en/pdf/ISAGO_Borg.pdf'
    },
    {
      title: 'ISAGO - Hurghada International Airport',
      url: 'https://gs.egyptair.com/en/pdf/ISAGO_Hurghada.pdf'
    },
    {
      title: 'ISAGO - Sharm el-Sheikh International Airport',
      url: 'https://gs.egyptair.com/en/pdf/ISAGO_Sharm.pdf'
    }
  ];

  annualReports: DocumentLink[] = [
    {
      title: '2017 / 2018',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2017-2018.pdf'
    },
    {
      title: '2018 / 2019',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2018-2019.pdf'
    },
    {
      title: '2019 / 2020',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2019-2020.pdf'
    },
    {
      title: '2020 / 2021',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2020-2021.pdf'
    },
    {
      title: '2021 / 2022',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2021-2022.pdf'
    },
    {
      title: '2022 / 2023',
      url: 'https://gs.egyptair.com/Annual_Reports/Annual_Report-2022-2023.pdf'
    }
  ];
}
