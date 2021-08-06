/**
 * 日期格式化函数
 * @param {string} format 需要返回的格式 例如：YYYY-MM-DD hh-mm-ss
 * @returns {string} 日期
 */
export function formatDateTime(data, format) {
    let newData = new Date(data);
    const formatNumber = (num) => {
        return num < 10 ? "0" + num : num;
    };
    const year = newData.getFullYear();
    const month = formatNumber(newData.getMonth() + 1);
    const day = formatNumber(newData.getDate());
    const hour = formatNumber(newData.getHours());
    const Minutes = formatNumber(newData.getMinutes());
    const Seconds = formatNumber(newData.getSeconds());
    return format
        .replace("YYYY", year)
        .replace("MM", month)
        .replace("DD", day)
        .replace("dd", day)
        .replace("hh", hour)
        .replace("HH", hour)
        .replace("mm", Minutes)
        .replace("ss", Seconds);
}
