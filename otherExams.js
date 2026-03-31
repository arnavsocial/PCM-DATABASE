const otherExams = [
  // 1. Medical, Pharmacy & Paramedical
  { id: 1, name: "NEET UG (₹1700)", regStart: "Feb 08, 2026", regEnd: "Mar 11, 2026", examDate: "May 03, 2026", link: "neet.nta.nic.in" },
  { id: 2, name: "B.Pharm (NEET/State) (Varies)", regStart: "Varies", regEnd: "Varies", examDate: "May-Jun 2026", link: "State Portals" },
  { id: 3, name: "MP PNST (₹500)", regStart: "Mar 01, 2026", regEnd: "May 31, 2026", examDate: "Jun 2026", link: "mponline.gov.in" },
  { id: 4, name: "CG Paramedical (₹200)", regStart: "Mar 01, 2026", regEnd: "Mar 31, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
  { id: 5, name: "Army College of Nursing (₹1500)", regStart: "Aug 01, 2026", regEnd: "Sep 15, 2026", examDate: "Oct 2026", link: "joinindianarmy.nic.in" },
  { id: 6, name: "AIIMS Paramedical Entrance Exam (₹2000)", regStart: "Apr 01, 2026", regEnd: "May 10, 2026", examDate: "Jun 2026", link: "aiimsexams.ac.in" },
  { id: 7, name: "JENPAS UG (₹500)", regStart: "Jan 25, 2026", regEnd: "Feb 23, 2026", examDate: "Jun 2026", link: "wbjeeb.nic.in" },
  { id: 8, name: "SMFWBEE (₹2000)", regStart: "May 01, 2026", regEnd: "Jun 15, 2026", examDate: "Jul 2026", link: "smfwb.in" },
  { id: 9, name: "RUHS Paramedical Entrance Exam (₹1800)", regStart: "Apr 15, 2026", regEnd: "May 31, 2026", examDate: "Jun 2026", link: "ruhsraj.org" },

  // 2. Science Research
  { id: 10, name: "NEST (₹1200)", regStart: "Jan 05, 2026", regEnd: "Apr 06, 2026", examDate: "Jun 2026", link: "nestexam.in" },
  { id: 11, name: "ISI Admission Test (₹1250)", regStart: "Apr 28, 2026", regEnd: "May 28, 2026", examDate: "May 2026", link: "admission.isical.ac.in" },
  { id: 12, name: "ICAR AIEEA (₹1000)", regStart: "Mar 01, 2026", regEnd: "Mar 30, 2026", examDate: "Jul 2026", link: "icar.org.in" },

  // 3. Design, Architecture & Fashion
  { id: 13, name: "NIFT Entrance Exam (₹3000)", regStart: "Dec 2025", regEnd: "Jan 2026", examDate: "Feb 08, 2026", link: "nift.ac.in" },
  { id: 14, name: "NID DAT (₹3000)", regStart: "Nov 01, 2025", regEnd: "Dec 01, 2025", examDate: "Dec 2025 - Jan 2026", link: "admissions.nid.edu" },
  { id: 15, name: "UCEED (₹3600)", regStart: "Oct 01, 2025", regEnd: "Nov 05, 2025", examDate: "Jan 2026", link: "uceed.iitb.ac.in" },
  { id: 16, name: "FDDI AIST 2026 (₹600)", regStart: "Jan 01, 2026", regEnd: "Apr 20, 2026", examDate: "May 2026", link: "fddiindia.com" },

  // 4. Law
  { id: 17, name: "CLAT 2027 (₹4000)", regStart: "Aug 01, 2026", regEnd: "Oct 31, 2026", examDate: "Dec 06, 2026", link: "consortiumofnlus.ac.in" },
  { id: 18, name: "AILET (₹3500)", regStart: "Aug 01, 2025", regEnd: "Nov 10, 2025", examDate: "Dec 2025", link: "nludelhi.ac.in" },
  { id: 19, name: "SLAT (₹2250)", regStart: "Nov 01, 2025", regEnd: "Nov 30, 2025", examDate: "Dec 2025 - Jan 2026", link: "set-test.org" },
  { id: 20, name: "LSAT India (₹3999)", regStart: "Dec 01, 2025", regEnd: "Mar 31, 2026", examDate: "Jan-May 2026", link: "lsac.org" },

  // 5. Defence & Specialized
  { id: 21, name: "NDA II 2026 (₹100)", regStart: "May 20, 2026", regEnd: "Jun 09, 2026", examDate: "Sep 13, 2026", link: "upsc.gov.in" },
  { id: 22, name: "AFCAT (₹250)", regStart: "Nov 17, 2025", regEnd: "Dec 14, 2025", examDate: "Jan 2026", link: "afcat.cdac.in" },
  { id: 23, name: "CDS Exam (₹200)", regStart: "Dec 10, 2025", regEnd: "Jan 31, 2026", examDate: "Apr 2026", link: "upsc.gov.in" },
  { id: 24, name: "TES Entry (Navy) (Free)", regStart: "Jan 03, 2026", regEnd: "Jan 19, 2026", examDate: "Jul 2026", link: "joinindiannavy.gov.in" },
  { id: 25, name: "Indian Navy INET (₹215)", regStart: "Mar 14, 2026", regEnd: "Apr 06, 2026", examDate: "May 2026", link: "joinindiannavy.gov.in" },
  { id: 26, name: "IAF Agniveer Vayu (₹550)", regStart: "Jan 12, 2026", regEnd: "Mar 10, 2026", examDate: "Mar-Apr 2026", link: "agnipathvayu.cdac.in" },
  { id: 27, name: "Sainik School Entrance (₹650)", regStart: "Oct 10, 2025", regEnd: "Nov 11, 2025", examDate: "Jan 2026", link: "exams.nta.nic.in" },

  // 6. General UG & Engineering/State CETs
  { id: 28, name: "NCET 2026 (₹1200)", regStart: "Feb 12, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "nta.ac.in" },
  { id: 29, name: "TISS BAT (₹1500)", regStart: "Jan 03, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "tiss.edu" },
  { id: 30, name: "NCHMCT JEE (₹1000)", regStart: "Feb 01, 2026", regEnd: "Mar 25, 2026", examDate: "Apr 2026", link: "exams.nta.nic.in" },
  { id: 31, name: "MHT CET 2026 (₹800)", regStart: "Dec 30, 2025", regEnd: "Feb 15, 2026", examDate: "Apr 2026", link: "cetcell.mahacet.org" },
  { id: 32, name: "KCET 2026 (₹500)", regStart: "Jan 10, 2026", regEnd: "Feb 20, 2026", examDate: "Apr 2026", link: "kea.kar.nic.in" },
  { id: 33, name: "AP EAPCET 2026 (₹600)", regStart: "Mar 10, 2026", regEnd: "Apr 15, 2026", examDate: "May 2026", link: "cets.apsche.ap.gov.in" },
  { id: 34, name: "TS EAMCET 2026 (₹600)", regStart: "Mar 01, 2026", regEnd: "Apr 10, 2026", examDate: "May 2026", link: "eamcet.tsche.ac.in" },
  { id: 35, name: "WBJEE 2026 (₹500)", regStart: "Dec 20, 2025", regEnd: "Jan 20, 2026", examDate: "Apr 2026", link: "wbjeeb.nic.in" },
  { id: 36, name: "GUJCET 2026 (₹350)", regStart: "Jan 01, 2026", regEnd: "Jan 31, 2026", examDate: "Mar 2026", link: "gseb.org" },
  { id: 37, name: "SRMJEEE 2026 (₹1400)", regStart: "Nov 10, 2025", regEnd: "Apr 15, 2026", examDate: "Apr 2026", link: "srmist.edu.in" },
  { id: 38, name: "BITSAT 2026 (₹3400)", regStart: "Jan 15, 2026", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "bitsadmission.com" },
  { id: 39, name: "KIITEE 2026 (Free)", regStart: "Nov 10, 2025", regEnd: "Apr 10, 2026", examDate: "Apr 2026", link: "kiitee.kiit.ac.in" },
  { id: 40, name: "SAAT 2026 (Phase 1) (Free)", regStart: "Apr 01, 2026", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "soa.ac.in" },
  { id: 41, name: "SAAT 2026 (Phase 2) (Free)", regStart: "Apr 01, 2026", regEnd: "May 31, 2026", examDate: "Jun 2026", link: "soa.ac.in" },
  { id: 42, name: "LPUNEST 2026 (₹1000)", regStart: "Oct 15, 2025", regEnd: "Mar 31, 2026", examDate: "Apr 2026", link: "lpu.in" },
  { id: 43, name: "Amity Entrance Test (₹1500)", regStart: "Jan 01, 2026", regEnd: "May 30, 2026", examDate: "Jun 2026", link: "amity.edu" },
  { id: 44, name: "Assam CEE 2026 (₹1000)", regStart: "Feb 01, 2026", regEnd: "Mar 15, 2026", examDate: "May 2026", link: "astu.ac.in" },
  { id: 45, name: "Tripura JEE 2026 (₹350)", regStart: "Jan 20, 2026", regEnd: "Feb 24, 2026", examDate: "Apr 2026", link: "tbjee.nic.in" },
  { id: 46, name: "Goa CET / GCET 2026 (₹1500)", regStart: "Jan 10, 2026", regEnd: "Feb 15, 2026", examDate: "Apr 2026", link: "dte.goa.gov.in" },
  { id: 47, name: "JCECE 2026 (₹500)", regStart: "Apr 01, 2026", regEnd: "May 10, 2026", examDate: "Jun 2026", link: "jceceb.jharkhand.gov.in" },
  { id: 48, name: "KEAM 2026 (₹500)", regStart: "Feb 20, 2026", regEnd: "Mar 15, 2026", examDate: "Apr 2026", link: "cee.kerala.gov.in" },
  { id: 49, name: "HPCET 2026 (₹1550)", regStart: "Feb 01, 2026", regEnd: "Apr 18, 2026", examDate: "May 2026", link: "himtu.ac.in" },
  { id: 50, name: "JKCET 2026 (₹500)", regStart: "Feb 01, 2026", regEnd: "Mar 25, 2026", examDate: "Apr 2026", link: "jkbopee.gov.in" },
  { id: 51, name: "UKSEE 2026 (₹300)", regStart: "Apr 10, 2026", regEnd: "May 20, 2026", examDate: "Jun 2026", link: "uktech.ac.in" },
  { id: 52, name: "REAP 2026 (₹500)", regStart: "May 15, 2026", regEnd: "Jun 30, 2026", examDate: "Jul 2026", link: "reap2026.com" },
  { id: 53, name: "BCECE 2026 (₹1000)", regStart: "Apr 01, 2026", regEnd: "May 15, 2026", examDate: "Jun 2026", link: "bceceboard.bihar.gov.in" },
  { id: 54, name: "OJEE 2026 (₹1000)", regStart: "Jan 30, 2026", regEnd: "Mar 20, 2026", examDate: "May 2026", link: "ojee.nic.in" },
  { id: 55, name: "CG PET (₹200)", regStart: "Mar 02, 2026", regEnd: "Mar 27, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
  { id: 56, name: "IMU CET (₹1000)", regStart: "Mar 07, 2026", regEnd: "May 02, 2026", examDate: "May 2026", link: "imu.edu.in" }
];
