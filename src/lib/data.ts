import { Github, Linkedin, Twitter, Mail, UsersIcon, LayersIcon, TrelloIcon, GitMergeIcon, ShuffleIcon, HeartHandshakeIcon, HandshakeIcon, CalendarDaysIcon, PresentationIcon, MessageCircleIcon, GroupIcon, CloudCogIcon, GitBranchIcon, CloudIcon, RowsIcon, BookOpenIcon, AreaChartIcon, BarChartIcon, PenSquareIcon, GraduationCap } from 'lucide-react';
import React from 'react';

export const portfolioData = {
  name: 'Dhaval Parmar',
  title: 'Scrum Master | Agile Coach | Agile Lead',
  description:
    "Certified Agile leader with 8+ years of experience delivering complex, data-driven software projects across HR, finance, and e-commerce domains. Proven success in leading Agile ceremonies, managing cross-functional teams, and aligning business and technical stakeholders. Expert in translating strategic objectives into actionable user stories, managing risks and dependencies, and driving delivery excellence. Adept at building technical documentation, surfacing blockers early, and ensuring accountability across distributed teams. Passionate about fostering continuous improvement through Agile coaching and process optimization.",
  contact: {
    email: 'scrummasterdhaval@gmail.com',
    phone: '+44 7767 950307',
    address: 'United Kingdom',
  },
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dhaval-parmar-b288a1321/', icon: Linkedin },
    { name: 'Email', url: 'mailto:scrummasterdhaval@gmail.com', icon: Mail },
  ],
  about: {
    title: 'Professional Summary',
    description: `Certified Agile leader with 8+ years of experience delivering complex, data-driven software projects across HR, finance, and e-commerce domains. Proven success in leading Agile ceremonies, managing cross-functional teams, and aligning business and technical stakeholders. Expert in translating strategic objectives into actionable user stories, managing risks and dependencies, and driving delivery excellence. Adept at building technical documentation, surfacing blockers early, and ensuring accountability across distributed teams. Passionate about fostering continuous improvement through Agile coaching and process optimization.`,
  },
  keyAchievements: [
    "Delivered 25% improvement in ETL pipeline efficiency via CI/CD enablement",
    "Reduced delivery risk by 30% through Agile governance and Lean portfolio management",
    "Boosted team satisfaction scores by 40% through coaching and psychological safety",
    "Achieved £500K+ in efficiency gains via Agile HR transformation initiatives",
    "Created visual dashboards mapping servant leadership traits to delivery outcomes"
  ],
  skills: [
    {
      title: "Technical Tools & Platforms",
      tools: [
        { name: "Scrum", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7mDyp_RD_QtOm9j2TyYibf7pb_dY4HSAJA&s' },
        { name: "SAFe", logo: 'https://www.cio.com/wp-content/uploads/2025/10/189035-0-06386200-1759331274-Scaled-Agile-Framework-1.jpg?quality=50&strip=all' },
        { name: "Kanban", logo: 'https://cdn-icons-png.flaticon.com/512/5084/5084666.png' },
        { name: "LeSS", logo: 'https://media.licdn.com/dms/image/sync/v2/D5627AQHDkJPyDuW8hg/articleshare-shrink_1280_800/B56ZjAIkHmHUAQ-/0/1755570127898?e=2147483647&v=beta&t=JrwMo5EV1h_ZLIkrAQXaqHpnyWQ-Yh2WkellGyQBWbA' },
        { name: "Agile transitions", logo: 'https://www.productplan.com/uploads/2020/01/waterfall-agile-transition.jpg' },
        { name: "Psychological safety", logo: 'https://shiftbalance.org/wp-content/uploads/2024/03/949968e06279dba63e508e7ebbcca5bb.png' },
        { name: "Stakeholder alignment", logo: 'https://media.istockphoto.com/id/1270366290/vector/linear-stakeholders-icon-in-vector-logotype.jpg?s=612x612&w=0&k=20&c=d88v5njrP20PncSaOlb4ziNvnBV00EEYi9fSBKNXW7A=' },
        { name: "PI Planning", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CDEYICHtOfhkMZkmsLxnisZxzsPM9YRTbQ&s' },
        { name: "Sprint Reviews", logo: 'https://img.freepik.com/premium-vector/sprint-review-icon-vector-image-can-be-used-agile_120816-236301.jpg' },
        { name: "Retrospectives", logo: 'https://wac-cdn.atlassian.com/dam/jcr:98682567-e64c-4055-bd3c-c61ece91539a/Retrospectives.png' },
        { name: "Workshops", logo: 'https://www.softformance.com/wp-content/uploads/2022/05/1.14-Agile-Ceremonies.jpg' },
        { name: "Azure DevOps", logo: 'https://miro.medium.com/1*8orwInnxqPRhrcKf9aOo9Q.png' },
        { name: "Git", logo: 'https://miro.medium.com/0*JLTX-AJQ0oC40mjc.png' },
        { name: "Cloud-native delivery", logo: 'https://miro.medium.com/v2/resize:fit:363/1*8NKUqObk8dfoxyCrKeiPIg.png' },
        { name: "Jira", logo: 'https://www.celigo.com/wp-content/uploads/2024/05/brandmark-logo-jira.svg' },
        { name: "Confluence", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVAtVmEqYpbD4Z4EF9bHgPNOMV0XAk7khzA&s' },
        { name: "BigPicture", logo: 'https://images.softwaresuggest.com/software_logo/1640615236_BP-1.png' },
        { name: "PowerBI", logo: 'https://www.onetrust.com/content/dam/onetrust/brand/content/graphic/thumbnail/integrations/OT-integrations-logo-microsoft-power-BI.png/_jcr_content/renditions/original' },
        { name: "Miro", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScNUrEUM2MMq1vLgBWRxlvJmWeG67_ULEBA&s' },
        { name: 'Microsoft 365', logo: 'https://play-lh.googleusercontent.com/Cf6rGlvAZJx2iG4c5f5H5N5XWGKFk5XZ_uz0A0YIIyuFPFybIfQaxSlDIQyU2W8btfv6' },
        { name: 'Trello', logo: 'https://play-lh.googleusercontent.com/Tt-6ZaQDUAjfSNSeLz4XyYkPsEQfVVp0lBtwrnuyqubhCna0LKu5OZxKgegBJIrEhz8' },
        { name: 'CI/CD', logo: 'https://thumbs.dreamstime.com/b/ci-cd-cloud-line-icon-linear-style-sign-mobile-concept-web-design-pipeline-code-symbol-outline-vector-logo-368746036.jpg' },
        { name: 'Automation and manual testing with Java', logo: 'https://automationtestlab.com/wp-content/uploads/2023/08/vecteezy_java-png-free-download_19899953_742-1024x1024.png' }
      ],
    }
  ],
  coreCompetencies: [
    {
      title: "Agile Leadership",
      skills: ["Scrum", "SAFe", "Kanban", "PI Planning", "Agile HR Transformation"]
    },
    {
      title: "Delivery Management",
      skills: ["Sprint Planning", "Standups", "Retrospectives", "Backlog Refinement"]
    },
    {
      title: "Technical Coordination",
      skills: ["Integration Maps", "Risk Logs", "Workflows", "Success Metrics"]
    },
    {
      title: "Stakeholder Engagement",
      skills: ["Product Owners", "Engineers", "QA", "Executives"]
    },
    {
      title: "Agile Coaching",
      skills: ["Process Adoption", "Psychological Safety", "Servant Leadership"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Jira (Admin)", "Confluence", "Trello", "Notion", "Azure DevOps", "Miro"]
    },
    {
      title: "Reporting & Documentation",
      skills: ["Status Updates", "Dashboards", "Burn-up/down Charts"]
    },
    {
      title: "Risk & Dependency Management",
      skills: ["RAID Logs", "Cross-Team Alignment", "Governance"]
    }
  ],
  domains: [
    { name: "FinTech", image: 'https://media.licdn.com/dms/image/v2/C4D12AQG4APF7I5yHkQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1598428096137?e=2147483647&v=beta&t=jQFK-Vpx6MpT4F-edCTah6MMet_rHGYPY083kggFE_g', description: 'Experience in the financial technology sector.', dataAiHint: 'financial technology' },
    { name: "Finance", image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230615110137/Finance-Landing-page-copy.webp', description: 'Experience in the financial services industry.', dataAiHint: 'financial services' },
    { name: "Insurance", image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202507/6877c9b356a01-insurance-164756948-16x9.png?size=948:533', description: 'Experience in the insurance industry.', dataAiHint: 'insurance industry' },
    { name: "E-commerce", image: 'https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg', description: 'Experience in the e-commerce sector.', dataAiHint: 'e-commerce online' },
    { name: "Education", image: 'https://cdn.unicaf.org/websites/unicaf/wp-content/uploads/2021/07/education-large.jpg', description: 'Experience in the education sector.', dataAiHint: 'education learning' },
    { name: "Retail", image: 'https://blog.indifi.com/wp-content/uploads/2019/12/How-To-Run-A-Successful-Retail-Business--500x281.jpg', description: 'Experience in the retail industry.', dataAiHint: 'retail shopping' },
    { name: "Energy", image: 'https://keithsmith.io/wp-content/uploads/2022/07/Energy-blog.jpg', description: 'Experience in the energy sector.', dataAiHint: 'energy power' },
    { name: "Healthcare", image: 'https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp', description: 'Experience in the healthcare industry.', dataAiHint: 'healthcare medical' },
  ],
  experience: [
    {
      role: 'Technical Scrum Master / Agile Lead',
      company: 'Alankrita Limited',
      type: 'Full-time',
      date: 'Dec 2023 - Present',
      duration: '',
      location: 'Basildon, England',
      description: 'Spearheaded Agile ceremonies across 10+ squads, boosting cross-team collaboration by 40% and aligning business and technical objectives. Orchestrated sprint planning, daily standups, retrospectives, and backlog refinement, enhancing sprint predictability by 30%. Translated complex business goals into actionable user stories, acceptance criteria, and delivery milestones, achieving 95% on-time delivery. Authored and maintained technical documentation, workflows, and integration maps, reducing onboarding time by 25%. Bridged communication between product owners, engineers, QA, and leadership, ensuring transparency and rapid resolution of blockers. Delivered executive status updates and risk reports via Jira dashboards, cutting reporting effort by 50%. Implemented SAFe and Agile HR frameworks, increasing release predictability by 35% and accelerating time-to-market for key initiatives. Enabled CI/CD pipelines and DevOps practices for cloud-native HR analytics, reducing deployment times by 40% and improving system reliability.',
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGH2IcBnW7mfg/company-logo_200_200/company-logo_200_200/0/1721725178526/alankrita_group_of_companies_logo?e=1762992000&v=beta&t=j88IulymNn4myyfckDXghVikxdaQuULy3FmfLAOcTlk',
      dataAiHint: 'tech consulting logo'
    },
    {
      role: 'Agile Coach/ Scrum Master',
      company: 'Prydan',
      type: 'Full-time',
      date: 'Jun 2019 - Dec 2023',
      duration: '4 yrs 7 mos',
      location: 'New York, United States',
      description: "Mentored distributed Agile teams across fintech and HR domains, driving 80% adoption of scaled Agile practices across the organization. Facilitated PI planning, Agile bootcamps, retrospectives, and Lean Coffee sessions, resulting in 60% improvement in team collaboration and knowledge sharing. Coached Product Owners and Scrum Masters on backlog refinement, user story mapping, and prioritization, increasing on-time delivery by 50%. Implemented SAFe and other scaled Agile frameworks, improving cross-team alignment and reducing project delays by 40%. Managed cross-team dependencies, vendor integrations, and system blockers, achieving a 35% reduction in cycle time for critical deliverables. Delivered measurable improvements in team engagement and sprint velocity, with 70% uplift in productivity and morale through targeted coaching. Developed and maintained documentation, including risk logs, integration maps, and process flows, ensuring 100% audit readiness and compliance. Introduced Agile metrics dashboards (velocity, burn-down, predictability), enabling data-driven decision-making and a 45% increase in project predictability.",
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHbU964KjiTLw/company-logo_200_200/company-logo_200_200/0/1670394673788/prydanconsultancy_logo?e=1762992000&v=beta&t=ZlTTdwxNR2gB0qWNLQH-ADpPBE0DnRwPMcHIH1UCjFI',
      dataAiHint: 'business solutions logo'
    },
    {
      role: 'Team Lead',
      company: 'SeoLatest',
      type: 'Full-time',
      date: 'Apr 2015 - Jun 2019',
      duration: '4 yrs 3 mos',
      location: 'Ahmedabad, INDIA.',
      description: 'Led Agile software development teams, implementing Scrum and Kanban practices, improving delivery cadence and product quality by 25%. Managed a team of 8–10 developers, QA engineers, and designers, achieving 95% on-time project delivery across multiple SEO and web initiatives. Facilitated sprint planning, backlog refinement, daily standups, and retrospectives, enhancing team collaboration and sprint predictability by 30%. Implemented code review, QA checkpoints, and continuous integration processes, reducing production defects by 30%. Coordinated cross-functional SEO, content, and development efforts, increasing website traffic and engagement by 35%. Mentored junior developers, improving technical skills and reducing onboarding time by 20%. Monitored project KPIs, team metrics, and risk logs, enabling data-driven decisions and proactive risk mitigation. Advocated and implemented process improvements and modern tools, increasing team efficiency and scalability by 25%.',
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGwgo-nmiShzQ/company-logo_200_200/company-logo_200_200/0/1652090171751/seo_latest_logo?e=1762992000&v=beta&t=uYZqYsPBxCa1cCFRTd-VYwktjOZ7eeKYBqF9ol8ZQvI',
      dataAiHint: 'seo marketing logo'
    },
    {
      role: 'Senior Software Engineer',
      company: 'BNF Technology Inc.',
      type: 'Full-time',
      date: 'Apr 2014 - Mar 2015',
      duration: '1 yr',
      location: 'Gandhinagar, Gujarat, India',
      description: 'I am a Senior Software Engineer with extensive experience in designing, developing, and deploying scalable solutions. I specialize in full-stack development, ensuring seamless integration between front-end interfaces and robust back-end systems. With a strong focus on code quality, performance optimization, and best practices, I deliver high-performing, reliable applications. Skilled in leading cross-functional teams, I drive collaboration and innovation to achieve business objectives. Passionate about continuous learning, I stay ahead of emerging technologies to build impactful, future-ready solutions.',
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGURYMMI7qDNw/company-logo_200_200/company-logo_200_200/0/1631305432237?e=1762992000&v=beta&t=uGkHjsF_z-aKAauXPxq-KmaDvTVjdt_De8MtM1MJpNY',
      dataAiHint: 'tech logo'
    },
    {
      role: 'Software Programmer',
      company: 'Rakuten',
      type: 'Full-time',
      date: 'Sep 2007 - Apr 2014',
      duration: '6 yrs 8 mos',
      location: 'Vadodara, Gujarat, India',
      description: 'Develop and Maintain Code. Problem Solving. Testing and Debugging. Collaborate with Teams. Documentation. Optimize Performance',
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFLt8xmWpX75Q/company-logo_200_200/company-logo_200_200/0/1719928507791/rakuten_logo?e=1762992000&v=beta&t=hj6ysPcmZnP3cPhI7OghwBnYZWvDHIqAMoArABXVjMc',
      dataAiHint: 'e-commerce logo'
    },
    {
      role: 'Software Engineer',
      company: 'Praxis Technologies',
      type: 'Full-time',
      date: 'Jun 2006 - Aug 2007',
      duration: '1 yr 3 mos',
      location: 'Mumbai, Maharashtra, India',
      description: 'Software Development: Design, develop, and maintain software solutions using clean and efficient coding practices. Collaboration: Work closely with cross-functional teams to gather requirements, solve problems, and deliver robust applications. Quality Assurance: Conduct testing, debugging, and performance optimization to ensure high-quality software delivery. Continuous Improvement: Stay updated with emerging technologies and industry trends to enhance existing systems and processes. Problem-Solving: Apply analytical and creative skills to address technical challenges and improve user experience.',
      skills: [],
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQFDi1hkJdurkA/company-logo_200_200/company-logo_200_200/0/1631340323738?e=1762992000&v=beta&t=tu2Bn28fqueBUZYCP4s3Px367NCwrvelS9aNKwUYK0o',
      dataAiHint: 'tech solutions logo'
    }
  ],
  certifications: [
    {
      name: 'Certified Scrum Master (PSM 1)',
      issuer: 'Scrum.org',
      date: 'Mar 2025',
      logo: 'http://scrumorg-website-prod.s3.amazonaws.com/drupal/s3fs-public/styles/large/public/2024-02/PSM-A%20400x400.png?itok=IkJT1m92',
      dataAiHint: 'scrum logo'
    },
    {
      name: 'SAFe Agilist',
      issuer: 'Scaled Agile Framework',
      date: 'Mar 2025',
      logo: 'https://images.credly.com/size/680x680/images/3e987079-3013-4359-9ad3-578c0b864e3d/image.png',
      dataAiHint: 'safe agile logo'
    }
  ],
  education: [
    {
      degree: 'MCA',
      university: 'Gujarat University',
      year: '2002',
    },
    {
      degree: 'BSc',
      university: 'Gujarat University',
      year: '1997',
    },
  ],
};
