const { useState, useEffect } = React;

window.useCollegeLogic = () => {
    // --- STATE MANAGEMENT ---
    const [activeTab, setActiveTab] = useState('eng'); 
    const [search, setSearch] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Pulls from global data files defined in index.html
    const [engData, setEngData] = useState(typeof initialEngData !== 'undefined' ? initialEngData : []);
    const [mgmtData, setMgmtData] = useState(typeof initialMgmtData !== 'undefined' ? initialMgmtData : []);
    const [engExamData, setEngExamData] = useState(typeof initialEngExams !== 'undefined' ? initialEngExams : []);
    const [mgmtExamData, setMgmtExamData] = useState(typeof initialMgmtExams !== 'undefined' ? initialMgmtExams : []);
    const [otherExamData, setOtherExamData] = useState(typeof initialOtherExams !== 'undefined' ? initialOtherExams : []);

    // --- EFFECTS ---
    // Update the live timer every minute
    useEffect(() => {
        const timer = setInterval(() => setCurrentDate(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // --- UPDATE HANDLERS ---
    const updateEng = (id, field, val) => {
        setEngData(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
    };
    
    const updateMgmt = (id, field, val) => {
        setMgmtData(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
    };
    
    const updateExam = (id, type, field, val) => {
        if (type === 'eng') setEngExamData(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
        else if (type === 'mgmt') setMgmtExamData(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
        else setOtherExamData(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
    };

    // --- UTILITIES & FORMATTING ---
    const filterList = (list) => {
        if (!list) return [];
        const s = search.toLowerCase();
        return list.filter(item => {
            const nameMatch = item.name && item.name.toLowerCase().includes(s);
            const locMatch = item.location && item.location.toLowerCase().includes(s);
            const entMatch = item.entrance && item.entrance.toLowerCase().includes(s);
            const noteMatch = item.notes && item.notes.toLowerCase().includes(s);
            return nameMatch || locMatch || entMatch || noteMatch;
        });
    };

    const formatCurrency = (val) => val ? `₹${val} L` : 'N/A';
    const formatPkg = (val) => val ? `₹${val} LPA` : 'N/A';
    
    const sortColleges = (colleges) => {
        return [...colleges].sort((a, b) => (b.popScore || 0) - (a.popScore || 0));
    };

    const getLiveStatus = (exam) => {
        const today = new Date(currentDate); 
        const start = new Date(exam.regStart);
        const end = new Date(exam.regEnd);
        
        today.setHours(0,0,0,0);
        start.setHours(0,0,0,0);
        end.setHours(0,0,0,0);

        const msPerDay = 1000 * 60 * 60 * 24;
        const diffTime = end.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / msPerDay);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return { label: "Date Error", color: "bg-gray-100", priority: 5 };
        }

        if (today >= start && diffDays >= 0 && diffDays <= 10) {
            return { label: `Closing in ${diffDays} Days`, color: 'bg-red-100 text-red-700 border border-red-200', priority: 1 };
        }

        if (today > end) {
             return { label: `Closed on ${exam.regEnd}`, color: 'bg-gray-200 text-gray-600 border border-gray-300', priority: 4 };
        }

        if (today >= start && today <= end) {
            return { label: `Opened on ${exam.regStart}`, color: 'bg-green-100 text-green-700 border border-green-200', priority: 2 };
        }

        if (today < start) {
            return { label: `Opens on ${exam.regStart}`, color: 'bg-blue-100 text-blue-700 border border-blue-200', priority: 3 };
        }

        return { label: "Unknown", color: "bg-gray-100", priority: 5 };
    };

    const sortExams = (exams) => {
        return [...exams].sort((a, b) => {
            const statA = getLiveStatus(a);
            const statB = getLiveStatus(b);
            if (statA.priority !== statB.priority) {
                return statA.priority - statB.priority;
            }
            const dateA = new Date(a.regEnd);
            const dateB = new Date(b.regEnd);
            return dateA - dateB;
        });
    };

    // --- CSV EXPORT ---
    const downloadCSV = () => {
        let data, headers, filename;
        if(activeTab === 'eng') {
            data = sortColleges(engData);
            headers = "Rank,Name,Entrance,RegDetails,Fees,AvgPkg,ValScore,PopScore,Location,Tier,Notes";
            filename = "Engineering_Colleges_2026.csv";
        } else if(activeTab === 'mgmt') {
            data = sortColleges(mgmtData);
            headers = "Rank,Name,Entrance,RegDetails,Fees,AvgPkg,ValScore,PopScore,Location,Tier,Notes";
            filename = "Management_Colleges_2026.csv";
        } else {
            alert("Switch to a College Tab to download data.");
            return;
        }

        const csv = [
            headers,
            ...data.map((item, index) => {
                 return `${index + 1},"${item.name}","${item.entrance}","${item.regDetails}",${item.fees},${item.package},${item.valScore},${item.popScore},"${item.location}","${item.collegeTier}","${item.notes}"`;
            })
        ].join("\n");

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    };

    // Expose everything needed for the UI
    return {
        activeTab, setActiveTab,
        search, setSearch,
        isEditMode, setIsEditMode,
        currentDate,
        engData, mgmtData, engExamData, mgmtExamData, otherExamData,
        updateEng, updateMgmt, updateExam,
        filterList, formatCurrency, formatPkg,
        sortColleges, getLiveStatus, sortExams,
        downloadCSV
    };
};
