# Table to object converter
JS script to convert any table into an object.

## Usage

Create a new converted table object.

```javascript
const table1 = new ConvertedTable(document.querySelectorAll('table')[0])
```

Output of calling `table1`
```javascript
 > SharedContent {table: table, tableArr: Array(6)}
```
 
Output of calling `table1.table`
```javascript
 > <table>...</table>
```

Output of calling `table1.tableArr`

```javascript
 > (2) [{…}, {…}]
0: {Col1Row1Key: "Val1Row1", Col2Row1Key: "Val2Row1"}
1: {Col1Row2Key: "Val1Row2", Col2Row2Key: "Val2Row2"}
```
