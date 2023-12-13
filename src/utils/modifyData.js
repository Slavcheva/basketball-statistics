export function modifyData(arr, headings, reduceCriterion) {

    const changedData = arr.map(row => {
        const obj = {
            "Player Name": row[0],
            "Team": row[1],
            "Time": row[2],
            "Points Score": row[3],
            "Points Score per Time": (row[3] / row[2]).toFixed(3),
        }
        const newObj = {};

        headings.map(h => {
            if (obj.hasOwnProperty(h)) {
                newObj[h] = obj[h];
            }
        })

        return newObj
    })

    if (reduceCriterion) {
        return reduceData(changedData, reduceCriterion)
    } else {
        return changedData;
    }
}

function reduceData(data, reduceCriterion) {

    const elements = createUniqueElements(data, reduceCriterion);

    return elements.map(e => {
        return data.filter(o => o[reduceCriterion] === e)
            .reduce((prev, curr) => {
                return {
                    "Player Name": curr["Player Name"],
                    "Team": curr["Team"],
                    "Points Score": prev["Points Score"] + Number(curr["Points Score"]),
                }

            }, {
                "Player Name": "",
                "Team": "",
                "Points Score": 0
            });
    });
}

function createUniqueElements(data, reduceCriterion) {
    const elementsSet = new Set();

    data.map(o => elementsSet.add(o[reduceCriterion]));

    return [...elementsSet]
}


export function selectData(fileData, jsonData) {
    const jsonModifyData = jsonData.map(e => {
        return Object.values(e)
    });

    let selectData = [fileData, jsonModifyData].filter(d => d.length !== 0);

    return selectData[0];
}
