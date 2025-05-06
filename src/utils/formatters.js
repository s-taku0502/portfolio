export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
};

export const getBadgeColor = (source) => {
    switch (source) {
        case 'Qiita':
            return 'bg-green-100 text-green-700';
        case 'Zenn':
            return 'bg-indigo-100 text-indigo-700';
        case 'Note':
            return 'bg-yellow-100 text-yellow-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};