const initialOtherExams = [
  // 1. Medical, Pharmacy & Paramedical
  { id: 1, name: "NEET UG (₹1700)", regStart: "Feb 08, 2026", regEnd: "Mar 11, 2026", examDate: "May 2026", link: "neet.nta.nic.in" },
  { id: 2, name: "B.Pharm (NEET/State) (Varies)", regStart: "Varies", regEnd: "Varies", examDate: "May-Jun 2026", link: "State Portals" },
  { id: 3, name: "MP PNST (₹500)", regStart: "Mar 01, 2026", regEnd: "May 31, 2026", examDate: "Jun 2026", link: "mponline.gov.in" },
  { id: 4, name: "CG Paramedical (₹200)", regStart: "Mar 01, 2026", regEnd: "Mar 31, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
  { id: 5, name: "Army College of Nursing (₹1500)", regStart: "Aug 01, 2026", regEnd: "Sep 15, 2026", examDate: "Oct 2026", link: "joinindianarmy.nic.in" },

  // 2. Science Research
  { id: 6, name: "NEST (₹1200)", regStart: "Jan 05, 2026", regEnd: "Apr 06, 2026", examDate: "Jun 2026", link: "nestexam.in" },
  { id: 7, name: "ISI Admission Test (₹1250)", regStart: "Apr 28, 2026", regEnd: "May 28, 2026", examDate: "May 2026", link: "admission.isical.ac.in" },
  { id: 8, name: "ICAR AIEEA (₹1000)", regStart: "Mar 01, 2026", regEnd: "Mar 30, 2026", examDate: "Jul 2026", link: "icar.org.in" },
  { id: 9, name: "State Agriculture CET (Varies)", regStart: "Varies", regEnd: "Varies", examDate: "Apr-May 2026", link: "State Portals" },

  // 3. Design, Architecture & Fashion
  { id: 10, name: "NIFT Entrance Exam (₹3000)", regStart: "Dec 01, 2026", regEnd: "Jan 06, 2027", examDate: "Feb 2027", link: "nift.ac.in" },
  { id: 11, name: "NID DAT (₹3000)", regStart: "Nov 01, 2025", regEnd: "Dec 01, 2025", examDate: "Dec 2025 - Jan 2026", link: "admissions.nid.edu" },
  { id: 12, name: "UCEED (₹3600)", regStart: "Oct 01, 2025", regEnd: "Nov 05, 2025", examDate: "Jan 2026", link: "uceed.iitb.ac.in" },

  // 4. Law
  { id: 13, name: "CLAT 2027 (₹4000)", regStart: "Aug 01, 2026", regEnd: "Oct 31, 2026", examDate: "Dec 2026", link: "consortiumofnlus.ac.in" },
  { id: 14, name: "AILET (₹3500)", regStart: "Aug 01, 2025", regEnd: "Nov 10, 2025", examDate: "Dec 2025", link: "nludelhi.ac.in" },
  { id: 15, name: "SLAT (₹2250)", regStart: "Nov 01, 2025", regEnd: "Nov 30, 2025", examDate: "Dec 2025 - Jan 2026", link: "set-test.org" },
  { id: 16, name: "LSAT India (₹3999)", regStart: "Dec 01, 2025", regEnd: "Mar 31, 2026", examDate: "Jan-May 2026", link: "lsac.org" },

  // 5. Defence & Specialized
  { id: 17, name: "NDA II 2026 (₹100)", regStart: "Jun 01, 2026", regEnd: "Jul 31, 2026", examDate: "Sep 2026", link: "upsc.gov.in" },
  { id: 18, name: "AFCAT (₹250)", regStart: "Nov 17, 2025", regEnd: "Dec 14, 2025", examDate: "Jan 2026", link: "afcat.cdac.in" },
  { id: 19, name: "CDS Exam (₹200)", regStart: "Dec 10, 2025", regEnd: "Jan 31, 2026", examDate: "Apr 2026", link: "upsc.gov.in" },
  { id: 20, name: "TES Entry (Navy) (Free)", regStart: "Jan 03, 2026", regEnd: "Jan 19, 2026", examDate: "Jul 2026", link: "joinindiannavy.gov.in" },
  { id: 21, name: "Indian Navy INET (₹215)", regStart: "Mar 14, 2026", regEnd: "Apr 06, 2026", examDate: "May 2026", link: "joinindiannavy.gov.in" },
  { id: 22, name: "IAF Agniveer Vayu (₹550)", regStart: "Jan 12, 2026", regEnd: "Mar 10, 2026", examDate: "Mar-Apr 2026", link: "agnipathvayu.cdac.in" },
  { id: 23, name: "Sainik School Entrance (₹650)", regStart: "Oct 10, 2025", regEnd: "Nov 11, 2025", examDate: "Jan 2026", link: "exams.nta.nic.in" },

  // 6. General UG & Miscellaneous
  { id: 24, name: "NCET 2026 (₹1200)", regStart: "Feb 12, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "nta.ac.in" },
  { id: 25, name: "TISS BAT (₹1500)", regStart: "Jan 03, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "tiss.edu" },
  { id: 26, name: "NCHMCT JEE (₹1000)", regStart: "Feb 01, 2026", regEnd: "Mar 25, 2026", examDate: "Apr 2026", link: "exams.nta.nic.in" },
  { id: 27, name: "IIMC Entrance Exam (₹1000)", regStart: "Feb 01, 2026", regEnd: "Feb 10, 2026", examDate: "Mar-Apr 2026", link: "iimc.gov.in" },
  { id: 28, name: "Jamia/XIC Entrance (₹1000)", regStart: "Feb 20, 2026", regEnd: "Mar 31, 2026", examDate: "May-Jun 2026", link: "jamiahamdard.edu/xic" },
  { id: 29, name: "Gujarat ACPC Admission (₹350)", regStart: "Feb 09, 2026", regEnd: "Mar 30, 2026", examDate: "Jun 2026", link: "gujacpc.admissions.nic.in" },
  { id: 30, name: "TNEA (₹500)", regStart: "May 01, 2026", regEnd: "Jun 06, 2026", examDate: "Jun 2026", link: "tneaonline.org" },
  { id: 31, name: "IMU CET (₹1000)", regStart: "Mar 07, 2026", regEnd: "May 02, 2026", examDate: "May 2026", link: "imu.edu.in" },
  { id: 32, name: "MSDSU (₹500)", regStart: "Mar 01, 2026", regEnd: "Mar 31, 2026", examDate: "Apr-May 2026", link: "msdsuonline.in" },
  { id: 33, name: "OFSS (Bihar) (₹350)", regStart: "Apr 24, 2026", regEnd: "May 15, 2026", examDate: "Jun 2026", link: "ofssbihar.in" },
  { id: 34, name: "Tripura JEE (₹400)", regStart: "Feb 01, 2026", regEnd: "Feb 28, 2026", examDate: "Apr 2026", link: "tbjee.nic.in" },
  { id: 35, name: "CG PET (₹200)", regStart: "Mar 02, 2026", regEnd: "Mar 27, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
  { id: 36, name: "MP PAT (₹500)", regStart: "Apr 25, 2026", regEnd: "May 15, 2026", examDate: "Jun 2026", link: "vyapam.mp.gov.in" },
  { id: 37, name: "SAAT (Free)", regStart: "Dec 07, 2025", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "admission.soa.ac.in" },
  { id: 38, name: "FDDI AIST 2026 (₹600)", regStart: "Jan 01, 2026", regEnd: "Apr 20, 2026", examDate: "-", link: "fddiindia.com" },
  { id: 39, name: "GCET 2026 (₹200)", regStart: "Mar 15, 2026", regEnd: "Apr 10, 2026", examDate: "May 2026", link: "dte.goa.gov.in" },
  { id: 40, name: "Assam CEE 2026 (₹400)", regStart: "Feb 01, 2026", regEnd: "Mar 27, 2026", examDate: "Jun 2026", link: "astu.ac.in" },
  { id: 41, name: "JCECE 2026 (₹500)", regStart: "Apr 01, 2026", regEnd: "May 10, 2026", examDate: "Jun 2026", link: "jceceb.jharkhand.gov.in" },
  { id: 42, name: "KEAM 2026 (₹500)", regStart: "Feb 20, 2026", regEnd: "Mar 15, 2026", examDate: "Apr 2026", link: "cee.kerala.gov.in" },
  { id: 43, name: "HP CET 2026 (₹500)", regStart: "Mar 01, 2026", regEnd: "Apr 18, 2026", examDate: "May 2026", link: "himtu.ac.in" },
  { id: 44, name: "JKCET 2026 (₹500)", regStart: "Feb 01, 2026", regEnd: "Mar 25, 2026", examDate: "Apr 2026", link: "jkbopee.gov.in" },
  { id: 45, name: "Punjab JET 2026 (₹500)", regStart: "Mar 15, 2026", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "punjabteched.com" },
  { id: 46, name: "UKSEE 2026 (₹300)", regStart: "Apr 10, 2026", regEnd: "May 20, 2026", examDate: "Jun 2026", link: "uktech.ac.in" },
  { id: 47, name: "NSEE 2026 (₹300)", regStart: "Mar 01, 2026", regEnd: "Apr 10, 2026", examDate: "May 2026", link: "dtenagaland.org.in" },
  { id: 48, name: "MEEE 2026 (₹300)", regStart: "Feb 20, 2026", regEnd: "Mar 30, 2026", examDate: "Apr 2026", link: "mee.mizoram.gov.in" },
  { id: 49, name: "APJEE 2026 (₹400)", regStart: "Mar 01, 2026", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "apdhte.nic.in" },
  { id: 50, name: "CENTAC Engineering 2026 (₹300)", regStart: "May 01, 2026", regEnd: "Jun 15, 2026", examDate: "Jul 2026", link: "centacpuducherry.in" },
  { id: 51, name: "DUEEE 2026 (₹500)", regStart: "Apr 01, 2026", regEnd: "May 20, 2026", examDate: "Jun 2026", link: "dibru.ac.in" },
  { id: 52, name: "REAP 2026 (₹500)", regStart: "May 15, 2026", regEnd: "Jun 30, 2026", examDate: "Jul 2026", link: "reap2026.com" },
  { id: 53, name: "SMIT Online Test 2026 (₹500)", regStart: "Feb 01, 2026", regEnd: "May 15, 2026", examDate: "May 2026", link: "smu.edu.in" }
];
