const initialOtherExams = [
    // 1. Medical, Pharmacy & Paramedical
    { id: 1, name: "NEET UG", regStart: "Feb 08, 2026", regEnd: "Mar 11, 2026", examDate: "May 2026", link: "neet.nta.nic.in" },
    { id: 3, name: "B.Pharm (NEET/State)", regStart: "Varies", regEnd: "Varies", examDate: "May-Jun 2026", link: "State Portals" },
    { id: 4, name: "MP PNST", regStart: "Mar 01, 2026", regEnd: "May 31, 2026", examDate: "Jun 2026", link: "mponline.gov.in" },
    { id: 5, name: "CG Paramedical", regStart: "Mar 01, 2026", regEnd: "Mar 31, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
    { id: 6, name: "Army College of Nursing", regStart: "Aug 01, 2026", regEnd: "Sep 15, 2026", examDate: "Oct 2026", link: "joinindianarmy.nic.in" },

    // 2. Science Research
    { id: 7, name: "NEST", regStart: "Jan 05, 2026", regEnd: "Apr 06, 2026", examDate: "Jun 2026", link: "nestexam.in" },
    { id: 8, name: "ISI Admission Test", regStart: "Apr 28, 2026", regEnd: "May 28, 2026", examDate: "May 2026", link: "admission.isical.ac.in" },
    { id: 9, name: "UGEE (IIIT Hyderabad)", regStart: "Feb 11, 2026", regEnd: "Mar 31, 2026", examDate: "May 2026", link: "ugadmissions.iiit.ac.in" },
    { id: 10, name: "ICAR AIEEA", regStart: "march 01, 2026", regEnd: "march 30, 2026", examDate: "Jul 2026", link: "icar.org.in" },
    { id: 11, name: "State Agriculture CET", regStart: "Varies", regEnd: "Varies", examDate: "Apr-May 2026", link: "State Portals" },

    // 3. Design, Architecture & Fashion
    { id: 12, name: "NIFT Entrance Exam", regStart: "Dec 01, 2026", regEnd: "Jan 06, 2027", examDate: "Feb 2027", link: "nift.ac.in" },
    { id: 13, name: "NID DAT", regStart: "Nov 01, 2025", regEnd: "Dec 01, 2025", examDate: "Dec 2025 - Jan 2026", link: "admissions.nid.edu" },
    { id: 14, name: "UCEED", regStart: "Oct 01, 2025", regEnd: "Nov 05, 2025", examDate: "Jan 2026", link: "uceed.iitb.ac.in" },

    // 4. Law
    { id: 15, name: "CLAT 2027", regStart: "Aug 01, 2026", regEnd: "Oct 31, 2026", examDate: "Dec 2026", link: "consortiumofnlus.ac.in" },
    { id: 16, name: "AILET", regStart: "Aug 01, 2025", regEnd: "Nov 10, 2025", examDate: "Dec 2025", link: "nludelhi.ac.in" },
    { id: 17, name: "SLAT", regStart: "Nov 01, 2025", regEnd: "Nov 30, 2025", examDate: "Dec 2025 - Jan 2026", link: "set-test.org" },
    { id: 18, name: "LSAT India", regStart: "Dec 01, 2025", regEnd: "Mar 31, 2026", examDate: "Jan-May 2026", link: "lsac.org" },

    // 5. Management & Commerce
    { id: 20, name: "CA Foundation", regStart: "Open", regEnd: "Jan 31, 2026", examDate: "May-Jun 2026", link: "icai.org" },
    { id: 21, name: "CS Foundation", regStart: "Open", regEnd: "Feb 28, 2026", examDate: "Jun 2026", link: "icsi.edu" },
    { id: 22, name: "CMA Foundation", regStart: "Open", regEnd: "Jan 31, 2026", examDate: "Jun 2026", link: "icmai.in" },

    // 6. Defence & Specialized
    { id: 23, name: "NDA II 2026", regStart: "Jun 01, 2026", regEnd: "Jul 31, 2026", examDate: "Sep 2026", link: "upsc.gov.in" },
    { id: 24, name: "AFCAT", regStart: "Nov 17, 2025", regEnd: "Dec 14, 2025", examDate: "Jan 2026", link: "afcat.cdac.in" },
    { id: 25, name: "CDS Exam", regStart: "Dec 10, 2025", regEnd: "Jan 31, 2026", examDate: "Apr 2026", link: "upsc.gov.in" },
    { id: 26, name: "TES Entry (Navy)", regStart: "Jan 03, 2026", regEnd: "Jan 19, 2026", examDate: "Jul 2026", link: "joinindiannavy.gov.in" },
    { id: 27, name: "Indian Navy INET", regStart: "Mar 14, 2026", regEnd: "Apr 06, 2026", examDate: "May 2026", link: "joinindiannavy.gov.in" },
    { id: 28, name: "IAF Agniveer Vayu", regStart: "Jan 12, 2026", regEnd: "Mar 10, 2026", examDate: "Mar-Apr 2026", link: "agnipathvayu.cdac.in" },
    { id: 29, name: "Sainik School Entrance", regStart: "Oct 10, 2025", regEnd: "Nov 11, 2025", examDate: "Jan 2026", link: "exams.nta.nic.in" },

    // 7. General UG & Miscellaneous
    { id: 30, name: "NCET 2026", regStart: "Feb 12, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "nta.ac.in" },
    { id: 32, name: "TISS BAT", regStart: "Jan 03, 2026", regEnd: "Mar 10, 2026", examDate: "Apr 2026", link: "tiss.edu" },
    { id: 33, name: "NCHMCT JEE", regStart: "Feb 01, 2026", regEnd: "Mar 25, 2026", examDate: "Apr 2026", link: "exams.nta.nic.in" },
    { id: 34, name: "IIMC Entrance Exam", regStart: "Feb 01, 2026", regEnd: "Feb 10, 2026", examDate: "Mar-Apr 2026", link: "iimc.gov.in" },
    { id: 35, name: "Jamia/XIC Entrance", regStart: "Feb 20, 2026", regEnd: "Mar 31, 2026", examDate: "May-Jun 2026", link: "jamiahamdard.edu/xic" },
    { id: 36, name: "Chandigarh Univ CUCET", regStart: "Oct 25, 2025", regEnd: "Mar 15, 2026", examDate: "May 2026", link: "cucet.cuchd.in" },
    { id: 37, name: "Gujarat ACPC Admission", regStart: "Feb 09, 2026", regEnd: "Mar 30, 2026", examDate: "Jun 2026", link: "gujacpc.admissions.nic.in" },
    { id: 38, name: "TNEA", regStart: "May 01, 2026", regEnd: "Jun 06, 2026", examDate: "Jun 2026", link: "tneaonline.org" },
    { id: 39, name: "IMU CET", regStart: "Mar 07, 2026", regEnd: "May 02, 2026", examDate: "May 2026", link: "imu.edu.in" },
    { id: 40, name: "MSDSU", regStart: "Mar 01, 2026", regEnd: "Mar 31, 2026", examDate: "Apr-May 2026", link: "msdsuonline.in" },
    { id: 41, name: "OFSS (Bihar)", regStart: "Apr 24, 2026", regEnd: "May 15, 2026", examDate: "Jun 2026", link: "ofssbihar.in" },
    { id: 42, name: "Tripura JEE", regStart: "Feb 01, 2026", regEnd: "Feb 28, 2026", examDate: "Apr 2026", link: "tbjee.nic.in" },
    { id: 43, name: "CG PET", regStart: "Mar 02, 2026", regEnd: "Mar 27, 2026", examDate: "May 2026", link: "vyapam.cgstate.gov.in" },
    { id: 44, name: "MP PAT", regStart: "Apr 25, 2026", regEnd: "May 15, 2026", examDate: "Jun 2026", link: "vyapam.mp.gov.in" },
    { id: 45, name: "SAAT", regStart: "Dec 07, 2025", regEnd: "Apr 30, 2026", examDate: "May 2026", link: "admission.soa.ac.in" },
    { id: 31, name: "FDDI AIST 2026", regStart: "Jan 01, 2026", regEnd: "Apr 20, 2026", examDate: "-", link: "fddiindia.com" },
    { id: 32, name: "AICEE 2026", regStart: "Oct 20, 2025", regEnd: "Apr 10, 2026", examDate: "-", link: "aicee.net" },
    { id: 33, name: "PERA CET 2026", regStart: "Jun 03, 2026", regEnd: "Jun 25, 2026", examDate: "-", link: "peracets.com" },
    { id: 34, name: "AP EAMCET 2026", regStart: "Feb 04, 2026", regEnd: "Mar 17, 2026", examDate: "-", link: "cets.apsche.ap.gov.in" }
];
