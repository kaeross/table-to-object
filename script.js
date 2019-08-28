function ConvertedTable(tableEl) {
    this.table = tableEl;
    this.tableArr = [];
    this.GetTd();
}

/**
 * set the table object keys from the first row of table
 **/ 
ConvertedTable.prototype.Key = function (index) {
    const columnHeaders = this.table.getElementsByTagName('tr')[0].children;
    return columnHeaders[index].innerText
}

ConvertedTable.prototype.GetTd = function () {
    
    const columnRows = arrayFrom(this.table.getElementsByTagName('tr'));

    var _this = this;
    for(var i = 1; i < columnRows.length; i++) {
        var row = columnRows[i];
        var tds = arrayFrom(row.children);
        var tdObj = {}
        tds.forEach(function (td, colIndex) {
            var value = td.innerText.trim();

            // It the value of the td isn't empty add key value pairs to tdObj
            if (value !== '') {                
                var key = _this.Key(colIndex);
                tdObj[key] = value
            }
        });

        // If the object isn't empty push to table array
        if (Object.keys(tdObj).length > 0) this.tableArr.push(tdObj)
    }
}

function arrayFrom (arrayLike) {
    var newArray = []
    for (var i = 0; i < arrayLike.length; i++) {
        newArray.push(arrayLike[i]);
    }
    return newArray;
}
