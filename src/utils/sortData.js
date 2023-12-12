export function sortData(data, sortCriterion) {

    const sortedData = data.sort((a, b) => {
        return b[sortCriterion] - a[sortCriterion];
    })

    sortedData.map((el, index) => el["Placement"] = index + 1);
}
