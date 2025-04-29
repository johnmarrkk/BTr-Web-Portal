// src/lib/agencyData.js

export const data = [
    { department: 'National Irrigation Administration', agency: 'National Irrigation Administration', uacs: '350050300005' },
    { department: 'Philippine Coconut Authority', agency: 'Philippine Coconut Authority', uacs: '350080300005' },
    { department: 'Civil Service Commission (CSC)', agency: 'Civil Service Commission', uacs: '300010300005' },
    { department: 'Commission on Audit (COA)', agency: 'Commission on Audit (COA)', uacs: '310000300005' },
    { department: 'Commission on Elections (COMELEC)', agency: 'Commission on Elections (COMELEC)', uacs: '320000300005' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'Department of Agrarian Reform (DAR)', uacs: '040010300005' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Albay', uacs: '040010500034' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Camarines Norte', uacs: '040010500035' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Camarines Sur', uacs: '040010500036' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Catanduanes', uacs: '040010500037' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Masbate', uacs: '040010500038' },
    { department: 'Department of Agrarian Reform (DAR)', agency: 'PARO - Sorsogon', uacs: '040010500039' },
    { department: 'Department of Agriculture (DA)', agency: 'Bureau of Fisheries and Aquatic Resources', uacs: '050030300005' },
    { department: 'Department of Agriculture (DA)', agency: 'Regional Field Unit - V', uacs: '050010300005' },
    { department: 'Department of Agriculture (DA)', agency: 'Regional Office - V (NIA)', uacs: '050010600005' },
    { department: 'Department of Budget and Management (DBM)', agency: 'Department of Budget and Management (DBM)', uacs: '060010300005' },
    { department: 'Department of Education (DepEd)', agency: 'Department of Education (DepEd)', uacs: '070010300005' },
];

// Helper to get unique Agencies
export function getUniqueAgencies() {
    return [...new Set(data.map(item => item.agency))];
}

// Helper to get Department and UACS by Agency
/**
 * @param {string} agency
 */
export function getDepartmentAndUacsByAgency(agency) {
    return data.filter(item => item.agency === agency);
}
