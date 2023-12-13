
export function selectData(fileData, jsonData) {

    const jsonModifyData = jsonData.map(e => {
        return Object.values(e)
    });

    let selectData = [];
    let message = "";

    if (fileData.length > 0) {
        selectData = fileData;
        message = "Statistics are based on the data loaded from your file";
    } else if (jsonModifyData.length > 0) {
        selectData = jsonModifyData;
        message = "Statistics are based on the data loaded from database";
    }

    return [selectData, message];
}
