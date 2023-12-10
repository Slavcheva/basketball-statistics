function convertStrToArr(str) {
    return str.split(/(\r\n|\r|\n)/g)
        .filter(x => x.trim().length !== 0);
}

function convertArrToMatrix(arr) {
    return arr.map(x => x
        .split(',').map(cell => {
            return cell.trim();
        }));
}

function sanitizeData(str) {
    const arrData = convertStrToArr(str);
    return convertArrToMatrix(arrData);

}

export default sanitizeData;