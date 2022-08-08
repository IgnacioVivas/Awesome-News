export function useFormatedDate(createdAt) {
    let date = new Date(createdAt);
    let formatted_date = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return formatted_date;
}